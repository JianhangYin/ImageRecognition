import React from 'react';
import styles from './ImagePanel.module.css';

class ImagePanel extends React.Component {
  render() {
    const { box } = this.props;
    return (
      <div>
        <div>
          <img id='inputImage' alt='' src={this.props.imageUrl} width='500px' height='auto'/>
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
