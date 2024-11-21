import React from 'react';
import styles from '@/styles/UI/EffectImage.module.css';

const EffectImg = ({ src, style = {effect: 'scalezoom', width: 'auto', height: 'auto'}}) => {
  return (
    <img 
        src={src} 
        className={`${styles['effect-image']} ${styles[`effect-image--${style.effect}`]}`} 
        style={{ width: style.width, height: style.height }}
    />
  );
};
  
export default EffectImg;
