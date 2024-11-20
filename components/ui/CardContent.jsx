import React from 'react';
import styles from '@/styles/Ui.module.css';
import EffectImg from '@/components/ui/EffectImg';

const CardContent = ({ src, title, content, cardWidth = '400px', cardHeight = '200px', img_pos = 'left', background = "linear-gradient(to right, #ff7e5f, #feb47b)", href = '/'}) => {
    if(img_pos == 'left'){
        return (
            <div className={styles['content-card']} style={{ width: cardWidth, height: cardHeight, background: background }}>
                <div className={styles['content-card__image']}>
                    <EffectImg src={src} effect="scalezoom" width={cardHeight} height={cardHeight}/>
                </div>
                <div className={styles['content-card__text']}>
                    <h3 className={styles['content-card__title']}>{title}</h3>
                    <p className={styles['content-card__content']}>{content}</p>
                    <a href={href} className={styles['content-card__link']}>Tìm hiểu thêm</a>
                </div>
            </div>
        );
    }else{
        return (
            <div className={styles['content-card']} style={{ width: cardWidth, height: cardHeight, background: background }}>
                <div className={styles['content-card__text']}>
                    <h3 className={styles['content-card__title']}>{title}</h3>
                    <p className={styles['content-card__content']}>{content}</p>
                    <a href={href} className={styles['content-card__link']}>Tìm hiểu thêm</a>
                </div>
                <div className={styles['content-card__image']}>
                    <EffectImg src={src} effect="scalezoom" width={cardHeight} height={cardHeight}/>
                </div>
            </div>
        );
    }
};

export default CardContent;
