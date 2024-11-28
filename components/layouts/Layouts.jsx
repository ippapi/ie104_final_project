import styles from '@/styles/Layout.module.css'

import React from 'react';
import Header from '@/components/layouts/Header';
import Footer from '@/components/layouts/Footer';

const Layout = ({ children }) => {
    return (
        <div>
            <Header />

            <main className = { styles['main'] }>
                { children } 
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
