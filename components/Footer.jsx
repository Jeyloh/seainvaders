import Head from 'next/head';
import styles from '../styles/Footer.module.css';
import React from 'react';
import Link from 'next/link';
import content from '../content/no.json';

export default function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Wrapper}>
        <div className={styles.Content}>
          <h1>{content.footer.title}</h1>
          <p>{content.footer.main}</p>
        </div>

        <div className={styles.FooterLinks}>
          <h2>{content.contact.title}</h2>
          <ul>
            <li>
              <p>{content.contact.line1}</p>
            </li>
            <li>
              <p>{content.contact.line2}</p>
            </li>
            <li>
              <p>{content.contact.line3}</p>
            </li>
            <li>
              <p>{content.contact.line4}</p>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
