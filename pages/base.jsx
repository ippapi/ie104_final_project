import React from 'react';
import styles from '@/styles/Page.module.css';
import NavBar from '@/components/ui/NavBar';
import WaveSection from '@/components/ui/WaveSection';
import Slideshow from '@/components/ui/SlideShow';
import CardContent from '@/components/ui/CardContent';
import RegistrationForm from '@/components/ui/RegisForm';
import HelpButton from '@/components/ui/HelpButton';
import InteractiveImg from '@/components/ui/InteractiveImg';
import CharacterShow from '@/components/ui/CharacterShow';
import EffectImg from '@/components/ui/EffectImg';

const big_slide_images = [
    '/base/base_1.png',
    '/base/base_2.png',
    '/base/base_3.png',
    '/base/base_4.png',
]

const base_contents = [
    {
        pos: '47-49 Nguyễn Thị Thập, KDC Him Lam, Quận 7',
        main_img: '/base/base_1.png',
        imgs: ["/base/base_11.jpg", "/base/base_12.jpg", "/base/base_13.jpg", "/base/base_14.jpg", "/base/base_15.jpg"],
        map_link: 'https://goo.gl/maps/MyQJqeSFyL4pDPiU6'
    },
    {
        pos: '3 Đường số 3, Phường 10, Quận Gò Vấp',
        main_img: '/base/base_2.png',
        imgs: ["/base/base_11.jpg", "/base/base_12.jpg", "/base/base_13.jpg", "/base/base_14.jpg", "/base/base_15.jpg"],
        map_link: 'https://maps.app.goo.gl/JcEc92s1HYHypMfP8',
    },
    {
        pos: '126 Cao Đức Lân, An Phú, Quận 2',
        main_img: '/base/base_3.png',
        imgs: ["/base/base_11.jpg", "/base/base_12.jpg", "/base/base_13.jpg", "/base/base_14.jpg", "/base/base_15.jpg"],
        map_link: 'https://maps.app.goo.gl/evErA6esjNxVaMbN9',
    },
    {
        pos: '770 Sư Vạn Hạnh, Phường 12, Quận 10',
        main_img: '/base/base_4.png',
        imgs: ["/base/base_11.jpg", "/base/base_12.jpg", "/base/base_13.jpg", "/base/base_14.jpg", "/base/base_15.jpg"],
        map_link: 'https://maps.app.goo.gl/1mAfPW2nd3SaVNZ49',
    },
    {
        pos: '695 Lê Văn Việt, Thủ Đức',
        main_img: '/base/base_5.png',
        imgs: ["/base/base_11.jpg", "/base/base_12.jpg", "/base/base_13.jpg", "/base/base_14.jpg", "/base/base_15.jpg"],
        map_link: 'https://maps.app.goo.gl/WetR8VySF9ZaEKU87',
    },
    {
        pos: '29-31 Tên Lửa, Phường Bình Trị Đông B, Quận Bình Tân',
        main_img: '/base/base_6.png',
        imgs: ["/base/base_11.jpg", "/base/base_12.jpg", "/base/base_13.jpg", "/base/base_14.jpg", "/base/base_15.jpg"],
        map_link: 'https://maps.app.goo.gl/rG6rFN4LDWuiHMzQ7',
    },
]

const main_img_style = {
    effect: 'scalezoom', 
    width: '600px', 
    height: '300px',
}


const Main = () => {
    return (
        <>
            <NavBar />
            <Slideshow images={big_slide_images} interval={5000} />
            <WaveSection>
                <section className={styles['page']}>
                    <div className={styles['page__content']}>
                        <h2 className={styles['page__title']}>Các cơ sở Kids&Us tại Thành phố Hồ Chí Minh</h2>
                        <p className={styles['page__description']}>
                        Nhận tư vấn miễn phí qua hotline của Kids&Us
                        </p>
                        <p>
                        1800 6175
                        </p>
                    </div>
                </section>
            </WaveSection>

            {
                base_contents.map((base_content, index) => {
                    return (
                        <WaveSection direction='none'>
                            <div className={`${styles['base__block']} ${styles[`base__block--${2 - (index + 1) % 2 }`]}`}>
                                <div className={styles['block__main']}>
                                    <div className={styles['main__pos']}>
                                        <h2>{base_content.pos}</h2>
                                        <EffectImg src={base_content.main_img} style={main_img_style}/>
                                    </div>
                                    <InteractiveImg
                                                imgs={base_content.imgs}
                                                alt="Kid and us"
                                                width="200"
                                                height="150"
                                    />
                                </div>

                                <div className={styles['block__sub']}>
                                    <p>
                                        Chỉ đường đến trung tâm
                                        <a href={base_content.map_link} target="_blank" className={`${styles['sub__link']} ${styles['sub__link--1']}`}>Google map</a>
                                        <a href='#page__regis' className={`${styles['sub__link']} ${styles['sub__link--2']}`}>Book Appointment</a>
                                    </p>
                                </div>
                            </div>
                        </WaveSection>
                    );
                })
            }
            
            <WaveSection>
                <section id='page__regis'>
                    <RegistrationForm bg_color="#f8dff6" />
                </section>
            </WaveSection>

            <HelpButton />
        </>
    );
};

export default Main;
