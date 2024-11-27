import React, { useState, useRef, useEffect } from 'react';
import styles from '@/styles/UI/HelpButton.module.css';

const HelpButton = () => {
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        message: "",
    });

    const [isOpen, setIsOpen] = useState(false);

    const popUp = () => {
        setIsOpen(!isOpen);
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

    const updateData = (e) => {
        const {name, value} = e.target; 
        setData({...data , [name] : value})
    }

    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        setIsOpen(false);
    };

    return (
        <div>
            <button className={styles['helpButton']} onClick={popUp}>
                <img src='/chat.png' className={styles['helpButton__icon']}/>
            </button>

            {isOpen && (
                <div ref={elementRef} className={styles['helpButton__popup']}>
                    <div className={styles['helpButton__popup-heading']}>
                        <div className={styles["helpButton__popup__heading-title"]}>
                            <h1>Kids&Us Vietnam</h1>
                            <button
                                className={styles["helpButton__popup-close"]}
                                onClick={popUp}
                            >
                                -
                            </button>
                        </div>

                        <p className={styles['helpButton__popup__heading-content']}>
                            Anh chị vui lòng điền vào biểu mẫu dưới đây và Kids&Us Vietnam sẽ liên hệ lại với anh chị ngay khi có thể.
                        </p>
                    </div>

                        <form className={styles["helpButton__popup-form"]}>
                            <div className={styles["helpButton__popup__form-field"]}>
                            <label className={styles["helpButton__popup__form-label"]}>Họ và tên</label>
                            <input
                                type="text"
                                name="name"
                                value={data.name}
                                onChange={updateData}
                                className={styles["helpButton__popup__form-input"]}
                                placeholder="Tên của bạn"
                                required
                            />
                            </div>
                            <div className={styles["helpButton__popup__form-field"]}>
                            <label className={styles["helpButton__popup__form-label"]}>Sđt</label>
                            <input
                                type="text"
                                name="phone"
                                value={data.phone}
                                onChange={updateData}
                                className={styles["helpButton__popup__form-input"]}
                                placeholder="Số điện thoại của bạn"
                                required
                            />
                            </div>
                            <div className={styles["helpButton__popup__form-field"]}>
                            <label className={styles["helpButton__popup__form-label"]}>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={updateData}
                                className={styles["helpButton__popup__form-input"]}
                                placeholder="Email của bạn"
                            />
                            </div>
                            <div className={styles["helpButton__popup__form-field"]}>
                            <label className={styles["helpButton__popup__form-label"]}>Lời nhắn</label>
                            <textarea
                                name="message"
                                value={data.message}
                                onChange={updateData}
                                className={styles["helpButton__popup__form-textarea"]}
                                placeholder="Nhập tin nhắn của bạn"
                                required
                            />
                            </div>
                            <button type="submit" className={styles["helpButton__popup__form-submit"]} onClick={submit}>
                                Gửi tin nhắn
                            </button>
                        </form>
        </div>
      )}
    </div>
  );
};

export default HelpButton;
