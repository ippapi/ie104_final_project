import React from 'react';
import styles from '@/styles/Home.module.css';

const HomeContent = ({ variant, variant_content }) => {
  return (
    <div className={styles.home__content}>
      <h1 className={`${styles.home__title} ${styles[`title--${variant}`]}`}>{variant_content.title}</h1>
      <p className={`${styles.home__maincontent} ${styles[`content--${variant}`]}`}>{variant_content.main_content}</p>
      <button className={`${styles.home__button} ${styles[`button--${variant}`]}`}>{variant_content.button_content}</button>
    </div>
  );
};

export default HomeContent;
