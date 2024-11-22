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
        <div className={styles['layout__header']}>
            <div class={styles['layout__header-phone']}>1800 6175</div>
            <div class={styles['layout__header-language']}>
                <Dropdown options={languages.dropdown} label={languages.label} />
            </div>
        </div>
    )
};

export default Header;
