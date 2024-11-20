import React from "react";
import styles from "@/styles/UI/GridContent.module.css"

const GridContent = ({ content, layout = "row", colors = ['var(--constract-color)'], align_pos = 'center'}) => {
    return (
      <div className={`${styles["content-grid"]} ${styles[`content-grid--${layout}`]}`}>
        {content.map((item, index) => (
          <div key={index} className={styles["content-grid__item"]} style={{ alignItems: align_pos === 'left' ? 'flex-start' : 'center'}}>
            <div className={styles["content-grid__title"]} style={{ color: colors[index % colors.length]}}>{item.title}</div>
            <div className={styles["content-grid__content"]} style={{ textAlign: align_pos }}>{item.content}</div>
          </div>
        ))}
      </div>
    );
};

export default GridContent;