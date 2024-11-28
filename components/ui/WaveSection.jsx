import React, { useEffect, useState, useRef } from 'react';

import styles from '@/styles/UI/WaveSection.module.css'; 

const WaveSection = ({ children, direction = 'up' }) => {
    const sectionRef = useRef(null);
    const [isStart, setIsStart] = useState(false);
  
    useEffect(() => {
        const checkVisibility = () => {
        const section = sectionRef.current;
        const rect = section.getBoundingClientRect();
  
        const sectionHeight = rect.height;
        const windowHeight = window.innerHeight;
  
        if (rect.top + sectionHeight * 0.5 <= windowHeight && rect.top + sectionHeight * 0.5 >= 0) {
            setIsStart(true);
        }
    };
  
    window.addEventListener('scroll', checkVisibility);
        checkVisibility();

        return () => {
            window.removeEventListener('scroll', checkVisibility);
        };
    }, []);

    return (
        <div ref={sectionRef} className={`${styles[`wave-section-${direction}`]} ${isStart ? styles[`slide-${direction}`] : ''}`}>
            {children}
        </div>
    );
};
  
export default WaveSection;