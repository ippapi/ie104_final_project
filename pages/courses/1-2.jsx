import React from 'react';
import styles from '@/styles/Home.module.css';
import Slideshow from '@/components/ui/SlideShow';
import GridContent from '@/components/ui/GridContent';
import EffectImg from '@/components/ui/EffectImg';
import CardContent from '@/components/ui/CardContent';
import RegistrationForm from '@/components/ui/RegisForm';
import HelpButton from '@/components/ui/HelpButton';

const big_slide_images = [
    "/course1_2/slides/slide_1.png",
    "/course1_2/slides/slide_2.png"
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

const slide_images = [
    "/kid_5.jpg",
    "/kid_6.jpg",
]

const method_content = [
    { title: 'Nghe', content: 'Nghe là bước đầu tiên mà trẻ làm quen với tiếng mẹ đẻ '},
    { title: 'Hiểu', content: 'Thông qua nghe, trẻ dần hiểu được những từ đầu tiên'},
    { title: 'Nói', content: 'Sau khi nghe và hiểu tiếng mẹ đẻ, trẻ bắt đầu tập nói'},
    { title: 'Đọc', content: 'Đọc là giai đoạn tiếp theo trong quá trình học ngôn ngữ'},
    { title: 'Viết', content: 'Cuối cùng, trẻ hoàn thiện kỹ năng ngôn ngữ bằng việc tập viết'}
];

const activity_tags = [
    { title: "Story", description: "Time" },
    { title: "Little", description: "Chef" },
    { title: "Art", description: "Craft" },
];

const method_title_color = [ '#f6d367', '#feacb', '#74bebe', '#fe699f', '#2b2b2b' ]

const Main = () => {
    return (
        <>
            <Slideshow images={big_slide_images} interval={5000} />
            <section className={styles['home__about']}>
                <div className={styles['home__about-content']}>
                    <h2 className={styles['home__about-title']}>Các em bé học tiếng Anh qua cảm xúc</h2>
                    <p className={styles['home__about-description']}>
                        Qua các bài hát và trò chơi, những giác quan của em bé được kích thích và bé dần quen với ngữ điệu tiếng Anh. Trong trải nghiệm này, các bé sẽ được đồng hành bởi hai nhân vật đáng yêu:
                        Mousy và Linda.
                    </p>
                    <EffectImg src={'/kid.png'}/>
                    <GridContent content={statis_content} />
                </div>
            </section>
            <div className={styles['home__promo']}>
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
            <section className={styles['home__method']}>
                <div className={styles['home__method-content']}>
                    <h2 className={styles['home__method-title']}>Phương pháp học tiếng Anh</h2>
                    <p className={styles['home__method-description']}>
                        Phương pháp học tiếng Anh tại Kids&Us được dựa theo quá trình hấp thu tiếng mẹ đẻ - một hành trình học tập vừa logic, vừa tự nhiên, nhưng cũng đầy ngẫu hứng.
                    </p>
                    <div className={styles['home__method-gridcontent']}>
                        <Slideshow images={slide_images} width='600px' height='600px'/>
                        <GridContent content={method_content} layout='column' colors={method_title_color} align_pos='left'/>
                    </div>
                </div>
            </section>
            <section className={styles["home__activity"]}>
                <div className={styles["home__activity-container"]}>
                    <div className={styles["home__activity-content"]}>
                        <h2 className={styles["home__activity-title"]}>
                            Các hoạt động bằng tiếng Anh
                        </h2>
                        <p className={styles["home__activity-description"]}>
                            Tại Kids&Us, tiếng Anh không chỉ được dùng trong lớp học, chúng tôi xây dựng rất nhiều hoạt động bằng tiếng Anh để củng cố trải nghiệm học tập của học viên.
                        </p>
                        <a href='/activity/en' className={styles["home__activity-button"]}>Xem các hoạt động</a>
                    </div>

                    <div className={styles["home__activity-image"]}>
                        <img src='/kid_activity.jpg' className={styles["home__activity-img"]} />
                        <div className={styles["home__activity-tags"]}>
                            {activity_tags.map((tag, index) => (
                            <div key={index} className={styles["home__activity-tag"]}>
                                <span className={styles["home__activity-tag-title"]}>{tag.title}</span>
                                <br></br>
                                <span className={styles["home__activity-tag-description"]}>{tag.description}</span>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            <section>
                <RegistrationForm backgroundColor="#E3F2FD" /> 
            </section>

            <HelpButton />
        </>
    );
};

export default Main;
