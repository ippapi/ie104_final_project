import styles from '@/styles/Layout.module.css'

import React from 'react';
import Navbar from '@/components/layouts/Navbar';
import Footer from '@/components/layouts/Footer';
import { useLayout } from '@/context/LayoutContext'

const Layout = ({ children }) => {
  const { variant } = useLayout();
  const layoutClass = `${styles.layout} ${styles[`layout--${variant}`]}`;
  
  return (
    <div className = {layoutClass}>
      <header className = { styles.layout__header }>
        <Navbar />
      </header>

      <main className = { styles.layout__main }>
        { children } 
      </main>

      <footer className = { styles.layout__footer }>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
