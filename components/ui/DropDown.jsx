import React, { useState } from "react";
import styles from "@/styles/DropDown.module.css";

const Dropdown = ({ options, onSelect, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDropDown = () => {
    setIsOpen(true);
  };

  const closeDropDown = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.dropDown} onMouseEnter={openDropDown} onMouseLeave={closeDropDown}>
      <span className={styles.dropDown__label}>{label}</span>
      {isOpen && (
        <div className={styles.dropDown__drawer}>
          {options.map((option) => (
            <div className={styles.dropDown__item} onClick={() => onSelect(option)}>
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
