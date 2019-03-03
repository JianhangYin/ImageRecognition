import React from 'react';
import Button from '../common/Button';
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
          <div className={styles.button}>
            <Button
              text='Detect'
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ImageLinkForm;
