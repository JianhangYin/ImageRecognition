import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import './App.css';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Particles from 'react-particles-js';

class App extends React.Component {
  render() {
    const params = {
      "particles": {
        "number": {
          "value": 160,
          "density": {
            "enable": false,
          },
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "speed": 4,
            "size_min": 0.3,
          },
        },
        "line_linked": {
          "enable": false,
        },
        "move": {
          "random": true,
          "speed": 1,
          "direction": "top",
          "out_mode": "out",
        },
      },
      "interactivity": {
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble",
          },
          "onclick": {
            "enable": true,
            "mode": "repulse",
          },
        },
        "modes": {
          "bubble": {
            "distance": 250,
            "duration": 2,
            "size": 0,
            "opacity": 0,
          },
          "repulse": {
            "distance": 400,
            "duration": 4,
          },
        },
      },
    };
    return (
      <div>
        <Particles
          className='particles'
          params={params}
        />
        <Navigation/>
        <Logo/>
        <ImageLinkForm/>
      </div>
    );
  }
}

export default App;
