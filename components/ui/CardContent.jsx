import React from 'react';
import styles from '@/styles/UI/CardContent.module.css'
import EffectImg from '@/components/ui/EffectImg';

const CardContent = ({ content, style = {effect: 'scalezoom', width: '400px', height: '200px', img_pos: 'left', background: 'var(--white-color)'}}) => {
    if(style.img_pos == 'left'){
        return (
            <div className={styles['content-card']} style={{ width: style.width, height: style.height, background: style.background }}>
                <div className={styles['content-card__image']}>
                    <EffectImg src={content.img} effect={style.effect} width={style.height} height={style.height}/>
                </div>
                <div className={styles['content-card__text']}>
                    <h3 className={styles['content-card__title']}>{content.title}</h3>
                    <p className={styles['content-card__content']}>{content.description}</p>
                    <a href={content.href} className={styles['content-card__link']}>{content.button}</a>
                </div>
            </div>
        );
    }else{
        return (
            <div className={styles['content-card']} style={{ width: style.width, height: style.height, background: style.background }}>
                <div className={styles['content-card__text']}>
                    <h3 className={styles['content-card__title']}>{content.title}</h3>
                    <p className={styles['content-card__content']}>{content.description}</p>
                    <a href={content.href} className={styles['content-card__link']}>{content.button}</a>
                </div>
                <div className={styles['content-card__image']}>
                    <EffectImg src={content.img} effect={style.effect} width={style.height} height={style.height}/>
                </div>
            </div>
        );
    }
};

export default CardContent;
