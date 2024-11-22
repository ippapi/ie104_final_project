import React from "react";
import styles from "@/styles/Layout.module.css";

const FooterCol = ({content}) => {
    return (
        <div className={styles['layout__footer__body__grid-container-grid-item']}>
            <h4 className={styles['layout__footer__body__grid-container__grid-item-widget-title']}>{content.title}</h4>
            <div className={styles['layout__footer__body__grid-container__grid-item-textwidge']}>
                <ul className={styles['layout__footer__body__grid-container__grid-item__textwidge-links']}>
                    {content.list.map((e) => {
                        return <li><a href={e.href}>{e.discription}</a></li>;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default FooterCol;