import React from 'react';
import Tilt from 'react-tilt';
import styles from './Logo.mudule.css';
import kiwi from './kiwi.svg';

class Logo extends React.Component {
  render() {
    return (
      <div>
        <Tilt className={styles.Tilt} options={{ max : 100 }} style={{ height: 100, width: 100 }} >
          <div>
            <img src={kiwi} alt='kiwi'/>
          </div>
        </Tilt>
      </div>
    );
  }
}

export default Logo;
