import React, { useState } from "react";

import styles from "@/styles/UI/RegisForm.module.css";

const RegistrationForm = ({bg_color="#f8dff6"}) => {
    const [formData, setFormData] = useState({});

    const [formError, setFormError] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setFormError({...formError, [name]: false});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (!value.trim()) {
            setFormError({...formError, [name]: true});
        }
    };

    return (
        <>
            <div className={styles['regisForm']}  style={{backgroundColor: bg_color}}>
                <div className={styles['regisForm__header']}>
                    <img src="/logo.png" alt="Kids and Us" className={styles['regisForm__header-logo']} />
                    <div className={styles['regisForm__header-title']}>Kid&Us đang tuyển sinh các bé từ 1-7 tuổi</div>
                </div>

                <div className={styles["regisForm__container"]}>
                    <div className={styles["container-item"]}>
                        <div>
                            <div className={styles["container__item-label"]}>First name (Tên)<sup>*</sup></div>
                            <div className={styles["container__item-example"]}>Tên: ví dụ : Ngọc</div>
                            <input 
                                type="text" 
                                className={styles["container__item-input"]}
                                name="firstName"
                                onChange={handleChange} 
                                onBlur={handleBlur}  
                                required />
                            <br></br>
                            {
                                formError.firstName && <span className={styles["container__item-error-message"]}>Please complete this required field.</span>
                            }
                        </div>
                        <div>
                            <div className={styles["container__item-label"]}>Last name (Họ và tên đệm)<sup>*</sup></div>
                            <div className={styles["container__item-example"]}>Tên: ví dụ : Ngọc</div>
                            <input 
                                type="text" 
                                className={styles["container__item-input"]}
                                name="lastName"
                                onChange = {handleChange} 
                                onBlur={handleBlur}  
                                required />
                            <br></br>
                            {
                                formError.lastName && <span className={styles["container__item-error-message"]}>Please complete this required field.</span>
                            }
                        </div>
                    </div>
                    <div className={styles["container-item"]}>
                        <div>
                            <div className={styles["container__item-label"]}>Phone number (Sdt)<sup>*</sup></div>
                            <input 
                                type="tel" 
                                className={styles["container__item-input"]}
                                name="phone"
                                placeholder="+84"
                                onChange = {handleChange} 
                                onBlur={handleBlur}  
                                required />
                            <br></br>
                            {
                                formError.phone && <span className={styles["container__item-error-message"]}>Please complete this required field.</span>
                            }
                        </div>
                        <div>
                            <div className={styles["container__item-label"]}>Email<sup>*</sup></div>
                            <input 
                                type="email" 
                                className={styles["container__item-input"]}
                                name="email"
                                onChange = {handleChange} 
                                onBlur={handleBlur}  
                                required />
                            <br></br>
                            {
                                formError.email && <span className={styles["container__item-error-message"]}>Please complete this required field.</span>
                            }
                        </div>
                    </div>

                    <div className={styles["container-item"]}>
                        <div>
                            <div className={styles["container__item-label"]}>Study school (KUVN) - Cơ sở muốn đăng ký<sup>*</sup></div>
                            <select 
                                className={styles["container__item-input"]} 
                                title="Please Select"
                                name="place"
                                onChange = {handleChange} 
                                onBlur={handleBlur}  
                                required>
                                    <option value="" selected hidden>Please Select</option>
                                    <option value="" disabled>Please Select</option>
                                    <option value="ntt">Kid&Us Nguyen Thi Thap</option>
                                    <option value="school2">Kid&Us City Land Park Hills</option>
                                    <option value="school3">Kid&Us Cao Đức Lân</option>
                                    <option value="school2">Kid&Us Sư Vạn Hạnh</option>
                                    <option value="school3">Kid&Us Lê Văn Việt</option>
                                    <option value="school3">Kid&Us Tên Lửa</option>
                            </select>
                            <br></br>
                            {
                                formError.place && <span className={styles["container__item-error-message"]}>Please complete this required field.</span>
                            }
                        </div>
                        <div>
                            <div className={styles["container__item-label"]}>Birth Year (Năm sinh của bé)<sup>*</sup></div>
                            <select 
                                className={styles["container__item-input"]} 
                                title="Please Select"
                                name="birth"
                                onChange = {handleChange} 
                                onBlur={handleBlur}  
                                required>
                                    <option class="please" value="" selected hidden>Please Select</option>
                                    <option value="" disabled>Please Select</option>
                                    <option value="2016">2016</option>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2022</option>
                                    <option value="2023">2023</option>
                                    <option value="2024">2024</option>
                            </select>
                            {
                                formError.birth && (<><br></br><span className={styles["container__item-error-message"]}>Please complete this required field.</span></>)
                            }
                        </div>
                    </div>
                </div>

                <div className={styles['regisForm__policy']}>
                    <span>Bằng việc đăng ký thông tin, bạn đồng ý với </span>
                    <a href="#" className={styles["regisForm__policy-agreement"]}>Chính sách bảo mật</a>
                    <span> và </span>
                    <a href="#" className={styles["regisForm__policy-agreement"]}>Điều khoản sử dụng</a>
                    <span> của chúng tôi. Cho phép Kids&Us sử dụng thông tin mà bạn đã cung cấp nhằm mục đích tư vấn, tiếp thị sản phẩm và nghiên cứu thị trường.</span>
                </div>

                <div className={styles['regisForm__submit']}>
                    <button type="submit" className={styles['regisForm__submit-button']} onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </>
    );
};

export default RegistrationForm;
