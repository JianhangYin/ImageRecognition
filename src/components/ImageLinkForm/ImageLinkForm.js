import React from 'react';

class ImageLinkForm extends React.Component {
  render() {
    const {
      onInputChange,
      onSubmit,
    } = this.props;
    return (
      <nav>
        <p>
          Face Recognition
        </p>
        <div>
          <div>
            <input
              type='text'
              onChange={onInputChange}
            />
            <button
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
