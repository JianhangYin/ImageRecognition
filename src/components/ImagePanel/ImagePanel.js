import React from 'react';
import styles from './ImagePanel.module.css';

class ImagePanel extends React.Component {
  render() {
    const { box } = this.props;
    return (
      <div className={styles.panel}>
        <div className={styles.content}>
          <img
            id='inputImage'
            className={styles.img}
            alt=''
            src={this.props.imageUrl}
          />
          <div
            className={styles.box}
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
