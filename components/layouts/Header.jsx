import React, { useState } from "react";
import styles from "@/styles/Layout.module.css";
import Dropdown from "@/components/ui/DropDown";

const Header = () => {
  const [language, setLanguage] = useState("VI");

  const changeLanguage = (language) => {
    setLanguage(language);
  };

  const languageOptions = ["VI", "EN"];

  return (
    <>
      <span className={styles['layout__header-phoneNumber']}>1800 6175</span>
      <div className={styles['layout__header-dropdown']}>
        <Dropdown label={language} options={languageOptions} onSelect={changeLanguage}/>
      </div>
    </>
  );
};

export default Header;
