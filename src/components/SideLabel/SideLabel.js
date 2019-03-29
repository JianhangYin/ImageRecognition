import React from 'react';
import Button from '../common/Button';

import styles from './SideLabel.module.css';

class SideLabel extends React.Component {

  render() {
    const {
      onFaceDetectClick,
      onColorClick,
    } = this.props;
    return (
      <div className={styles.panel}>
        <Button
          text='Face'
          onSubmit={onFaceDetectClick}
        />
        <Button
          text='Color'
          onSubmit={onColorClick}
        />
        <Button
          text='NSFW'
        />
      </div>
    );
  }
}

export default SideLabel;
