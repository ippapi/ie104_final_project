import React, { useState } from 'react';
import styles from '@/styles/UI/InteractiveImg.module.css';

const InteractiveImg = ({ src, alt, width, height }) => {
  const [isViewing, setIsViewing] = useState(false);

  const handleImageClick = () => {
    setIsViewing(true);
  };

  const handleClose = () => {
    setIsViewing(false);
  };

  return (
    <div className={styles['interactive-img']}>
      {/* Main Image */}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={styles['interactive-img__thumbnail']}
        onClick={handleImageClick}
      />

      {/* Fullscreen Viewer */}
      {isViewing && (
        <div
          className={styles['interactive-img__viewer']}
          onClick={handleClose}
        >
          <img
            src={src}
            alt={alt}
            className={styles['interactive-img__viewer-image']}
          />
        </div>
      )}
    </div>
  );
};

export default InteractiveImg;
