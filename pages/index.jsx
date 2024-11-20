import React from 'react';
import styles from '@/styles/Home.module.css';
import Slideshow from '@/components/ui/SlideShow';
import GridContent from '@/components/ui/GridContent';
import EffectImg from '@/components/ui/EffectImg';
import CardContent from '@/components/ui/CardContent';

const slide_images = [
    "/slides/slide_1.png",
    "/slides/slide_2.png",
]

const statis_content = [
    { title: '+20', content: 'Năm kinh nghiệm' },
    { title: '+180.000', content: 'Học viên' },
    { title: '+600', content: 'Cơ sở' },
    { title: '90%', content: 'Tỷ lệ học viên trung thành' }
];

const promo_content = [
    { 
        src: '/kid_1.jpg', 
        title: 'Khóa học tiếng Anh cho trẻ 1-2 tuổi', 
        content: 'Bé đã sẵn sàng học ngôn ngữ ngay từ khi sinh ra. Cơ hội này được tận dụng tối đa tại Kids&Us nhằm thôi thúc bé học qua các giác quan của mình.', 
        img_pos: 'left', 
        background: 'linear-gradient(to right, #F08483, #F28E86, #F6A48B)', 
        link: "/courses/1-2"
    },
    { 
        src: '/kid_2.jpg', 
        title: 'Khóa học tiếng Anh cho trẻ 3-8 tuổi', 
        content: 'Ở giai đoạn mầm non - tiểu học, chơi trò chơi và tương tác với các bạn cùng nhóm trở thành tác nhân thúc đẩy học tập nhanh nhất, thông qua tập bài hát, đọc hiểu và nhiều hoạt động khác đã được thiết kế phù hợp với độ tuổi và động lực của các em.', 
        img_pos: 'left', 
        background: 'linear-gradient(to right, #BBBBBB, #74BAA2, #7AC19D)', 
        link: "/courses/3-8"
    },
    { 
        src: '/kid_3.jpg', 
        title: 'Khóa học tiếng Anh cho trẻ 9-12 tuổi', 
        content: 'Kids&Us khuyến khích trẻ mô tả thế giới xung quanh và chính bản thân mình. Như vậy, tiếng Anh sẽ đồng hành cùng các em trong quá trình phát triển bản thân. Nền tảng kỹ năng nghe nói vững chắc có từ những khóa học trước cho phép trẻ dễ dàng phát triển thêm kỹ năng đọc viết.', 
        img_pos: 'right', 
        background: 'linear-gradient(to right, #EDB0F5, #DEA5E9, #A766BA)',
        link: "/courses/9-12"
    },
    { 
        src: '/kid_4.jpg', 
        title: 'Khóa học tiếng Anh cho trẻ 13-18 tuổi', 
        content: 'Các bạn tuổi teen giờ đã có thể giao tiếp tiếng Anh bằng nhiều mẫu câu đa dạng, điều này giúp tăng cường sự lưu loát và phản xạ ngôn ngữ của các em. Ngoài ra, tại Kids&Us, chúng tôi luôn khuyến khích tư duy phản biện, giúp các em tự tin bước vào tương lai.', 
        img_pos: 'right', 
        background: 'linear-gradient(to right, #FFC27D, #F9C182, #EFAB70)',
        link: "/courses/13-18"
    },
]

const Main = () => {
    return (
        <>
            <Slideshow images={slide_images} interval={5000} />
            <section className={styles['home__content-about']}>
                <div className={styles['home__content-about__content']}>
                    <h2 className={styles['home__title']}>Chúng tôi là Kids&Us</h2>
                    <p className={styles['home__content-about__description']}>
                        Kids&Us đã có mặt tại Tây Ban Nha, An-đô-ra, Italia, Pháp, Bỉ, Cộng hòa Séc, Mexico, Nhật Bản, Myanmar và Việt Nam.
                    </p>
                    <EffectImg src={'/kid.png'}/>
                    <GridContent content={statis_content} />
                </div>
            </section>
            <div className={styles['home__content-promo']}>
                {promo_content.map((card, index) => (
                    <CardContent
                    key={index}
                    src={card.src}
                    title={card.title}
                    content={card.content}
                    img_pos={card.img_pos}
                    background={card.background}
                    cardWidth="50vw"
                    cardHeight="25vw"
                    />
                ))}
            </div>
        </>
    );
};

export default Main;
