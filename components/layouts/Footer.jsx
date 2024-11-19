import React from 'react';
import styles from '@/styles/Layout.module.css';

const Footer = () => {
  return (
    <footer className={styles['layout__footer']}>
        <div className={styles['layout__footer-section']}>
            <p className={styles['layout__footer-title']}>CÁC KHOÁ HỌC</p>
            <p>Khóa học tiếng Anh cho trẻ 1-2 tuổi</p>
            <p>Khóa học tiếng Anh cho trẻ 3-8 tuổi</p>
            <p>Khóa học tiếng Anh cho trẻ 9-12 tuổi</p>
            <p>Khóa học tiếng Anh cho trẻ 13-18 tuổi</p>
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
