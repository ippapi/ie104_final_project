import React from 'react';

import styles from '@/styles/UI/CardContent.module.css'

import EffectImg from '@/components/ui/EffectImg';

const CardContent = ({ img, children, style = {effect: 'scalezoom', width: '400px', height: '200px', img_pos: 'left', background: 'var(--white-color)'}}) => {
    if(style.img_pos == 'left'){
        return (
            <div className={styles['card']} style={{ width: style.width, height: style.height, background: style.background }}>
                <div className={styles['card__image']}>
                    <EffectImg src={img} style={{effect: style.effect, width: style.height, height: style.height}}/>
                </div>
                <div className={styles['card__text']}>
                    {children}
                </div>
            </div>
        );
    }else{
        return (
            <div className={styles['card']} style={{ width: style.width, height: style.height, background: style.background }}>
                <div className={styles['card__text']}>
                    {children}
                </div>
                <div className={styles['card__image']}>
                    <EffectImg src={img} style={{effect: style.effect, width: style.height, height: style.height}}/>
                </div>
            </div>
        );
    }
};

export default CardContent;
