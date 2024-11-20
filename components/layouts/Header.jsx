import React from "react";
import styles from "@/styles/Layout.module.css"
import Dropdown from "@/components/ui/DropDown";

const Header = () => {
  const menuItems = [
    {
      label: "Trang chủ",
      link: "/",
    },
    {
      label: "Các khóa học",
      dropdown: [
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

  return (<>
      <a href="/" className={styles['layout__header-logo']}> 
        <img src="/logo.png"   style={{height: '60px'}} />
      </a>

      <div className={styles['layout__header-menu']}>
        {menuItems.map((item) =>
          item.dropdown ? (
            <Dropdown options={item.dropdown} label={item.label} />
          ) : (
            <a href={item.link} className={styles['layout__header-link']}>
              {item.label}
            </a>
          )
        )}

<a href="/dang-ky" className={styles['layout__header-button']}>Đăng Ký</a>
      </div>
    </>);
};

export default Header;
