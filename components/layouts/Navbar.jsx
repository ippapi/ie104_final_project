import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Layout.module.css';

const Nav = ({ variant }) => {
    return (
        <header className={`${styles.layout__header} ${styles[`layout--${variant}`]}`}>
            <nav className={styles.nav__container}>
                <NavLogo variant={variant} />
                <NavMenu variant={variant} />
            </nav>
        </header>
    );
};

const NavMenu = ({ variant }) => {
    const menuItems = [
        { path: '/about', label: 'About' },
        { path: '/works', label: 'Works' },
        { path: '/contact', label: 'Contact' },
    ];

    return (
        <ul className={styles.nav__menu}>
            {menuItems.map((item) => (
                <NavItem key={item.path} path={item.path} label={item.label} variant={variant} />
            ))}
        </ul>
    );
};

const NavLogo = ({ variant }) => {
    return (
        <Link href="/" className={`${styles.nav__logo} ${styles[`layout--${variant}`]}`}>
            MyPortfolio
        </Link>
    );
};

const NavItem = ({ variant, path, label }) => {
    return (
        <li className={styles.nav__item}>
            <Link href={path} className={`${styles.nav__link} ${styles[`layout--${variant}`]}`}>
                {label}
            </Link>
        </li>
    );
};

export default Nav;
