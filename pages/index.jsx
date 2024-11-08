import React from 'react';
import { useLayout } from '@/context/LayoutContext';
import HomeContent from '@/components/index/HomeContent';
import styles from '@/styles/Home.module.css';

const Home = () => {
  const { variant } = useLayout();

  return (
    <div className={styles.home}>
      <HomeContent variant={variant}/>
    </div>
  );
}

export default Home;
