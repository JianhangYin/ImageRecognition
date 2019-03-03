import React from 'react';
import _ from 'lodash';
import Clarifai from 'clarifai';

import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import ImagePanel from '../components/ImagePanel/ImagePanel';
import SideLabel from '../components/SideLabel/SideLabel';

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
      result: {},
      box: [],
    };
  }

  onSideClick = () => {
    this.calculateFaceLocation(this.state.result);
  };

  onInputChange = (event) => {
    this.setState({
      input: event.target.value,
    });
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
      result: {},
      imageUrl: this.state.input,
    });
    try {
      app.models
        .predict(
          Clarifai.FACE_DETECT_MODEL,
          this.state.input,
        )
        .then(result => this.setState({result}))
    } catch(err) {
      console.log(err);
    }
  };

  render() {
    const { result } = this.state;
    return (
      <div className={styles.panel}>
        <Logo/>
        {!_.isEmpty(result) && <SideLabel
          onSubmit={this.onSideClick}
        />}
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onSubmit={this.onSubmit}
        />
        <ImagePanel
          imageUrl={this.state.imageUrl}
          box={this.state.box}
        />
      </div>
    );
  }
}

export default FaceRecognition;
