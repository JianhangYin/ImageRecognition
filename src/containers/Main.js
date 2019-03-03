import React from 'react';
import Particles from 'react-particles-js';
import { PARTICLES_PARAM } from '../common/constant';
import FaceRecognition from './FaceRecognition';

import styles from './Mian.module.css';

class App extends React.Component {

  render() {
    return (
      <div className={styles.background}>
        <Particles
          className={styles.particles}
          params={PARTICLES_PARAM}
        />
        <FaceRecognition/>
      </div>
    );
  }
}

export default App;
