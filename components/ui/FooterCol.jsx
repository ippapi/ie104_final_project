import React from "react";

import styles from "@/styles/Layout.module.css";

const FooterCol = ({content}) => {
    return (
        <div className={styles['container-item']}>
            <h4 className={styles['item-widget-title']}>{content.title}</h4>
            <div className={styles['item-textwidge']}>
                <ul className={styles['item__textwidge-links']}>
                    {content.list.map((e) => {
                        return <li><a href={e.href}>{e.discription}</a></li>;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default FooterCol;