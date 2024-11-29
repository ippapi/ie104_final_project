import React, { useState, useRef, useEffect } from 'react';
import styles from "@/styles/UI/QuestionList.module.css";

const QuestionList = ({ questions }) => {
    const [showIndex, setShowIndex] = useState(null);

    const activeQuestion = (index) => {
        setShowIndex(index);
    };

    return (
        <div className={styles['questions']}>
            {questions.map((question, index) => {
                const [isShow, setIsShow] = useState(false);

                const showAnswer = () => {
                    if(isShow)
                        activeQuestion(null);
                    else
                        activeQuestion(index);
                    
                    setIsShow(!isShow);
                };

                const elementRef = useRef(null);
                const handleClickOutside = (e) => {
                    if (elementRef.current && !elementRef.current.contains(e.target)) {
                      activeQuestion(null);
                    }
                };
                
                useEffect(() => {
                    document.addEventListener("mousedown", handleClickOutside);
                    return () => {
                        document.removeEventListener("mousedown", handleClickOutside);
                    };
                }, []);

                return (
                    <div
                        key={index}
                        className={`${styles['questions__question']} ${index === showIndex ? styles['question--active'] : ''}`}
                        onClick={showAnswer}
                        ref={elementRef}
                    >
                        <div className={styles['question__header']}>
                        <div className={styles['question__title']}>{question.title}</div>
                        <button className={styles['question__button']}>{isShow ? '-' : '+'}</button>
                        </div>
                        {isShow && 
                            <div className={styles['question__answer']}>
                                <div className={styles['answer__content']}>
                                    {question.answer}
                                </div>
                            </div>}
                    </div>
                );
            })}
        </div>
  );
};

export default QuestionList;
