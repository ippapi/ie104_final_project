// components/LifeSection.js
import React from 'react';
import Link from 'next/link'; 
import styles from '@/styles/Nav.module.css'

const NavbarSection = ({ title, choices }) => {
    return (
        <div className={styles.nav__section}>
            <h1 className={styles.nav__section__title}>
                {title}
            </h1>

            <div className={styles.nav__section__submenu}>
                {
                    choices.map((choice) => 
                            <Link key={choice.id} href={choice.link} className={styles.nav__submenu-choice}>
                                {choice.name}
                            </Link>
                )}  
            </div>
        </div>
    );
};

export default NavbarSection;
