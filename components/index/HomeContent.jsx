import React from 'react';
import styles from '@/styles/Home.module.css';

const variant_content = {
  variant1: {
    title: 'Version 1: Work only',
    main_content: '100% focus, 100% locked in',
    button_content: "Let's cooperate!",
  },
  variant2: {
    title: 'Version 2: Silence section',
    main_content: "I don't like small talk!",
    button_content: "Let's vibe!",
  },
  variant3: {
    title: 'Version 3: Hidden one',
    main_content: 'I do hide world from this!',
    button_content: "Let's rock!",
  }
};

const HomeContent = ({ variant }) => {
  const content = variant_content[variant]

  return (
    <div className={styles.home__content}>
      <h1 className={`${styles.home__title} ${styles[`title--${variant}`]}`}>{content.title}</h1>
      <p className={`${styles.home__maincontent} ${styles[`content--${variant}`]}`}>{content.main_content}</p>
      <button className={`${styles.home__button} ${styles[`button--${variant}`]}`}>{content.button_content}</button>
    </div>
  );
};

export default HomeContent;
