import React, { useState } from "react";

import styles from "@/styles/UI/FunWeekForm.module.css";

const FunWeekForm = () => {
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
            <form>
            <fieldset className={styles['form']}>
                <div className={styles['form__header']}>
                    <img src="/activity_fw/form_header.png"/>
                </div>
                <div className={styles["form__grid"]}>
                    <div className={styles["grid__item"]}>
                        <div>
                        <div className={styles["grid__item-label"]}>First name (Tên)<sup>*</sup></div>
                        <div className={styles["grid__item-example"]}>Tên: ví dụ : Ngọc</div>
                            <input type="text" className={styles["grid__item-input"]} required />
                        </div>
                        <div>
                            <div className={styles["grid__item-label"]}>Phone number (Sdt)<sup>*</sup></div>
                            <input type="tel" className={styles["grid__item-input"]} placeholder="+84" required />
                        </div>
                        <div class="date-birth">
                            <div className={styles["grid__item-label"]}>Kid: Date of birth (Ngày sinh)<sup>*</sup></div>
                            <input type="date" className={styles["grid__item-input"]} required />
                        </div>
                        <div>
                            <div className={styles["grid__item-label"]}>Currently Living in? (Nơi ở hiện tại)<sup>*</sup></div>
                            <select className={styles["grid__item-input"]} required>
                                <option class="Select" value="" disabled selected>Please Select</option>
                                <option value="living1">An Giang</option>
                                <option value="living1">Bà Rịa - Vũng Tàu</option>
                                <option value="living1">Bến Tre</option>
                                <option value="living1">Cà Mau</option>
                                <option value="living1">Cần Thơ</option>
                                <option value="living1">Đà Nẵng</option>
                                <option value="living1">Điện Biên</option>
                                <option value="living1">Đồng Nai</option>
                                <option value="living1">Hà Nội</option>
                                <option value="living1">Thành phố Hồ Chí Minh</option>
                                <option value="living1">Phú Thọ</option>
                                <option value="living1">Thừa Thiên - Huế</option>
                                <option value="living1">Oversea</option>
                                <option value="living1">Khác</option>
                            </select>
                        </div>
                    </div>
                    <div className={styles["grid__item"]}>
                        <div>
                            <div className={styles["grid__item-label"]}>Last name (Họ và tên đệm)<sup>*</sup></div>
                            <div className={styles["grid__item-example"]}>Họ và tên đệm. Ví dụ : Nguyễn Thị</div>
                            <input type="text" className={styles["grid__item-input"]} required />
                        </div>
                        <div>
                            <div className={styles["grid__item-label"]}>Email<sup>*</sup></div>
                            <input type="email" className={styles["grid__item-input"]} required />
                        </div>
                        <div>
                            <div className={styles["grid__item-label"]}>Study school (KUVN) - Cơ sở muốn đăng ký<sup>*</sup></div>
                            <select className={styles["grid__item-input"]} required>
                                <option class="Select" value="" disabled selected>Please Select</option>
                                <option value="ntt">Kid&Us Nguyen Thi Thap</option>
                                <option value="school2">Kid&Us City Land Park Hills</option>
                                <option value="school3">Kid&Us Cao Đức Lân</option>
                                <option value="school2">Kid&Us Sư Vạn Hạnh</option>
                                <option value="school3">Kid&Us Lê Văn Việt</option>
                                <option value="school3">Kid&Us Tên Lửa</option>
                            </select>
                        </div>
                        <div>
                            <div className={styles["grid__item-label"]}>Additional note<sup>*</sup></div>
                            <textarea className={styles["grid__item-input"]}></textarea>
                        </div>
                    </div>
                </div>
                <div className={styles['form__submit']}>
                    <button type="submit" className={styles['submit__button']}>Đăng ký ngay</button>
                </div>
            </fieldset>
            </form>
        </>
    );
};

export default FunWeekForm;