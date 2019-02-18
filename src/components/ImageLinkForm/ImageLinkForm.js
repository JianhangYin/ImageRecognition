import React from 'react';

class ImageLinkForm extends React.Component {
  render() {
    return (
      <nav>
        <p className='f3'>
          Face Recognition
        </p>
        <div className='center'>
          <input className='f4 pa2 w-70 center' type='text'/>
          <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Detect</button>
        </div>
      </nav>
    );
  }
}

export default ImageLinkForm;
