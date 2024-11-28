import React, {useState, useEffect} from "react";
import styles from "@/styles/Layout.module.css"
import Dropdown from "@/components/ui/DropDown";

const Header = () => {
    const languages = {
        label: "Tiếng việt",
        dropdown: [
            { name: "Tiếng việt", link: "/" },
            { name: "Tiếng anh", link: "/" },
        ],
    }
    
    return (
        <div className={styles['header']}>
            <div class={styles['header-phone']}>1800 6175</div>
            <div class={styles['header-language']}>
                <Dropdown options={languages.dropdown} label={languages.label} />
            </div>
        </div>
    )
};

export default Header;
