import React from 'react';
import content from '../content/no.json';
import styles from '../styles/SplitBox.module.css';

export default function SplitBox() {
  return (
    <div className={styles.SplitBox}>
      <div className={styles.SplitBoxAbsolute}>
        <div></div>
        <div></div>
      </div>
      <div className={styles.SplitBoxFirst}></div>
      <div className={styles.SplitBoxSecond}></div>
    </div>
  );
}
