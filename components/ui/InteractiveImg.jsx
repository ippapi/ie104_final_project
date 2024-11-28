import React, { useState } from 'react';
import styles from '@/styles/UI/InteractiveImg.module.css';

const InteractiveImg = ({src, imgs, alt, width, height }) => {
  const [isViewing, setIsViewing] = useState(-1);

  const handleImageClick = (index) => {
    setIsViewing(index);
  };

  const handleClose = () => {
    setIsViewing(-1);
  };

  return (
    <div className={styles['interactive-img__grid']}>
        {imgs.map((img, index) => {
            return (
              <div className={styles['interactive-img__grid-item']}>
                <img
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  className={styles['interactive-img__grid__item-thumbnail']}
                  onClick={handleImageClick}
                />
      
                {isViewing != -1 && (
                  <div
                    className={styles['interactive-img__grid__item-viewer']}
                    onClick={handleClose}
                  >
                    <img
                      src={src}
                      alt={alt}
                      className={styles['interactive-img__grid__item__viewer-image']}
                    />
                  </div>
                )}
              </div>
            );
        })}
    </div>
  );
};

export default InteractiveImg;
