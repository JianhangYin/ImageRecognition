import React from 'react';
import Clarifai from 'clarifai';
import Particles from 'react-particles-js';
import { PARTICLES_PARAM } from './common/constant';

import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import ImagePanel from './components/ImagePanel/ImagePanel';

import './App.css';


const app = new Clarifai.App({
  apiKey: 'e772a7ea78b34f7b896ff4fdcad17d76'
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
    };
  }

  onInputChange = (event) => {
    this.setState({
      input: event.target.value,
    });
  };

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width * (1 - clarifaiFace.right_col),
      bottomRow: height * (1 - clarifaiFace.bottom_row),
    };
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
      <div>
        <Particles
          className='particles'
          params={PARTICLES_PARAM}
        />
        <Navigation/>
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

export default App;
