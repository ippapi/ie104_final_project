import React from "react";
import styles from "@/styles/Ui.module.css";


const GridContent = ({ content, layout = "row", colors = ['var(--hover-color)']}) => {
    return (
      <div className={`${styles["content-grid"]} ${styles[`content-grid--${layout}`]}`}>
        {content.map((item, index) => (
          <div key={index} className={styles["content-grid__item"]} style={{ color: colors[index % colors.length] }}>
            <div className={styles["content-grid__title"]}>{item.title}</div>
            <div className={styles["content-grid__content"]}>{item.content}</div>
          </div>
        ))}
      </div>
    );
};

export default GridContent;