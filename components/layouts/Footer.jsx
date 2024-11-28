import React from 'react';
import styles from '@/styles/Layout.module.css';
import FooterCol from '@/components/ui/FooterCol';

const Footer = () => {

    const contents = [
        {
            title: 'KIDS&US VIETNAM',
            list: [
                {
                    discription: '❯ General Terms & Condition',
                    href: '#'
                },
                {
                    discription: '❯ Rules & Regulations',
                    href: '#'
                },
                {
                    discription: '❯ Privacy Policy',
                    href: '#'
                },
                {
                    discription: '❯ Licenses',
                    href: '#'
                },
            ]
        },
        {
            title: 'CÁC KHOÁ HỌC',
            list: [
                {
                    discription: '❯ Khoá học tiếng Anh cho trẻ 1-2 tuổi',
                    href: '/courses/1-2'
                },
                {
                    discription: '❯ Khoá học tiếng Anh cho trẻ 3-8 tuổi',
                    href: '/courses/3-8'
                },
                {
                    discription: '❯ Khoá học tiếng Anh cho trẻ 9-12 tuổi',
                    href: '/courses/9-12'
                },
                {
                    discription: '❯ Khoá học tiếng Anh cho trẻ 13-18 tuổi',
                    href: '/courses/13-18'
                },
            ]
        },
        {
            title: 'CƠ SỞ',
            list: [
                {
                    discription: '❯ Nguyễn Thị Thập',
                    href: '#'
                },
                {
                    discription: '❯ Cityland Park Hills',
                    href: '#'
                },
                {
                    discription: '❯ Sư Vạn Hạnh',
                    href: '#'
                },
                {
                    discription: '❯ Lê Văn Việt',
                    href: '#'
                },
                {
                    discription: '❯ Tên lửa',
                    href: '#'
                },
            ]
        },
    ]


  return (
        <footer className={styles['footer']}>
            <div className={styles['footer__body']}>
                <div className={styles['body__container']}>
                    {contents.map((content) => {
                        return <FooterCol content={content} />
                    })}
                    <div className={styles['body__container-item']}>
                        <h4 className={styles['item-widget-title']}>LIÊN HỆ VỚI CHÚNG TÔI</h4>
                        <div className={styles['item-textwidge']}>
                            <ul className={styles['item__textwidge-links']}>
                                <li>  47-49 Nguyễn Thị Thập, Khu dân cư Him Lam, Quận 7, TP.HCM</li>
                                <li> info@kidsandus.net.vn</li>
                                <li>1800 6175</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles['footer__info']}>
                <div className={styles['footer__info-copyright']}>
                    <p>Copyright © 2024 Kids&amp;Us Vietnam</p>
                </div>
            </div>
        </footer>
  );
};

export default Footer;
