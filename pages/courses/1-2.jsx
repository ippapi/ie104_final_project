import React from 'react';
import styles from '@/styles/Page.module.css';
import Slideshow from '@/components/ui/SlideShow';
import CardContent from '@/components/ui/CardContent';
import RegistrationForm from '@/components/ui/RegisForm';
import HelpButton from '@/components/ui/HelpButton';
import VideoPlayer from '@/components/ui/VideoPlayer';
import CharacterShow from '@/components/ui/CharacterShow';

const big_slide_images = [
    "/course1_2/slides/slide_1.png",
    "/course1_2/slides/slide_2.png"
]

const promo_contents = [
    { 
        content: {
            img: '/course1_2/kid_1.png', 
            title: 'Tiếng Anh cho trẻ 1 tuổi', 
            description: 'Bé đã sẵn sàng học ngôn ngữ ngay từ khi sinh ra. Cơ hội này được tận dụng tối đa tại Kids&Us nhằm thôi thúc bé học qua các giác quan của mình.', 
            href: "#page__regis",
            button: 'Tư vấn miễn phí'
        },
        style: {
            effect: "bounce",
            width: "50vw",
            height: "25vw",
            img_pos: 'left',
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
        }
    },
    { 
        content: {
            img: '/course1_2/kid_2.png', 
            title: 'Tiếng Anh cho trẻ 2 tuổi', 
            description: 'Mục tiêu khóa học: Trong khóa này, các bé 2 tuổi được học cách gọi tên những thứ xung quanh bằng tiếng Anh: bộ phận cơ thể, màu sắc, hình dạng... Bé bắt đầu ráp từ thành những câu đơn giản và học các bài hát bằng tiếng Anh. Thông qua các hoạt động kích thích trí tưởng tượng, bé sẽ hình thành phát âm tự nhiên ngay từ nhỏ.', 
            href: "#page__regis",
            button: 'Tư vấn miễn phí'
        },
        style: {
            effect: "bounce",
            width: "50vw",
            height: "25vw",
            img_pos: 'right', 
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
        }
    },
]

const character_info = [
    {
        title: 'Mousy',
        discription: 'Tiếng anh cho trẻ một tuổi',
        href: '#promo_1',
        img: '/course1_2/mousy.png'
    },
    {
        title: 'Linda',
        discription: 'Tiếng anh cho trẻ hai tuổi',
        href: '#promo_2',
        img: '/course1_2/linda.png'
    }
]

const character_style = {
    effect: 'bounce',
    width: '100px', 
    height: '100px'
}

const Main = () => {
    return (
        <>
            <Slideshow images={big_slide_images} interval={5000} />
            <section className={styles['page__about']}>
                <div className={styles['page__about-content']}>
                    <h2 className={styles['page__about-title']}>Các em bé học tiếng Anh qua cảm xúc</h2>
                    <p className={styles['page__about-description']}>
                        Qua các bài hát và trò chơi, những giác quan của em bé được kích thích và bé dần quen với ngữ điệu tiếng Anh. Trong trải nghiệm này, các bé sẽ được đồng hành bởi hai nhân vật đáng yêu: Mousy và Linda.
                    </p>
                    <CharacterShow contents={character_info}  style={character_style} />
                </div>
            </section>
            <section className={styles['page__promo-block']}>
                {promo_contents.map((promo_content, index) => {
                    return (
                        <div className={styles[`page__promo__block-${index + 1}`]} id={`promo_${index + 1}`}>
                            <CardContent content={promo_content.content} style={promo_content.style}/>
                        </div>        
                    );
                })}
            </section>

            <section className={styles['page__video']}>
                <h2 className={styles['page__video-title']}>Trường Anh ngữ Kids&Us Vietnam - Tiếng Anh cho trẻ từ 1 tuổi </h2>
                <div className={styles['page__video-grid']}>
                    <VideoPlayer videoId='OzEF9ml8HNU'/>
                    <VideoPlayer videoId='jAU-CsRN1PQ'/>
                </div>
            </section>
                        
            <section id='page__regis'>
                <RegistrationForm bg_color="#58d2dd" /> 
            </section>

            <HelpButton />
        </>
    );
};

export default Main;
