import React, {useState, useEffect} from "react";

import styles from "@/styles/UI/NavBar.module.css";

import Dropdown from "@/components/ui/DropDown";
import EffectImg from "@/components/ui/EffectImg";

const NavBar = () => {
    const menuItems = [
        {
            label: "Trang chủ",
            link: "/",
        },
        {
            label: "Các khóa học",
            dropdown: [
                { name: "Học thử miễn phí", link: "/courses/trial" },
                { name: "Tiếng anh cho trẻ 1-2 tuổi", link: "/courses/1-2" },
                { name: "Tiếng anh cho trẻ 3-8 tuổi", link: "/courses/3-8" },
                { name: "Tiếng anh cho trẻ 9-12 tuổi", link: "/courses/9-12" },
                { name: "Tiếng anh cho trẻ 13-18 tuổi", link: "/courses/13-18" },
            ],
        },
        {
            label: "Phương pháp của chúng tôi",
            link: "/method"
        },
        {
            label: "Cơ sở",
            link: "/base"
        },
        {
            label: "Các hoạt động",
            dropdown: [
              { name: "Các hoạt động bằng tiếng anh", link: "/activity/en" },
              { name: "Hội hè fun week", link: "/activity/fw" },
            ],
        },
    ];

    const [bgColor, setBgColor] = useState('var(--white-color)');
    const [isSticky, setIsSticky] = useState(false);

    const getColor = (scrollY) => {
        const maxScroll = 1000;
        const value = Math.min(scrollY / (maxScroll * 10), 1);
    
        const hue = Math.floor(400 * value);
        const lightness = 90 - value * 10;
        const saturation = 40 + value * 20;
    
        if(value == 0){
            return 'hsl(0, 0%, 100%)';
        }else{
            return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        }
    }

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;;
            setBgColor(getColor(scrollY));
            setIsSticky(window.scrollY > 50);
        };
        
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`${styles['nav']} ${isSticky ? styles['sticky'] : ""}`} style={{backgroundColor: bgColor}}>
            <a href="/" className={styles['nav__logo']}> 
                <EffectImg 
                    src="/logo.png" 
                    style={{effect:'scalezoom', height: '65px', width:'auto'}} 
                />
            </a>

            <div className={styles['nav__menu']}>
                {menuItems.map((item) =>
                    item.dropdown ? (
                        <Dropdown options={item.dropdown} label={item.label} />
                    ) : (
                        <a href={item.link} className={styles['nav__menu-link']}>
                            {item.label}
                        </a>
                    )
                )}

                <a href="/regis" className={styles['nav__menu-button']}>Đăng Ký</a>
            </div>
        </nav>);
};

export default NavBar;
