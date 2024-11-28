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
    "/course9_12/slides/slide_1.png",
    "/course9_12/slides/slide_2.png"
]

const promo_contents = [
    { 
        img: '/course9_12/kid_5.png', 
        content: {
            title: 'Tiếng Anh cho trẻ 9 tuổi',
            sub_title: 'Animal Planet 1',
            description_1: 'qua đồng hành cùng Alexandra trên những chuyến phiêu lưu, trẻ 9 tuổi học từ vựng về thiên nhiên, động vật và chăm sóc cho Trái Đất. Các bài đọc sẽ phức tạp hơn, và trẻ sẽ nâng cao khả năng giao tiếp thông qua các hội thoại tiếng Anh ngắn mà trẻ có thể áp dụng vào đời sống.', 
            description_2: 'Mỗi lớp tối đa 8 học viên',
            description_3: 'Các chủ đề học trên lớp liên quan đến những hoạt động và sở thích của các em trong đời sống, vì thế chúng nên được áp dụng trong các tình huống thực tế ở nhà.',
            href: "#page__regis",
            button: 'Tư vấn miễn phí'
        },
        style: {
            effect: "scalezoom",
            width: "60vw",
            height: "25vw",
            img_pos: 'right',
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
        }
    },
    { 
        img: '/course9_12/kid_6.png', 
        content: {
            title: 'Tiếng Anh cho trẻ 10 tuổi', 
            sub_title: 'Animal Planet 2',
            description_1: 'ở phần 2 của Animal Planet, các chủ đề được mở rộng để nâng cao vốn từ vựng và cấu trúc ngữ pháp tiếng Anh của trẻ. Các em học cách mua thức ăn hoặc gọi món ở nhà hàng, cách kể lại kỳ nghỉ của mình hoặc cách gợi ý phương pháp chống biến đổi khí hậu.', 
            description_2: 'Mỗi lớp tối đa 8 học viên',
            description_3: 'Các chủ đề học trên lớp liên quan đến những hoạt động và sở thích của các em trong đời sống, vì thế chúng nên được áp dụng trong các tình huống thực tế ở nhà.',
            href: "#page__regis",
            button: 'Tư vấn miễn phí'
        },
        style: {
            effect: "scalezoom",
            width: "60vw",
            height: "25vw",
            img_pos: 'left', 
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
        }
    },
    { 
        img: '/course9_12/kid_7.png', 
        content: {
            title: 'Tiếng Anh cho trẻ 11 tuổi', 
            sub_title: 'Fairy Tales 1',
            description_1: 'Ở khóa học này, trẻ sẽ học những câu chuyện cổ tích được sửa đổi để phù hợp bối cảnh hiện đại hơn.', 
            description_2: 'Mỗi lớp tối đa 8 học viên',
            description_3: 'Các chủ đề học trên lớp liên quan đến những hoạt động và sở thích của các em trong đời sống, vì thế chúng nên được áp dụng trong các tình huống thực tế ở nhà.',
            href: "#page__regis",
            button: 'Tư vấn miễn phí'
        },
        style: {
            effect: "scalezoom",
            width: "60vw",
            height: "25vw",
            img_pos: 'right', 
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
        }
    },
    { 
        img: '/course9_12/kid_8.png', 
        content: {
            title: 'Tiếng Anh cho trẻ 12 tuổi', 
            sub_title: 'Fairy Tales 1',
            description_1: 'qua câu chuyện của James, trẻ 12 tuổi được học về giá trị sống và những tình huống khó khăn. Hiểu được những chủ đề này giúp trẻ có thêm động lực và cảm thấy thoải mái khi thể hiện bản thân bằng tiếng Anh.', 
            description_2: 'Mỗi lớp tối đa 8 học viên',
            description_3: 'Các chủ đề học trên lớp liên quan đến những hoạt động và sở thích của các em trong đời sống, vì thế chúng nên được áp dụng trong các tình huống thực tế ở nhà.',
            href: "#page__regis",
            button: 'Tư vấn miễn phí'
        },
        style: {
            effect: "scalezoom",
            width: "60vw",
            height: "25vw",
            img_pos: 'left', 
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
            <section className={styles['page']}>
                <div className={styles['page__content']}>
                    <h2 className={styles['page__title']}>Trẻ tiền thiếu niên học tiếng Anh qua sự tò mò</h2>
                    <p className={styles['page__description']}>Ở tuổi này, trẻ bước vào giai đoạn khám phá bản thân. Trong các khóa Animal Planet và Fairy Tales, các em được khuyến khích phát triển kỹ năng sáng tạo và giao tiếp để có thể nêu được ý kiến của mình bằng tiếng Anh trong những tình huống quen thuộc.</p>
                    <CharacterShow contents={character_info}  style={character_style} />
                </div>
            </section>

            <section>
                {promo_contents.map((promo_content, index) => {
                    return ( 
                        <WaveSection direction='none'>
                            <div className={styles[`page__promo-block-${2 - (index + 1) % 2}`]} id={`promo_${index + 1}`}>
                                <WaveSection direction={index % 2 == 0 ? 'right' : 'left'}>
                                    <CardContent img={promo_content.img} style={promo_content.style}>
                                        <h3 className={styles['page__promo__grid-detail-title']}>{promo_content.content.title}</h3>
                                        <h3 className={styles['page__promo__grid-detail-sub-title']}>{promo_content.content.sub_title}</h3>
                                        <p className={styles['page__promo__grid-detail-content']}>
                                            <span className={styles['page__promo__grid-detail-about']}>Mục tiêu khóa học: </span>
                                            {promo_content.content.description_1}
                                        </p>
                                        <p className={styles['page__promo__grid-detail-content']}>
                                            <span className={styles['page__promo__grid-detail-about']}>Sĩ số: </span>
                                            {promo_content.content.description_2}
                                        </p>
                                        <p className={styles['page__promo__grid-detail-content']}>
                                            <span className={styles['page__promo__grid-detail-about']}>Vai trò của gia đình: </span>
                                            {promo_content.content.description_3}
                                            </p>
                                        <a href={promo_content.content.href} className={styles['page__promo__grid-detail-link']}>{promo_content.content.button}</a>
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
