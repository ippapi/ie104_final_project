import React from 'react';
import styles from '@/styles/Layout.module.css';

const Footer = () => {
  return (
    <footer className={styles['layout__footer']}>
        <div className={styles['layout__footer-section']}>
            <p className={styles['layout__footer-title']}>KID&US VIETNAM</p>
            <div className={styles['layout__footer-linkcontainer']}>
                <a className={styles['layout__footer-link']}>General Terms & Condition</a>
                <a className={styles['layout__footer-link']}>Rules & Regulations</a>
                <a className={styles['layout__footer-link']}>Privacy Policy</a>
                <a className={styles['layout__footer-link']}>Licenses</a>
            </div>
        </div>
        <div className={styles['layout__footer-section']}>
            <p className={styles['layout__footer-title']}>CÁC KHOÁ HỌC</p>
            <div className={styles['layout__footer-linkcontainer']}>
                <a href="/courses/1-2" className={styles['layout__footer-link']}>Khóa học tiếng Anh cho trẻ 1-2 tuổi</a>
                <a href="/courses/3-8" className={styles['layout__footer-link']}>Khóa học tiếng Anh cho trẻ 3-8 tuổi</a>
                <a href="/courses/9-12" className={styles['layout__footer-link']}>Khóa học tiếng Anh cho trẻ 9-12 tuổi</a>
                <a href="/courses/13-18" className={styles['layout__footer-link']}>Khóa học tiếng Anh cho trẻ 13-18 tuổi</a>
            </div>
        </div>

        <div className={styles['layout__footer-section']}>
            <p className={styles['layout__footer-title']}>CƠ SỞ</p>
            <p>85-86 Thái Hà, Hà nội</p>
            <p>Đường Vĩnh Viễn, Quận 1, Hồ Chí Minh</p>
        </div>

        <div className={styles['layout__footer-section']}>
            <p className={styles['layout__footer-title']}>Liên hệ với chúng tôi</p>
            <p>Email: info@kidsandus.net.vn</p>
            <p>Hotline: 1800 6175</p>
        </div>
    </footer>
  );
};

export default Footer;
