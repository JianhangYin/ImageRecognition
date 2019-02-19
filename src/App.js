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
    };
  }

  onInputChange = (event) => {
    this.setState({
      input: event.target.value,
    });
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
      .then(
        function(response) {
        // do something with response
        },
        function(err) {
        // there was an error
        },
      );
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
        />
      </div>
    );
  }
}

export default App;
