import React from 'react';
import './ImagePanel.css';

class ImagePanel extends React.Component {
  render() {
    const { box } = this.props;
    return (
      <div className='center ma'>
        <div className='absolute mt2 '>
          <img id='inputImage' alt='' src={this.props.imageUrl} width='500px' height='auto'/>
          <div
            className='bounding-box'
            style={{
              top: box.topRow,
              bottom: box.bottomRow,
              left: box.leftCol,
              right: box.rightCol,
            }}
          >
          </div>
        </div>
      </div>
    );
  }
}

export default ImagePanel;
