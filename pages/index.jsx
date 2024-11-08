import React from 'react';
import { useLayout } from '@/context/LayoutContext';
import HomeContent from '@/components/index/HomeContent';
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
};

const Home = () => {
  const { variant } = useLayout();

  return (
    <div className={styles.home}>
      <HomeContent variant={variant} variant_content={variant_content[variant]} />
    </div>
  );
}

export default Home;
