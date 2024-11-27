import React from 'react';
import styles from '@/styles/Page.module.css';
import NavBar from '@/components/ui/NavBar';
import WaveSection from '@/components/ui/WaveSection';
import Slideshow from '@/components/ui/SlideShow';
import CardContent from '@/components/ui/CardContent';
import RegistrationForm from '@/components/ui/RegisForm';
import HelpButton from '@/components/ui/HelpButton';
import VideoPlayer from '@/components/ui/VideoPlayer';
import CharacterShow from '@/components/ui/CharacterShow';

const big_slide_images = [
    "/course3_8/slides/slide_1.png",
    "/course3_8/slides/slide_2.png"
]

const promo_contents = [
    { 
        content: {
            img: '/course3_8/kid_7.png', 
            title: 'Tiếng Anh cho trẻ 3 tuổi', 
            description: 'Mục tiêu khóa học: cùng với Sam, trẻ khám phá môi trường xung quanh và dần tự chủ các hoạt động trong lẫn ngoài lớp học như tự đi vệ sinh, tự mặc áo khoác... Mỗi dịp như vậy đều là cơ hội để trẻ giao tiếp tiếng Anh.', 
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
            img: '/course3_8/kid_8.png', 
            title: 'Tiếng Anh cho trẻ 4 tuổi', 
            description: 'Mục tiêu khóa học: nhờ Emma, tiếng Anh dần trở thành thói quen của bé. Thông qua các bài hát, bé luyện tập ngữ điệu và nhịp điệu của tiếng Anh. Các chuyện kể và audiobook sẽ giúp bé có thêm nhiều biểu cảm mới.', 
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
            img: '/course3_8/kid_9.png', 
            title: 'Tiếng Anh cho trẻ 5 tuổi', 
            description: 'Mục tiêu khóa học: qua những câu chuyện của Oliver, như rụng răng, bị ốm, hay muốn phụ bố mẹ việc nhà, bé bắt đầu làm quen với các thì như quá khứ đơn và hiện tại tiếp diễn.', 
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
            img: '/course3_8/kid_10.png', 
            title: 'Tiếng Anh cho trẻ 6 tuổi', 
            description: 'Mục tiêu khóa học: Marcia có phép thuật và là người đồng hành với bé trong khóa này. Qua những tình huống phi thường, bé học cách dùng động từ bất quy tắc và trợ động từ. Bé bắt đầu hiểu rõ các khái niệm thời gian như hôm nay, hôm qua, ngày mai, tuần trước.', 
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
            img: '/course3_8/kid_11.png', 
            title: 'Tiếng Anh cho trẻ 7 tuổi', 
            description: 'Mục tiêu khóa học: cặp song sinh lém lỉnh Pam&Paul sẽ giúp phát triển trí tưởng tượng của bé qua những câu chuyện đan xen tưởng tượng và thực tế. Trong khóa này, bé được học động từ khẳng định và phủ định. Bé bắt đầu hiểu và dùng các mẫu câu thông dụng để tự giới thiệu bản thân.', 
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
            img: '/course3_8/kid_12.png', 
            title: 'Tiếng Anh cho trẻ 8 tuổi', 
            description: 'Mục tiêu khóa học: qua luyện tập viết và nói tiếng Anh, các bé sẽ dần đọc viết lưu loát hơn ở lớp này. Cùng với Ben&Brenda, các bé bắt đầu những hình thức phiêu lưu kỳ thú mới để qua đó nâng cao khả năng đọc hiểu.', 
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

const character_info_1 = [
    {
        title: 'Sam',
        discription: 'Tiếng anh cho trẻ ba tuổi',
        href: '#promo_1',
        img: '/course3_8/kid_1.png'
    },
    {
        title: 'Emma',
        discription: 'Tiếng anh cho trẻ bốn tuổi',
        href: '#promo_2',
        img: '/course3_8/kid_2.png'
    },
    {
        title: 'Oliver',
        discription: 'Tiếng anh cho trẻ năm tuổi',
        href: '#promo_3',
        img: '/course3_8/kid_3.png'
    },
    {
        title: 'Marcia',
        discription: 'Tiếng anh cho trẻ sáu tuổi',
        href: '#promo_4',
        img: '/course3_8/kid_4.png'
    }
]

const character_info_2 = [
    {
        title: 'Pam&Paul',
        discription: 'Tiếng anh cho trẻ bảy tuổi',
        href: '#promo_5',
        img: '/course3_8/kid_5.png'
    },
    {
        title: 'Linda',
        discription: 'Tiếng anh cho trẻ tám tuổi',
        href: '#promo_6',
        img: '/course3_8/kid_6.png'
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
            <NavBar />
            <Slideshow images={big_slide_images} interval={5000} />
            <section className={styles['page__about']}>
                <div className={styles['page__about-content']}>
                    <h2 className={styles['page__about-title']}>Các bé học tiếng Anh tự nhiên như đang chơi</h2>
                    <p className={styles['page__about-description']}>
                    Thông qua những tình huống thường gặp, trẻ 3-8 tuổi được học tiếng Anh một cách tự nhiên.
                    Các câu chuyện của Sam, Emma, Oliver, Marcia, Pam&Paul và Ben&Brenda sẽ kích thích trí tưởng tượng và tò mò để trẻ hào hứng với việc học.
                    </p>
                    <CharacterShow contents={character_info_1}  style={character_style} />
                    <CharacterShow contents={character_info_2}  style={character_style} />
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
                <RegistrationForm bg_color="#f8dff6" /> 
            </section>

            <HelpButton />
        </>
    );
};

export default Main;
