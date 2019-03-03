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
          {
            box.length !== 0 && box.map((tiem, index) => (
              <div
                className={styles.box}
                key={index}
                style={{
                  top: tiem.topRow,
                  bottom: tiem.bottomRow,
                  left: tiem.leftCol,
                  right: tiem.rightCol,
                }}
              >
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}

export default ImagePanel;
