import React from 'react';

class ImageLinkForm extends React.Component {
  render() {
    const {
      onInputChange,
      onSubmit,
    } = this.props;
    return (
      <nav>
        <p className='f3 center'>
          Face Recognition
        </p>
        <div className='center'>
          <div className='pa4 br3 shadow-5 center'>
            <input
              className='f4 pa2 w-70 center'
              type='text'
              onChange={onInputChange}
            />
            <button
              className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple pointer'
              onClick={onSubmit}
            >
              Detect
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default ImageLinkForm;
