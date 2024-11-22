import styles from '@/styles/Layout.module.css'

import React from 'react';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />

            <main className = { styles['layout__main'] }>
                { children } 
            </main>

            <footer className = { styles['layout__footer']}>
                <Footer />
            </footer>
        </div>
    );
};

export default Layout;
