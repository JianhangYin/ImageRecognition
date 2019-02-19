import React from 'react';

class ImagePanel extends React.Component {
  render() {
    return (
      <div className='center ma'>
        <div className='absolute mt2 '>
          <img alt='' src={this.props.imageUrl} width='500px' height='auto'/>
        </div>
      </div>
    );
  }
}

export default ImagePanel;
