import React from "react";
import styles from "@/styles/Layout.module.css"
import Dropdown from "@/components/ui/DropDown";

const Header = () => {
  const menuItems = [
    {
      label: "Courses",
      dropdown: [
        { name: "Tiếng anh cho trẻ 1-2 tuổi", link: "/courses/1-2" },
        { name: "Tiếng anh cho trẻ 3-8 tuổi", link: "/courses/3-8" },
        { name: "Tiếng anh cho trẻ 9-12 tuổi", link: "/courses/9-12" },
        { name: "Tiếng anh cho trẻ 13-18 tuổi", link: "/courses/13-18" },
      ],
    },
    {
      label: "Giới thiệu",
      dropdown: [
        { name: "Sứ mệnh", link: "/about/story" },
        { name: "Đội ngũ", link: "/about/team" },
        { name: "Hành trình", link: "/about/careers" },
      ],
    },
    { label: "Liên hệ", link: "/contact" },
    { label: "Blog", link: "/blog" },
  ];

  return (<>
      <a href="/" className={styles['layout__header-logo']}> 
        Kids&Us
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
