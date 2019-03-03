import React from 'react';
import Clarifai from 'clarifai';

import Logo from '../components/Logo/Logo';
import ImageLinkForm from '../components/ImageLinkForm/ImageLinkForm';
import ImagePanel from '../components/ImagePanel/ImagePanel';

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
      box: [],
    };
  }

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
    return resultList.map(result => {
      const location = result.region_info.bounding_box;
      return {
        leftCol: location.left_col * width,
        topRow: location.top_row * height,
        rightCol: width * (1 - location.right_col),
        bottomRow: height * (1 - location.bottom_row),
      }
    });
  };

  dispalyFaceBox = (box) => {
    this.setState({box: box});
  };

  onSubmit = () => {
    this.setState({
      imageUrl: this.state.input,
    });
    app.models
      .predict(
        Clarifai.FACE_DETECT_MODEL,
        this.state.input,
      )
      .then(response => this.dispalyFaceBox(this.calculateFaceLocation(response)))
      .catch(error => console.log(error));
  };

  render() {
    return (
      <div className={styles.panel}>
        <Logo/>
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
