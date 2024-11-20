import React from 'react';
import styles from '@/styles/Ui.module.css';

const EffectImg = ({ src, effect = 'zoom', width = 'auto', height = 'auto'}) => {
  return (
    <img 
        src={src} 
        className={`${styles['effect-image']} ${styles[`effect-image--${effect}`]}`} 
        style={{ width, height }}
    />
  );
};
  
export default EffectImg;
