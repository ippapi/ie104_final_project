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
    "/method/slides/slide_1.png",
    "/method/slides/slide_2.png"
]

const method_contents = [
    { 
        img: '/method/kid_1.png', 
        content: {
            title: 'Bước một',
            sub_title: 'Nghe',
            description_1: 'Tương tự khi học tiếng mẹ đẻ, tiếp xúc của trẻ với tiếng Anh nên bắt đầu từ việc Lắng Nghe. Bắt đầu nghe càng sớm, trẻ càng tiếp thu tiếng Anh sớm hơn. Vì thế tại Kids&Us, trẻ từ 1 tuổi đã được cho tiếp xúc với tiếng Anh hằng ngày.',
            href: "#page__regis",
        },
        style: {
            effect: "bounce",
            width: "60vw",
            height: "25vw",
            img_pos: 'left',
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
        }
    },
    { 
        img: '/method/kid_2.png', 
        content: {
            title: 'Bước hai', 
            sub_title: 'Hiểu', 
            description_1: 'Khi trò chuyện với trẻ bằng tiếng mẹ đẻ, chúng ta nói rất tự nhiên, không ngại dùng nhiều từ ngữ, giọng điệu hay các cụm, câu, cách chia thì khác nhau. Phương pháp học tiếng Anh tại Kids&Us mô phỏng điều đó và tiếng Anh được sử dụng một cách tự nhiên, không cố tình giản lược hóa.',
            href: "#page__regis",
        },
        style: {
            effect: "bounce",
            width: "60vw",
            height: "25vw",
            img_pos: 'right', 
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
        }
    },
    { 
        img: '/method/kid_3.png', 
        content: {
            title: 'Bước ba', 
            sub_title: 'Nói', 
            description_1: 'Nói là kết quả tự nhiên sau quá trình nghe và hiểu. Ở giai đoạn này, nhiều tình huống sẽ được tạo ra trong lớp để trẻ có cơ hội dùng lời nói diễn đạt tất cả những điều đã học trước đó.',
            href: "#page__regis",
        },
        style: {
            effect: "bounce",
            width: "60vw",
            height: "25vw",
            img_pos: 'left', 
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
        }
    },
    { 
        img: '/method/kid_4.png', 
        content: {
            title: 'Bước bốn', 
            sub_title: 'Đọc', 
            description_1: 'Kỳ vọng trẻ thạo tiếng Anh qua việc đọc và viết trước khi các em có thể nói đi ngược với quá trình tiếp thu ngôn ngữ tự nhiên. Liệu chim có thể bay nếu nó chưa học dang cánh? Trong phương pháp của Kids&Us, trẻ chỉ dành nhiều thời gian cho việc đọc một khi các em đã có thể đọc trôi chảy.',
            href: "#page__regis",
        },
        style: {
            effect: "bounce",
            width: "60vw",
            height: "25vw",
            img_pos: 'right', 
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
        }
    },
    { 
        img: '/method/kid_5.png', 
        content: {
            title: 'Bước năm', 
            sub_title: 'Viết', 
            description_1: 'Để đạt giai đoạn này, trẻ cần phải vững cả 4 bước trước đó. Viết là quá trình diễn đạt ý nghĩ lên mặt giấy. Vì thế, học viên Kids&Us được bắt đầu viết khi các em đã có kỹ năng nói tốt và hiểu rõ những gì người khác nói.',
            href: "#page__regis",
        },
        style: {
            effect: "bounce",
            width: "60vw",
            height: "25vw",
            img_pos: 'left', 
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
        }
    },
]

const character_info = [
    {
        title: 'Nghe',
        href: '#method_1',
        img: '/method/nghe.png'
    },
    {
        img: '/method/right-arrow.png'
    },
    {
        title: 'Hiểu',
        href: '#method_2',
        img: '/method/hieu.png'
    },
    {
        img: '/method/right-arrow.png'
    },
    {
        title: 'Nói',
        href: '#method_2',
        img: '/method/noi.png'
    },
    {
        img: '/method/right-arrow.png'
    },
    {
        title: 'Đọc',
        href: '#method_2',
        img: '/method/doc.png'
    },
    {
        img: '/method/right-arrow.png'
    },
    {
        title: 'Viết',
        href: '#method_2',
        img: '/method/viet.png'
    },
]

const character_style = {
    color: '#1e4b75',
    effect: 'border',
    gap: '30px',
    width: '60px', 
    height: '60px'
}

const Main = () => {
    return (
        <>
            <NavBar />
            <Slideshow images={big_slide_images} interval={5000} />
            <WaveSection>
                <section className={styles['page']}>
                    <div className={styles['page__content']}>
                        <h2 className={styles['page__title']}>Phương pháp của chúng tôi</h2>
                        <p className={styles['page__description']}>
                            Phương pháp học tiếng Anh tại Kids&Us được dựa theo quá trình hấp thu tiếng mẹ đẻ - một hành trình học tập vừa logic, vừa tự nhiên, nhưng cũng đầy ngẫu hứng.
                        </p>

                        <WaveSection>
                            <CharacterShow contents={character_info}  style={character_style} />
                        </WaveSection>

                    </div>
                </section>
            </WaveSection>

            <section>
                {method_contents.map((method_content, index) => {
                    return ( 
                        <WaveSection>
                            <div className={styles[`method__block-${2 - (index + 1) % 2}`]} id={`method__${2 - (index + 1) % 2}`}>
                                <WaveSection direction={index % 2 == 0 ? 'right' : 'left'}>
                                    <CardContent img={method_content.img} style={method_content.style}>
                                        <h3 className={styles['method__grid-detail-title']}>{method_content.content.title}</h3>
                                        <h3 className={styles['method__grid-detail-sub-title']}>{method_content.content.sub_title}</h3>
                                        <p className={styles['method__grid-detail-content']}>
                                            {method_content.content.description_1}
                                        </p>
                                    </CardContent>
                                </WaveSection>
                            </div>
                        </WaveSection>
                    );
                })}
            </section>

            <WaveSection>
                <section className={styles['page']}>
                    <h2 className={styles['page__title']}>Trường Anh ngữ Kids&Us Vietnam - Tiếng Anh cho trẻ từ 1 tuổi </h2>
                    <div className={styles['page__video-grid']}>
                        <VideoPlayer videoId='OzEF9ml8HNU'/>
                        <VideoPlayer videoId='jAU-CsRN1PQ'/>
                    </div>
                </section>
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
