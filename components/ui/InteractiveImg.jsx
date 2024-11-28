import React, { useState } from 'react';
import styles from '@/styles/UI/InteractiveImg.module.css';

const InteractiveImg = ({src, imgs, alt, width, height }) => {
    const [viewIndex, setViewIndex] = useState(-1);

    const goToPrevious = () => {
        setSlideIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className={styles['interactive-img__grid']}>
            {imgs.map((img, index) => {
                return (
                    <div className={styles['interactive-img__grid-item']}>
                        <img
                            src={img}
                            alt={alt}
                            width={width}
                            height={height}
                            className={styles['interactive-img__grid__item-thumbnail']}
                            onClick={() => setViewIndex(index)}/>
              
                        {viewIndex != -1 && (
                            <div className={styles['interactive-img__grid__item-viewer']} onClick={() => setViewIndex(-1)}>
                                <img
                                    src={imgs[viewIndex]}
                                    alt={alt}
                                    className={styles['interactive-img__grid__item__viewer-image']}
                                    onClick={(e) => e.stopPropagation()}
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
