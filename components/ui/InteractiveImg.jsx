import React, { useState } from 'react';

import styles from '@/styles/UI/InteractiveImg.module.css';

const InteractiveImg = ({ imgs, alt, width, height }) => {
    const [viewIndex, setViewIndex] = useState(-1);

    const goToPrevious = (e) => {
        e.stopPropagation()
        setViewIndex((prevIndex) =>
            prevIndex === 0 ? imgs.length - 1 : prevIndex - 1
        );
    };

    const goToNext = (e) => {
        e.stopPropagation()
        setViewIndex((prevIndex) => (prevIndex + 1) % imgs.length);
    };

    return (
        <div className={styles['interactive-img__grid']}>
            {imgs.map((img, index) => {
                return (
                    <div className={styles['grid-item']}>
                        <img
                            src={img}
                            alt={alt}
                            width={width}
                            height={height}
                            className={styles['grid__item-thumbnail']}
                            onClick={() => setViewIndex(index)}
                        />
              
                        {viewIndex != -1 && (
                            <div className={styles['grid__item-viewer']} onClick={() => setViewIndex(-1)}>
                                <img
                                    src={imgs[viewIndex]}
                                    alt={alt}
                                    className={styles['grid__item__viewer-image']}
                                    onClick={(e) => e.stopPropagation()}
                                />
                                <button className={styles['grid__item__viewer-button']} onClick={goToPrevious}> ❮ </button>
                                <button className={styles['grid__item__viewer-button']} onClick={goToNext}> ❯ </button>
                            </div>
                        )}
                    </div>
                );
            })}
      </div>
    );
};

export default InteractiveImg;
