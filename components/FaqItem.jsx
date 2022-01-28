import React, { useState } from 'react';
import styles from '../styles/FaqItem.module.css';
import { FaChevronDown } from 'react-icons/fa';
import cn from 'classnames';

export default function FaqItem({ title, content }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.Wrapper} onClick={() => setOpen(!open)}>
      <div className={styles.HeaderContainer}>
        <h3>{title}</h3>
        <span
          className={cn(styles.Icon, {
            [styles.IconOpen]: open,
          })}
        >
          <FaChevronDown />
        </span>
      </div>
      {open && <p className={styles.FaqAnswer}>{content}</p>}
    </div>
  );
}
