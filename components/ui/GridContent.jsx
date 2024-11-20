import React from "react";
import styles from "@/styles/UI/GridContent.module.css"

const GridContent = ({ content, layout = "row", colors = ['var(--constract-color)']}) => {
    return (
      <div className={`${styles["content-grid"]} ${styles[`content-grid--${layout}`]}`}>
        {content.map((item, index) => (
          <div key={index} className={styles["content-grid__item"]} >
            <div className={styles["content-grid__title"]} style={{ color: colors[index % colors.length] }}>{item.title}</div>
            <div className={styles["content-grid__content"]}>{item.content}</div>
          </div>
        ))}
      </div>
    );
};

export default GridContent;