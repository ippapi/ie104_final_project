import React from 'react';
import { useLayout } from '@/context/LayoutContext';
import styles from '@/styles/Home.module.css';

const Home = () => {
  const { variant } = useLayout();

  return (
    <div className={styles.home}>
      
    </div>
  );
}

export default Home;