import React from 'react';
import Button from '../common/Button';

import styles from './SideLabel.module.css';

class SideLabel extends React.Component {

  render() {
    const { onSubmit } = this.props;
    return (
      <div className={styles.panel}>
        <Button
          text='Face'
          onSubmit={onSubmit}
        />
        <Button
          text='Color'
        />
        <Button
          text='NSFW'
        />
      </div>
    );
  }
}

export default SideLabel;
