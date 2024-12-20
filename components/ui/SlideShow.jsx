import React, { useState, useEffect } from "react";

import styles from "@/styles/UI/SlideShow.module.css";

const Slideshow = ({ images, interval = 7000, style={width: '100%', height: '600px'}}) => {
    const [slideIndex, setSlideIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images.length, interval, slideIndex]);

    const goToPrevious = () => {
        setSlideIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const goToNext = () => {
        setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className={styles['slideshow']} style={{ width: style.width, height: style.height }}>
        <div
            className={styles['slideshow__inner']}
            style={{transform: `translateX(-${slideIndex * 100}%)`}}
        >
            {images.map((image) => (
            <img src={image} className={styles['slideshow__slide']}/>
            ))}
        </div>

        <button className={styles['slideshow__button']} onClick={goToPrevious}> ❮ </button>
        <button className={styles['slideshow__button']} onClick={goToNext}> ❯ </button>
        </div>
    );
};

export default Slideshow;
