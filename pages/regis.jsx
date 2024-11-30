import React from 'react';
import styles from '@/styles/Regis.module.css';
import NavBar from '@/components/ui/NavBar';
import Slideshow from '@/components/ui/SlideShow';
import WaveSection from '@/components/ui/WaveSection';
import RegistrationForm from '@/components/ui/RegisForm';
import HelpButton from '@/components/ui/HelpButton';

const big_slide_images = [
    "/regis/slides/slide_1.png",
    "/regis/slides/slide_2.png",
]

const Main = () => {
    return (
        <>
            <NavBar />
            <Slideshow images={big_slide_images} interval={5000} />
            
            <WaveSection>
                <div className={styles["grid"]}>
                    <div className={styles["grid__contact"]}>
                        <h1>Thông tin liên hệ</h1>
                        <div className={styles["grid__contact-info"]}>
                            <img src="/regis/contact_1.png" />
                            <p><span>Địa chỉ</span><br></br>
                                47-49 Nguyễn Thị Thập, TP.HCM</p>
                        </div>
                        <div className={styles["grid__contact-info"]}>
                            <img src="/regis/contact_2.png" />
                            <p><span>Hotline</span><br></br>
                                +84 1800 6175</p>
                        </div>
                        <div className={styles["grid__contact-info"]}>
                            <img src="/regis/contact_3.png" />
                            <p><span>Email</span><br></br>
                                info@kidsandus.net.vn</p>
                        </div>
                        <div className={styles["grid__contact-info"]}>
                            <img src="/regis/contact_4.png" />
                            <p><span>Giờ mở cửa</span><br></br>
                                Thứ Hai – Thứ Sáu 8:00 – 17:00</p>
                        </div>
                    </div>
                    <div className={styles['grid__form']}>
                        <RegistrationForm bg_color="#f8dff6" />
                    </div>
                </div>
            </WaveSection>

            <HelpButton />
        </>
    );
};

export default Main;
