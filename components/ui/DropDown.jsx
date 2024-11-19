import React, { useState } from "react";
import styles from "@/styles/Ui.module.css";

const Dropdown = ({ options, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDropDown = () => {
    setIsOpen(true);
  };

  const closeDropDown = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles['dropdown']} onMouseEnter={openDropDown} onMouseLeave={closeDropDown}>
      <span className={styles['dropdown__label']}>{label}</span>
      {isOpen && (
        <div className={styles['dropdown__drawer']}>
          {options.map((option) => (
            <a href={option.link} className={styles['dropdown__item']}>
              {option.name}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
