import React from 'react';
import styles from '@/styles/English.module.css';
import NavBar from '@/components/ui/NavBar';
import WaveSection from '@/components/ui/WaveSection';
import Slideshow from '@/components/ui/SlideShow';
import RegistrationForm from '@/components/ui/RegisForm';
import HelpButton from '@/components/ui/HelpButton';

const big_slide_images = [
    "/activity_en/slides/slide_1.png",
    "/activity_en/slides/slide_2.png"
]


const Main = () => {
    return (
        <>
            <NavBar />
            <Slideshow images={big_slide_images} interval={5000} />

            <WaveSection>
                <div className={styles['en__grid']}>
                    <h1>Các hoạt động bằng tiếng Anh cho trẻ</h1>
                    <p>Tại Kids&Us, tiếng Anh không chỉ được dùng trong lớp học, chúng tôi đã xây dựng nhiều hoạt động</p>
                    <p>bằng tiếng Anh để củng cố trải nghiệm học tập cho học viên.</p>
                    <div className={styles['grid']}>
                        <div className={`${styles['grid__item']} ${styles['grid__item--1']}`}>
                            <img src="/activity_en/activity_holiday.png" />
                            <h1>Tiếng Anh trong những ngày nghỉ</h1>
                            <p>Kids&Us tổ chức những hoạt động xuyên suốt ngày nghỉ để khuyến khích việc học tiếng Anh của học viên.</p>
                            <a href="#">Xem các hoạt động</a>
                        </div>
                        <div className={`${styles['grid__item']} ${styles['grid__item--2']}`}>
                            <img src="/activity_en/activity_workshop.png" />
                            <h1>Hoạt động ngoại khóa bằng Tiếng Anh</h1>
                            <p>Mục tiêu của hoạt động ngoại khóa là để trẻ liên hệ tiếng Anh vào hoạt động yêu thích, giúp trẻ có động lực học và gắn bó với tiếng Anh.</p>
                            <a href="#">Xem các hoạt động</a>
                        </div>
                        <div className={`${styles['grid__item']} ${styles['grid__item--1']}`}>
                            <img src="/activity_en/activity_home.png" />
                            <h1>Vừa chơi vừa học tiếng Anh tại nhà</h1>
                            <p>Khám phá cửa hàng online với vô số trò chơi và sách tiếng Anh cho mọi lứa tuổi. Món quà tuyệt vời cho các con!</p>
                            <a href="#">Xem các hoạt động</a>
                        </div>
                    </div>
                </div>
            </WaveSection>

            <WaveSection>
                <div className={styles['en__upcoming']}>
                    <h1>Upcoming <span>Activities</span></h1><hr></hr>
                    <img src="/activity_en/upcoming.jpg" />
                </div>
            </WaveSection>
                        
            <WaveSection>
                <section id='page__regis'>
                    <RegistrationForm bg_color="#58d2dd" />
                </section>
            </WaveSection>

            <HelpButton />
        </>
    );
};

export default Main;
