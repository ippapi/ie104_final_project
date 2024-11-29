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
    "/course1_2/slides/slide_1.png",
    "/course1_2/slides/slide_2.png"
]

const promo_contents = [
    { 
        img: '/course1_2/kid_1.png', 
        content: {
            title: 'Tiếng Anh cho trẻ 1 tuổi',
            sub_title: 'Mousy',
            description_1: 'Phát huy tối đa khả năng thấu hiểu ngôn ngữ bẩm sinh của bé. Việc cho bé quen dần với các kích thích bên ngoài sẽ giúp bé hiểu được các chỉ dẫn cơ bản bằng tiếng Anh.',
            description_2: 'Mỗi lớp tối đa 5 bé, có người lớn đi kèm',
            description_3: 'Khi chủ động tham gia các hoạt động trong lớp, bố mẹ sẽ tạo ra kết nối tinh thần với bé để cổ vũ bé học tập.', 
            href: "#page__regis",
            button: 'Tư vấn miễn phí'
        },
        style: {
            effect: "zoom",
            width: "60vw",
            height: "25vw",
            img_pos: 'right',
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
        }
    },
    { 
        img: '/course1_2/kid_2.png', 
        content: {
            title: 'Tiếng Anh cho trẻ 2 tuổi', 
            sub_title: 'Linda', 
            description_1: 'Trong khóa này, các bé 2 tuổi được học cách gọi tên những thứ xung quanh bằng tiếng Anh: bộ phận cơ thể, màu sắc, hình dạng... Bé bắt đầu ráp từ thành những câu đơn giản và học các bài hát bằng tiếng Anh. Thông qua các hoạt động kích thích trí tưởng tượng, bé sẽ hình thành phát âm tự nhiên ngay từ nhỏ.',
            description_2: 'Mỗi lớp tối đa 5 bé, có người lớn đi kèm',
            description_3: 'Đến khoảng giữa khóa học, các bé trở nên dạn dĩ hơn và không cần bố mẹ cùng vào lớp nữa. Tuy nhiên, bố mẹ vẫn nên duy trì việc động viên con học khi ở nhà.',
            href: "#page__regis",
            button: 'Tư vấn miễn phí'
        },
        style: {
            effect: "zoom",
            width: "60vw",
            height: "25vw",
            img_pos: 'left', 
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
        }
    },
]

const character_info = [
    {
        title: 'Mousy',
        discription: 'Tiếng anh cho trẻ một tuổi',
        href: '#promo__1',
        img: '/course1_2/mousy.png'
    },
    {
        title: 'Linda',
        discription: 'Tiếng anh cho trẻ hai tuổi',
        href: '#promo__2',
        img: '/course1_2/linda.png'
    }
]

const character_style = {
    color: '#1e4b75',
    effect: 'bounce',
    width: '100px', 
    height: '100px'
}

const Main = () => {
    return (
        <>
            <NavBar />
            <Slideshow images={big_slide_images} interval={5000} />
            <WaveSection>
                <section className={styles['page']}>
                    <div className={styles['page__content']}>
                        <h2 className={styles['page__title']}>Các em bé học tiếng Anh qua cảm xúc</h2>
                        <p className={styles['page__description']}>
                            Qua các bài hát và trò chơi, những giác quan của em bé được kích thích và bé dần quen với ngữ điệu tiếng Anh. Trong trải nghiệm này, các bé sẽ được đồng hành bởi hai nhân vật đáng yêu: <br></br> Mousy và Linda.
                        </p>

                        <WaveSection>
                            <CharacterShow contents={character_info}  style={character_style} />
                        </WaveSection>
                    </div>
                </section>
            </WaveSection>

            <section>
                {promo_contents.map((promo_content, index) => {
                    return ( 
                        <WaveSection>
                            <div className={styles[`promo__block-${index + 1}`]} id={`promo__${index + 1}`}>
                                <WaveSection direction={index % 2 == 0 ? 'right' : 'left'}>
                                    <CardContent img={promo_content.img} style={promo_content.style}>
                                        <h3 className={styles['promo__grid-detail-title']}>{promo_content.content.title}</h3>
                                        <h3 className={styles['promo__grid-detail-sub-title']}>{promo_content.content.sub_title}</h3>
                                        <p className={styles['promo__grid-detail-content']}>
                                            <span className={styles['promo__grid-detail-about']}>Mục tiêu khóa học: </span>
                                            {promo_content.content.description_1}
                                        </p>
                                        <p className={styles['promo__grid-detail-content']}>
                                            <span className={styles['promo__grid-detail-about']}>Sĩ số: </span>
                                            {promo_content.content.description_2}
                                        </p>
                                        <p className={styles['promo__grid-detail-content']}>
                                            <span className={styles['promo__grid-detail-about']}>Vai trò của gia đình: </span>
                                            {promo_content.content.description_3}
                                            </p>
                                        <a href={promo_content.content.href} className={styles['promo__grid-detail-link']}>{promo_content.content.button}</a>
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
