import React from "react";
import EffectImg from "./EffectImg";

import styles from "@/styles/UI/CharacterShow.module.css";

const CharacterShow = ({ contents, style = {color: 'var(--constract-color)', effect: 'zoom', width: '10px', height: '10px'}}) => {
    return (
        <div className={styles['charactershow-grid']}>
            {contents.map((content) => {
                return (
                    <div className={styles['charactershow__grid-item']}>
                        <a href={content.href}>
                            <EffectImg src={content.img} style={{effect: style.effect, width: style.width, height: style.height}} />
                        </a>
                        <div style={{color: style.color}}>
                            <div className={styles['charactershow__grid__item-title']}>
                                {content.title}
                            </div>
                        </div>
                        <div className={styles['charactershow__grid__item-content']}>
                            {content.discription}
                        </div>
                    </div>
                );
            })}
        </div>
    );
  };
    
  export default CharacterShow;