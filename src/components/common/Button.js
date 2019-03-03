import React from 'react';
import styles from './Button.module.css';

class Button extends React.Component {

  render() {
    const {
      text,
      onSubmit,
    } = this.props;
    return (
      <button
        className={styles.button}
        onClick={onSubmit}
      >
        {text}
      </button>
    );
  }
}

export default Button;
