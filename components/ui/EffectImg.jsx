import React, {useRef, useEffect} from 'react';

import styles from '@/styles/UI/EffectImage.module.css';

const EffectImg = ({ src, style = {effect: 'scalezoom', width: 'auto', height: 'auto'}}) => {
    const imgRef = useRef(null);

    useEffect(() => {
        if (style.effect !== 'float') return;
    
        const handleMouseMove = (event) => {
                if (imgRef.current) {
                    const rect = imgRef.current.getBoundingClientRect();
                    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 10;
                    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 10;
            
                    imgRef.current.style.transform = `translate(${x}px, ${y}px)`;
                }
        };
  
        const resetTransform = () => {
            if (imgRef.current) {
                  imgRef.current.style.transform = 'translate(0, 0)';
            }
        };
    
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseleave', resetTransform);
    
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseleave', resetTransform);
        };
    }, [style.effect]);

    return (
        <img 
            src={src} 
            ref={imgRef}
            className={`${styles['effect-image']} ${styles[`effect-image--${style.effect}`]}`} 
            style={{ width: style.width, height: style.height }}
        />
    );
};
  
export default EffectImg;
