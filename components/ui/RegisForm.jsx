import React, { useState } from "react";
import styles from "@/styles/UI/RegisForm.module.css";

const RegistrationForm = ({bg_color="#f8dff6"}) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    studySchool: "",
    birthYear: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
        <div className={styles['regisForm']}  style={{backgroundColor: bg_color}}>
            <div className={styles['regisForm__logo']}> 
                <img src="/logo.png" style={{height: '200px'}} />
                <h4>Kid&Us đang tuyển sinh các bé từ 1-7 tuổi</h4>
            </div>
            <form className={styles['regisForm__form']} onSubmit={handleSubmit}> 
                <div className={styles['regisForm__row']}>
                <div className={styles['regisForm__field']}>
                    <label className={styles['regisForm__label']}>First Name (Tên)</label>
                    <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={styles['regisForm__input']}
                    />
                </div>
                <div className={styles['regisForm__field']}>
                    <label className={styles['regisForm__label']}>Last Name (Họ và tên đệm)</label>
                    <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={styles['regisForm__input']}
                    />
                </div>
                </div>

                <div className={styles['regisForm__row']}>
                <div className={styles['regisForm__field']}>
                    <label className={styles['regisForm__label']}>Phone Number (sdt)</label>
                    <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className={styles['regisForm__input']}
                    />
                </div>
                <div className={styles['regisForm__field']}>
                    <label className={styles['regisForm__label']}>Email</label>
                    <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={styles['regisForm__input']}
                    />
                </div>
                </div>
                <div className={styles['regisForm__row']}>
                    <div className={styles['regisForm__field']}>
                        <label className={styles['regisForm__label']}>Study School (KUVN) - Cơ sở muốn đăng ký</label>
                        <select
                        name="studySchool"
                        value={formData.studySchool}
                        onChange={handleChange}
                        className={styles['regisForm__select']}
                        >
                            <option value="kid">KID</option>
                            <option value="nguyenThiThap">Nguyễn Thị Thập</option>
                            <option value="other">Other</option>
                        </select>
                </div>

                <div className={styles['regisForm__field']}>
                    <label className={styles['regisForm__label']}>Birth Year (Năm sinh của bé)</label>
                    <input
                    type="number"
                    name="birthYear"
                    value={formData.birthYear}
                    onChange={handleChange}
                    className={styles['regisForm__input']}
                    />
                </div>
                </div>

                <p className={styles['regisForm__policy']}> Bằng việc đăng ký thông tin, bạn đồng ý với Chính sách bảo mật và Điều khoản sử dụng của chúng tôi. Cho phép Kids&Us sử dụng thông tin mà bạn đã cung cấp nhằm mục đích tư vấn, tiếp thị sản phẩm và nghiên cứu thị trường. </p>

                <button type="submit" className={styles['regisForm__submit']}>
                Submit
                </button>
            </form>
        </div>
    </>);
};

export default RegistrationForm;
