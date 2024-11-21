import React from 'react';
import styles from '@/styles/Page.module.css';
import Slideshow from '@/components/ui/SlideShow';
import GridContent from '@/components/ui/GridContent';
import EffectImg from '@/components/ui/EffectImg';
import CardContent from '@/components/ui/CardContent';
import RegistrationForm from '@/components/ui/RegisForm';
import HelpButton from '@/components/ui/HelpButton';

const big_slide_images = [
    "/index/slides/slide_1.png",
    "/index/slides/slide_2.png",
    "/index/slides/slide_3.png",
    "/index/slides/slide_4.png",
]

const statis_content = [
    { title: '+20', content: 'Năm kinh nghiệm' },
    { title: '+180.000', content: 'Học viên' },
    { title: '+600', content: 'Cơ sở' },
    { title: '90%', content: 'Tỷ lệ học viên trung thành' }
];

const promo_content = [
    { 
        content: {
            img: '/index/kid_1.jpg', 
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
            background: 'linear-gradient(to right, #F08483, #F28E86, #F6A48B)',
        }
    },
    { 
        content: {
            img: '/index/kid_2.jpg', 
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
            background: 'linear-gradient(to right, #BBBBBB, #74BAA2, #7AC19D)', 
        }
    },
    { 
        content: {
            img: '/index/kid_3.jpg', 
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
            background: 'linear-gradient(to right, #EDB0F5, #DEA5E9, #A766BA)',
        }
    },
    { 
        content: {
            img: '/index/kid_4.jpg', 
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
            background: 'linear-gradient(to right, #FFC27D, #F9C182, #EFAB70)',
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
        layout: 'column',
        colors: [ '#f6d367', '#feacb', '#74bebe', '#fe699f', '#2b2b2b' ],
        align_pos: 'left'
    }
};

const activity_tags = [
    { title: "Story", description: "Time" },
    { title: "Little", description: "Chef" },
    { title: "Art", description: "Craft" },
];

const Main = () => {
    return (
        <>
            <Slideshow images={big_slide_images} interval={5000} />
            <section className={styles['page__about']}>
                <div className={styles['page__about-content']}>
                    <h2 className={styles['page__about-title']}>Chúng tôi là Kids&Us</h2>
                    <p className={styles['page__about-description']}>Kids&Us đã có mặt tại Tây Ban Nha, An-đô-ra, Italia, Pháp, Bỉ, Cộng hòa Séc, Mexico, Nhật Bản, Myanmar và Việt Nam.</p>
                    <EffectImg src={'/index/kid.png'} />
                    <GridContent content={statis_content} />
                </div>
            </section>
            <section className={styles['page__promo-grid']}>
                {promo_content.map((card) => (<CardContent content={card.content} style={card.style}/>))}
            </section>
            <section className={styles['page__method']}>
                <div className={styles['page__method-content']}>
                    <h2 className={styles['page__method-title']}>Phương pháp học tiếng Anh</h2>
                    <p className={styles['page__method-description']}>Phương pháp học tiếng Anh tại Kids&Us được dựa theo quá trình hấp thu tiếng mẹ đẻ - một hành trình học tập vừa logic, vừa tự nhiên, nhưng cũng đầy ngẫu hứng.</p>
                    <div className={styles['page__method-gridcontent']}>
                        <Slideshow images={slide_images} style={{width: '600px', height: '600px'}}/>
                        <GridContent content={method_content.content} style={method_content.style}/>
                    </div>
                </div>
            </section>
            <section className={styles["page__activity"]}>
                <div className={styles["page__activity-container"]}>
                    <div className={styles["page__activity-content"]}>
                        <h2 className={styles["page__activity-title"]}>
                            Các hoạt động bằng tiếng Anh
                        </h2>
                        <p className={styles["page__activity-description"]}>
                            Tại Kids&Us, tiếng Anh không chỉ được dùng trong lớp học, chúng tôi xây dựng rất nhiều hoạt động bằng tiếng Anh để củng cố trải nghiệm học tập của học viên.
                        </p>
                        <a href='/activity/en' className={styles["page__activity-button"]}>Xem các hoạt động</a>
                    </div>

                    <div className={styles["page__activity-image"]}>
                        <img src='/index/kid_activity.jpg' className={styles["page__activity-img"]} />
                        <div className={styles["page__activity-tags"]}>
                            {activity_tags.map((tag) => (
                            <div className={styles["page__activity-tag"]}>
                                <span className={styles["page__activity-tag-title"]}>{tag.title}</span>
                                <br></br>
                                <span className={styles["page__activity-tag-description"]}>{tag.description}</span>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            <section>
                <RegistrationForm bg_color="#f8dff6" /> 
            </section>

            <HelpButton />
        </>
    );
};

export default Main;
