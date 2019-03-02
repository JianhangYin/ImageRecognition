import React from 'react';
import Tilt from 'react-tilt';
import kiwi from './kiwi.svg';
import styles from './Logo.module.css';

class Logo extends React.Component {
  render() {
    return (
      <div className={styles.panel}>
        <Tilt
          className={styles.tilt}
          options={{ max : 100 }}
          style={{ height: 100, width: 100 }}
        >
          <div>
            <img src={kiwi} alt='kiwi'/>
          </div>
        </Tilt>
      </div>
    );
  }
}

export default Logo;
