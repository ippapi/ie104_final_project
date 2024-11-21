import React from 'react';
import styles from '@/styles/Page.module.css';
import Slideshow from '@/components/ui/SlideShow';
import CardContent from '@/components/ui/CardContent';
import RegistrationForm from '@/components/ui/RegisForm';
import HelpButton from '@/components/ui/HelpButton';
import VideoPlayer from '@/components/ui/VideoPlayer';
import CharacterShow from '@/components/ui/CharacterShow';

const big_slide_images = [
    "/course9_12/slides/slide_1.png",
    "/course9_12/slides/slide_2.png"
]

const promo_contents = [
    { 
        content: {
            img: '/course9_12/kid_5.png', 
            title: 'Tiếng Anh cho trẻ 9 tuổi', 
            description: 'Mục tiêu khóa học: qua đồng hành cùng Alexandra trên những chuyến phiêu lưu, trẻ 9 tuổi học từ vựng về thiên nhiên, động vật và chăm sóc cho Trái Đất. Các bài đọc sẽ phức tạp hơn, và trẻ sẽ nâng cao khả năng giao tiếp thông qua các hội thoại tiếng Anh ngắn mà trẻ có thể áp dụng vào đời sống.', 
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
            img: '/course9_12/kid_6.png', 
            title: 'Tiếng Anh cho trẻ 10 tuổi', 
            description: 'Mục tiêu khóa học: ở phần 2 của Animal Planet, các chủ đề được mở rộng để nâng cao vốn từ vựng và cấu trúc ngữ pháp tiếng Anh của trẻ. Các em học cách mua thức ăn hoặc gọi món ở nhà hàng, cách kể lại kỳ nghỉ của mình hoặc cách gợi ý phương pháp chống biến đổi khí hậu.', 
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
    { 
        content: {
            img: '/course9_12/kid_7.png', 
            title: 'Tiếng Anh cho trẻ 11 tuổi', 
            description: 'Mục tiêu khóa học: Ở khóa học này, trẻ sẽ học những câu chuyện cổ tích được sửa đổi để phù hợp bối cảnh hiện đại hơn.', 
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
            img: '/course9_12/kid_8.png', 
            title: 'Tiếng Anh cho trẻ 12 tuổi', 
            description: 'Mục tiêu khóa học: qua câu chuyện của James, trẻ 12 tuổi được học về giá trị sống và những tình huống khó khăn. Hiểu được những chủ đề này giúp trẻ có thêm động lực và cảm thấy thoải mái khi thể hiện bản thân bằng tiếng Anh.', 
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
    }
]

const character_info = [
    {
        title: 'Animal Planet 1',
        discription: 'Tiếng anh cho trẻ 9 tuổi',
        href: '#promo_1',
        img: '/course9_12/kid_1.png'
    },
    {
        title: 'Animal Planet 2',
        discription: 'Tiếng anh cho trẻ 10 tuổi',
        href: '#promo_2',
        img: '/course9_12/kid_2.png'
    },
    {
        title: 'Fairy Tales 1',
        discription: 'Tiếng anh cho trẻ 11 tuổi',
        href: '#promo_3',
        img: '/course9_12/kid_3.png'
    },
    {
        title: 'Fairy Tales 2',
        discription: 'Tiếng anh cho trẻ 12 tuổi',
        href: '#promo_4',
        img: '/course9_12/kid_4.png'
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
                    <h2 className={styles['page__about-title']}>Trẻ tiền thiếu niên học tiếng Anh qua sự tò mò</h2>
                    <p className={styles['page__about-description']}>Ở tuổi này, trẻ bước vào giai đoạn khám phá bản thân. Trong các khóa Animal Planet và Fairy Tales, các em được khuyến khích phát triển kỹ năng sáng tạo và giao tiếp để có thể nêu được ý kiến của mình bằng tiếng Anh trong những tình huống quen thuộc.</p>
                    <CharacterShow contents={character_info}  style={character_style} />
                </div>
            </section>
            <section className={styles['page__promo-block']}>
                {promo_contents.map((promo_content, index) => {
                    return (
                        <div className={styles[`page__promo__block-${2 - (index + 1) % 2}`]} id={`promo_${index + 1}`}>
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
