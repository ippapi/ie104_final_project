import React from 'react';
import { useLayout } from '@/context/LayoutContext';
import styles from '@/styles/Home.module.css';

const variant_content = {
  variant1: {
    title: 'This is where we work together',
    main_content: 'They called this is my first life, but never it does. And they love it!',
    button_content: "Let's cooperate!",
  },
  variant2: {
    title: 'This is where we look into our soul',
    main_content: "I don't like small talk, only 心灵相通",
    button_content: "Let's talk!",
  },
  variant3: {
    title: 'The hidden one',
    main_content: 'My favourite one',
    button_content: "Let's rock!",
  }
}

const Home = () => {
  const { variant } = useLayout();
  const content = variant_content[variant];

  return (
    <div className={styles.home}>
      <div className={styles.home__content}>
        <h1 className={`${styles.home__title} ${styles[`title--${variant}`]}`}>{content.title}</h1>
        <p className={`${styles.home__maincontent} ${styles[`content--${variant}`]}`}>{content.main_content}</p>
        <button className={`${styles.home__button} ${styles[`content--${variant}`]}`}>{content.button_content}</button>
      </div>
      <div className={styles.home_img}>
        <p>img ở đây</p>
      </div>
    </div>
  );
}

export default Home;