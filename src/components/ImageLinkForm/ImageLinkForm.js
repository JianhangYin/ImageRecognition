import React from 'react';
import styles from './ImageLinkForm.module.css';

class ImageLinkForm extends React.Component {
  render() {
    const {
      onInputChange,
      onSubmit,
    } = this.props;
    return (
      <div className={styles.panel}>
        <div className={styles.title}>
          Face Recognition
        </div>
        <div className={styles.input}>
          <input
            className={styles.form}
            type='text'
            onChange={onInputChange}
          />
          <button
            className={styles.button}
            onClick={onSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    );
  }
}

export default ImageLinkForm;
