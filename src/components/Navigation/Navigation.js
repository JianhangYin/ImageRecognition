import React from 'react';
import styles from './Navigation.module.css';

class Navigation extends React.Component {
  render() {
    return (
      <nav className={styles.right}>
        <p>Sign Out</p>
      </nav>
    );
  }
}

export default Navigation;
