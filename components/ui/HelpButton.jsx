import React, { useState } from 'react';
import styles from '@/styles/UI/HelpButton.module.css';

const HelpButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const popUp = () => {
        setIsOpen(!isOpen);
    };

    const submit = (e) => {
        e.preventDefault();
        console.log("Help request submitted");
    };

    return (
        <div>
            <button className={styles['helpButton']} onClick={popUp}>
                Ask for Help
            </button>

            {isOpen && (
                <div className={styles['helpButton__popup']}>
                    <form>
                        <div className={styles["helpButton__popup-header"]}>
                            <h3>Kids&Us Vietnam</h3>
                            <button
                                className={styles["helpButton__popup-close"]}
                                onClick={popUp}
                            >
                                -
                            </button>
                        </div>

                        <p className={styles['helpButton__popup-content']}>
                            Anh chị vui lòng điền vào biểu mẫu dưới đây và Kids&Us Vietnam sẽ liên hệ lại với anh chị ngay khi có thể.
                        </p>

                        <form className={styles["helpButton__popup-form"]}>
                            <div className={styles["helpButton__popup__form-field"]}>
                            <label className={styles["helpButton__popup__form-label"]}>Họ và tên</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={styles["helpButton__popup__form-input"]}
                                placeholder="Nhập họ và tên của bạn"
                            />
                            </div>
                            <div className={styles["helpButton__popup__form-field"]}>
                            <label className={styles["helpButton__popup__form-label"]}>Sđt</label>
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={styles["helpButton__popup__form-input"]}
                                placeholder="Nhập số điện thoại"
                            />
                            </div>
                            <div className={styles["helpButton__helpButton__popup__form-field"]}>
                            <label className={styles["helpButton__popup__form-label"]}>Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={styles["helpButton__popup__form-input"]}
                                placeholder="Nhập email"
                            />
                            </div>
                            <div className={styles["helpButton__popup__form-field"]}>
                            <label className={styles["helpButton__popup__form-label"]}>Lời nhắn</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={styles["helpButton__popup__form-textarea"]}
                                placeholder="Nhập lời nhắn của bạn"
                            />
                            </div>
                            <button type="submit" className={styles["helpButton__popup__form-submit"]}>
                            Gửi
                            </button>
                        </form>

            
                    <button type="submit" className={styles['helpButton__popup__form-submit']} onClick={submit}>
                        Gửi tin nhắn
                    </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default HelpButton;
