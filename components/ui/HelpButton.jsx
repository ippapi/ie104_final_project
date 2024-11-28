import React, { useState, useRef, useEffect } from 'react';

import styles from '@/styles/UI/HelpButton.module.css';

const HelpButton = () => {
    const [data, setData] = useState({});
    const [error, setError] = useState({});

    const [isOpen, setIsOpen] = useState(false);

    const popUp = () => {
        setIsOpen(!isOpen);
    };

    const updateData = (e) => {
        const {name, value} = e.target; 
        setData({...data , [name] : value})
        setError({...error, [name]: false});
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (!value.trim()) {
            setError({...error, [name]: true});
        }
    };

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        setIsOpen(false);
    };

    const elementRef = useRef(null);
    const handleClickOutside = (e) => {
        if (elementRef.current && !elementRef.current.contains(e.target)) {
          setIsOpen(false); 
        }
    };
    
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <button className={styles['helpButton']} onClick={popUp}>
                <img src='/chat.png' className={styles['helpButton__icon']}/>
            </button>

            {isOpen && (
                <div ref={elementRef} className={styles['popup']}>
                    <div className={styles['popup__heading']}>
                        <div className={styles["popup__heading-title"]}>
                            <h1>Kids&Us Vietnam</h1>
                            <button
                                className={styles["popup__close"]}
                                onClick={popUp}
                            >
                                -
                            </button>
                        </div>

                        <p className={styles['popup__heading-content']}>
                            Anh chị vui lòng điền vào biểu mẫu dưới đây và Kids&Us Vietnam sẽ liên hệ lại với anh chị ngay khi có thể.
                        </p>
                    </div>

                        <form className={styles["popup__form"]}>
                            <div className={styles["popup__form-field"]}>
                            <label className={styles["popup__form-label"]}>Họ và tên<sup>*</sup></label>
                            <input
                                type="text"
                                name="name"
                                className={styles["popup__form-input"]}
                                placeholder="Tên của bạn"
                                onChange={updateData}
                                onBlur={handleBlur}
                                required
                            />
                            </div>
                            {
                                error.name && <span className={styles["popup__form-error"]}>Please complete this required field.</span>
                            }
                            <div className={styles["popup__form-field"]}>
                            <label className={styles["popup__form-label"]}>Số điện thoại<sup>*</sup></label>
                            <input
                                type="text"
                                name="phone"
                                className={styles["popup__form-input"]}
                                placeholder="Số điện thoại của bạn"
                                onChange={updateData}
                                onBlur={handleBlur}
                                required
                            />
                            </div>
                            {
                                error.phone && <span className={styles["popup__form-error"]}>Please complete this required field.</span>
                            }
                            <div className={styles["popup__form-field"]}>
                            <label className={styles["popup__form-label"]}>Email</label>
                            <input
                                type="email"
                                name="email"
                                className={styles["popup__form-input"]}
                                placeholder="Email của bạn"
                                onChange={updateData}
                            />
                            </div>
                            <div className={styles["popup__form-field"]}>
                            <label className={styles["popup__form-label"]}>Lời nhắn<sup>*</sup></label>
                            <textarea
                                name="message"
                                className={styles["popup__form-textarea"]}
                                placeholder="Nhập tin nhắn của bạn"
                                onChange={updateData}
                                onBlur={handleBlur}
                                required
                            />
                            </div>
                            {
                                error.message && <span className={styles["popup__form-error"]}>Please complete this required field.</span>
                            }
                            <button type="submit" className={styles["popup__form-submit"]} onClick={submit}>
                                Gửi tin nhắn
                            </button>
                        </form>
                </div>
            )}
        </div>
    );
};

export default HelpButton;
