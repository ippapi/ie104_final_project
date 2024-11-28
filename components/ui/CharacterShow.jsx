import React from "react";

import styles from "@/styles/UI/CharacterShow.module.css";

import EffectImg from "@/components/ui/EffectImg";

const CharacterShow = ({ contents, style = {color: 'var(--constract-color)', effect: 'zoom', width: '10px', height: '10px'}}) => {
    return (
        <div className={styles['grid']}>
            {contents.map((content) => {
                return (
                    <div className={styles['grid-item']}>
                        <a href={content.href}>
                            <EffectImg src={content.img} style={{effect: style.effect, width: style.width, height: style.height}} />
                        </a>
                        <div style={{color: style.color}}>
                            <div className={styles['grid__item-title']}>
                                {content.title}
                            </div>
                        </div>
                        <div className={styles['grid__item-content']}>
                            {content.discription}
                        </div>
                    </div>
                );
            })}
        </div>
    );
  };
    
  export default CharacterShow;