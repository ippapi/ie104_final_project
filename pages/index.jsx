import React from 'react';
import styles from '@/styles/Page.module.css';
import NavBar from '@/components/ui/NavBar';
import Slideshow from '@/components/ui/SlideShow';
import WaveSection from '@/components/ui/WaveSection';
import GridContent from '@/components/ui/GridContent';
import EffectImg from '@/components/ui/EffectImg';
import CardContent from '@/components/ui/CardContent';
import RegistrationForm from '@/components/ui/RegisForm';
import HelpButton from '@/components/ui/HelpButton';

const big_slide_images = [
    "/course1_2/slides/slide_2.png",
    "/course3_8/slides/slide_2.png",
    "/course9_12/slides/slide_2.png",
    "/course13_18/slides/slide_2.png",
]

const statis_content = [
    { title: '+20', content: 'Năm kinh nghiệm' },
    { title: '+180.000', content: 'Học viên' },
    { title: '+600', content: 'Cơ sở' },
    { title: '90%', content: 'Tỷ lệ học viên trung thành' }
];

const statis_style = {
    colors: ['#f05a21'],
    effect: "zoom", 
    layout: "row", 
    align_pos: 'center'

}

const promo_content = [
    { 
        img: '/index/kid_1.jpg',
        content: {
            sub_title: 'Babies',
            title: 'Khóa học tiếng Anh cho trẻ 1-2 tuổi', 
            description: 'Bé đã sẵn sàng học ngôn ngữ ngay từ khi sinh ra. Cơ hội này được tận dụng tối đa tại Kids&Us nhằm thôi thúc bé học qua các giác quan của mình.', 
            href: "/courses/1-2",
            button: 'Tìm hiểu thêm'
        },
        style: {
            effect: 'scalezoom',
            width: "50vw",
            height: "25vw",
            img_pos: 'left',
            background: 'linear-gradient(to right,#11331140 0%,#f3818199 50%,#f8ae8eff 100%)',
        }
    },
    { 
        img: '/index/kid_2.jpg',
        content: {
            sub_title: 'Kids', 
            title: 'Khóa học tiếng Anh cho trẻ 3-8 tuổi', 
            description: 'Ở giai đoạn mầm non - tiểu học, chơi trò chơi và tương tác với các bạn cùng nhóm trở thành tác nhân thúc đẩy học tập nhanh nhất, thông qua tập bài hát, đọc hiểu và nhiều hoạt động khác đã được thiết kế phù hợp với độ tuổi và động lực của các em.', 
            href: "/courses/3-8",
            button: 'Tìm hiểu thêm'
        },
        style: {
            effect: 'scalezoom',
            width: "50vw",
            height: "25vw",
            img_pos: 'left', 
            background: 'linear-gradient(to right,#83cb9cff 0%,#6bb29ecc 50%,#83ddcbff 100%)', 
        }
    },
    { 
        img: '/index/kid_3.jpg',
        content: {
            sub_title: 'Tweens',
            title: 'Khóa học tiếng Anh cho trẻ 9-12 tuổi', 
            description: 'Kids&Us khuyến khích trẻ mô tả thế giới xung quanh và chính bản thân mình. Như vậy, tiếng Anh sẽ đồng hành cùng các em trong quá trình phát triển bản thân. Nền tảng kỹ năng nghe nói vững chắc có từ những khóa học trước cho phép trẻ dễ dàng phát triển thêm kỹ năng đọc viết.', 
            href: "/courses/9-12",
            button: 'Tìm hiểu thêm'
        },
        style: {
            effect: 'scalezoom',
            width: "50vw",
            height: "25vw",
            img_pos: 'right', 
            background: 'linear-gradient(to left,#edb0f5ff 0%,#9e5db399 50%,#d39fdaff 100%)',
        }
    },
    { 
        img: '/index/kid_4.jpg', 
        content: {
            sub_title: 'Teens',
            title: 'Khóa học tiếng Anh cho trẻ 13-18 tuổi', 
            description: 'Các bạn tuổi teen giờ đã có thể giao tiếp tiếng Anh bằng nhiều mẫu câu đa dạng, điều này giúp tăng cường sự lưu loát và phản xạ ngôn ngữ của các em. Ngoài ra, tại Kids&Us, chúng tôi luôn khuyến khích tư duy phản biện, giúp các em tự tin bước vào tương lai.', 
            href: "/courses/13-18",
            button: 'Tìm hiểu thêm'
        },
        style: {
            effect: 'scalezoom',
            width: "50vw",
            height: "25vw",
            img_pos: 'right', 
            background: 'linear-gradient(to left,#ffc27dff 0%,#efb36e99 50%,#ed7c7cff 100%)',
        }
    },
]

const slide_images = [
    "/index/kid_5.jpg",
    "/index/kid_6.jpg",
]

const method_content = {
    content: [
        { title: 'Nghe', content: 'Nghe là bước đầu tiên mà trẻ làm quen với tiếng mẹ đẻ '},
        { title: 'Hiểu', content: 'Thông qua nghe, trẻ dần hiểu được những từ đầu tiên'},
        { title: 'Nói', content: 'Sau khi nghe và hiểu tiếng mẹ đẻ, trẻ bắt đầu tập nói'},
        { title: 'Đọc', content: 'Đọc là giai đoạn tiếp theo trong quá trình học ngôn ngữ'},
        { title: 'Viết', content: 'Cuối cùng, trẻ hoàn thiện kỹ năng ngôn ngữ bằng việc tập viết'}
    ], 
    style: {
        effect: "bounce", 
        layout: 'column',
        colors: [ '#f6d367', '#feacb', '#74bebe', '#fe699f', '#2b2b2b' ],
        align_pos: 'left'
    }
};

const Main = () => {
    return (
        <>
            <NavBar />
            <Slideshow images={big_slide_images} interval={5000} />
            <WaveSection>
                <section className={styles['page']}>
                    <div className={styles['page__content']}>
                        <h2 className={styles['page__title']}>Chúng tôi là Kids&Us</h2>
                        <p className={styles['page__description']}>Kids&Us đã có mặt tại Tây Ban Nha, An-đô-ra, Italia, Pháp, Bỉ, Cộng hòa Séc, Mexico, Nhật Bản, Myanmar và Việt Nam.</p>
                        <EffectImg src={'/index/kid.png'} style = {{effect: 'bounce', width: '80%', height: 'auto'}}/>
                        <GridContent content={statis_content} style={statis_style}/>
                    </div>
                </section>
            </WaveSection>
            <WaveSection>
                <section className={styles['promo-grid']}>
                    {promo_content.map((card) => (<CardContent img={card.img} style={card.style}>
                        <h3 className={styles['promo__grid-sub-title']}>{card.content.sub_title}</h3>
                        <h3 className={styles['promo__grid-title']}>{card.content.title}</h3>
                        <p className={styles['promo__grid-content']}>{card.content.description}</p>
                        <a href={card.content.href} className={styles['promo__grid-link']}>{card.content.button}</a>
                    </CardContent>))}
                </section>
            </WaveSection>
            <WaveSection>
                <section className={`${styles['page']} ${styles['page--pink']}`}>
                    <div>
                        <h2 className={styles['page__title']}>Phương pháp học tiếng Anh</h2>
                        <p className={styles['page__description']}>Phương pháp học tiếng Anh tại Kids&Us được dựa theo quá trình hấp thu tiếng mẹ đẻ - một hành trình học tập vừa logic, vừa tự nhiên, nhưng cũng đầy ngẫu hứng.</p>
                        <div className={styles['page__grid']}>
                            <Slideshow images={slide_images} style={{width: '600px', height: '600px'}}/>
                            <GridContent content={method_content.content} style={method_content.style}/>
                        </div>
                    </div>
                </section>
            </WaveSection>

            <WaveSection>
                <section className={styles["activity"]}>
                    <div className={styles["activity-container"]}>
                        <div className={styles["activity-content"]}>
                            <h2 className={styles['page__title']}>Các hoạt động bằng tiếng Anh</h2>
                            <p className={styles["page__description"]}>Tại Kids&Us, tiếng Anh không chỉ được dùng trong lớp học, chúng tôi xây dựng rất nhiều hoạt động bằng tiếng Anh để củng cố trải nghiệm học tập của học viên.</p>
                            <a href='/activity/en' className={styles['page__btn']}>Xem các hoạt động ❯ </a>
                        </div>
                        <div className={styles["activity-image"]}>
                            <img src="/index/kid_activity.jpg" />
                            <div className={styles['subgrid']}>
                                <div className={styles['subgrid-col']}>
                                    <span className={styles['subgrid__col-text']}>Story</span>
                                    <span className={styles['subgrid__col-title']}>Time</span>
                                </div>
                                <div className={styles['subgrid-col']}>
                                    <span className={styles['subgrid__col-text']}>Little</span>
                                    <span className={styles['subgrid__col-title']}>Chef</span>
                                </div>
                                <div className={styles['subgrid-col']}>
                                    <span className={styles['subgrid__col-text']}>Art</span>
                                    <span className={styles['subgrid__col-title']}>Craft</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </WaveSection>
            
            <WaveSection>
                <section className={styles['page__form']}>
                    <div className={styles["page__content"]}>
                        <h2 className={styles['page__title']}>Đăng ký ngay</h2>
                        <p className={styles["page__description"]}>Đừng bỏ lỡ cơ hội để con bạn được học tiếng Anh một cách tự nhiên nhất!</p>
                    </div>
                </section>
                <RegistrationForm bg_color="#f8dff6" />
            </WaveSection>

            <HelpButton />
        </>
    );
};

export default Main;
