import React from 'react';
import Tilt from 'react-tilt';
import './Logo.css';
import kiwi from './kiwi.svg';

class Logo extends React.Component {
  render() {
    return (
      <div className='ma4 mt0'>
        <Tilt className='Tilt br2 shadow-2' options={{ max : 100 }} style={{ height: 100, width: 100 }} >
          <div className='Tilt-inner'>
            <img src={kiwi} alt='kiwi'/>
          </div>
        </Tilt>
      </div>
    );
  }
}

export default Logo;
