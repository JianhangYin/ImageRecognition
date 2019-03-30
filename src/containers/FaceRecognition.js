import React from 'react';
import _ from 'lodash';
import Clarifai from 'clarifai';

import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import ImagePanel from '../components/ImagePanel/ImagePanel';
import SideLabel from '../components/SideLabel/SideLabel';
import ColorPieChart from '../components/ColorPieChart/ColorPieChart';

import styles from './FaceRecognition.module.css';

const app = new Clarifai.App({
  apiKey: 'e772a7ea78b34f7b896ff4fdcad17d76'
});

class FaceRecognition extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      input: '',
      imageUrl: '',
      faceResult: {},
      colorResult: {},
      box: [],
      colors: [],
    };
  }

  onFaceDetectClick = () => {
    this.calculateFaceLocation(this.state.faceResult);
  };

  onColorClick = () => {
    this.calculateColorRadio(this.state.colorResult);
  };

  onInputChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  calculateColorRadio = (data) => {
    const resultList = data.outputs[0].data.colors;
    this.setState({colors: resultList});
  };

  calculateFaceLocation = (data) => {
    const resultList = data.outputs[0].data.regions;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    const boxLocation = resultList.map(result => {
      const location = result.region_info.bounding_box;
      return {
        leftCol: location.left_col * width,
        topRow: location.top_row * height,
        rightCol: width * (1 - location.right_col),
        bottomRow: height * (1 - location.bottom_row),
      }
    });
    this.setState({box: boxLocation || []});
  };

  onSubmit = () => {
    this.setState({
      faceResult: {},
      colorResult: {},
      imageUrl: this.state.input,
    });
    try {
      app.models
        .predict(
          Clarifai.FACE_DETECT_MODEL,
          this.state.input,
        )
        .then(faceResult => this.setState({faceResult}));
      app.models
        .predict(
          Clarifai.COLOR_MODEL,
          this.state.input,
        )
        .then(colorResult => this.setState({colorResult}));
    } catch(err) {
      console.log(err);
    }
  };

  render() {
    const {
      faceResult,
      colorResult,
      colors,
    } = this.state;
    return (
      <div className={styles.panel}>
        <Logo/>
        {
          !_.isEmpty(faceResult) && !_.isEmpty(colorResult) &&
          <SideLabel
            onFaceDetectClick={this.onFaceDetectClick}
            onColorClick={this.onColorClick}
          />
        }
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        <ImagePanel
          imageUrl={this.state.imageUrl}
          box={this.state.box}
        />
        {
          colors.length !== 0 &&
          <ColorPieChart
            colorInfo={colors}
          />
        }
      </div>
    );
  }
}

export default FaceRecognition;
