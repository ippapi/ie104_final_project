import React from 'react';
import styles from '@/styles/Page.module.css';
import Slideshow from '@/components/ui/SlideShow';
import CardContent from '@/components/ui/CardContent';
import RegistrationForm from '@/components/ui/RegisForm';
import HelpButton from '@/components/ui/HelpButton';
import VideoPlayer from '@/components/ui/VideoPlayer';
import CharacterShow from '@/components/ui/CharacterShow';

const big_slide_images = [
    "/course13_18/slides/slide_1.png",
    "/course13_18/slides/slide_2.png"
]

const promo_contents = [
    { 
        content: {
            img: '/course13_18/kid_7.png', 
            title: 'Tiếng Anh cho trẻ 13 tuổi', 
            description: 'Mục tiêu khóa học: Spike, nhân vật chính trong khóa này, cùng cả lớp phiêu lưu đến đảo Looet vùng Ca-ri-bê. Nhưng vừa đến nơi, họ nhận ra một người trong lớp đã mất tích. Qua giải đáp các bí ẩn, các em sẽ học được vô số từ vựng mới và bắt đầu hiểu rõ hơn các quy tắc ngữ pháp.', 
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
            img: '/course13_18/kid_8.png', 
            title: 'Tiếng Anh cho trẻ 14 tuổi', 
            description: 'Mục tiêu khóa học: trong khóa này, các em hoàn thiện kỹ năng viết thông qua thử sức với nhiều thể loại như tiểu luận, truyện ngắn, báo chí, báo cáo với nhiều mẫu câu phức tạp. Đồng thời, kỹ năng nói của các em cũng được nâng cao thông qua hỏi đáp về hoạt động thường nhật của mình.', 
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
            img: '/course13_18/kid_9.png', 
            title: 'Tiếng Anh cho thiếu niên 15 tuổi', 
            description: 'Mục tiêu khóa học: các em học cách nêu lên và bảo vệ quan điểm của mình qua hai câu chuyện: chuyện thứ nhất về một tương lai xa nơi chính trị gia được bầu chọn qua chương trình thực tế. Còn trong chuyện thứ hai, các em du hành đến tương lai nơi một phần của Trái Đất đã bị nhấn chìm sau thảm họa sinh thái.', 
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
            img: '/course13_18/kid_10.png', 
            title: 'Tiếng Anh cho thiếu niên 16 tuổi', 
            description: 'Mục tiêu khóa học: càng lớn, kiến thức của các em về thế giới cũng càng nhiều. Thông qua nhìn nhận những vấn đề thế giới hiện tại, các em đồng thời nâng cao khả năng ngôn ngữ của mình. Các em được học thêm từ vựng và thậm chí có thể phân biệt các từ gần như đồng nghĩa.', 
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
            img: '/course13_18/kid_11.png', 
            title: 'Tiếng Anh cho thiếu niên 17 tuổi', 
            description: 'Mục tiêu khóa học: riêng với khóa học này, trẻ được học bằng tạp chí tiếng Anh do chính Kids&Us biên soạn. Trong đó, những vấn đề đang nóng được đưa tin bằng các cấu trúc ngữ pháp tương đương cấp độ C1. Qua đối mặt với các tình huống thực tế, các em 17 tuổi đạt sự lưu loát tiếng Anh và tăng cường khả năng tư duy phản biện.', 
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
            img: '/course13_18/kid_12.png', 
            title: 'Tiếng Anh cho thiếu niên 18 tuổi', 
            description: 'Mục tiêu khóa học: ở khóa này, các em 18 tuổi có thể diễn đạt đúng ý mình trong mọi hoàn cảnh, từ đời thường đến môi trường học thuật hay chuyên nghiệp. Các em vận dụng mọi mặt của tiếng Anh một cách xuất sắc, với sự lưu loát và chính xác cao.', 
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
        title: 'Mysteries 1',
        discription: 'Tiếng anh cho trẻ 13 tuổi',
        href: '#promo_1',
        img: '/course13_18/kid_1.png'
    },
    {
        title: 'Mysteries 2',
        discription: 'Tiếng anh cho trẻ 14 tuổi',
        href: '#promo_2',
        img: '/course13_18/kid_2.png'
    },
    {
        title: 'The Future 1',
        discription: 'Tiếng Anh cho thiếu niên 15 tuổi ',
        href: '#promo_3',
        img: '/course13_18/kid_3.png'
    },
    {
        title: 'MThe Future 2',
        discription: 'Tiếng Anh cho thiếu niên 16 tuổi',
        href: '#promo_4',
        img: '/course13_18/kid_4.png'
    }
]

const character_info_2 = [
    {
        title: 'Subscription 1',
        discription: 'Tiếng Anh cho thiếu niên 17 tuổi ',
        href: '#promo_5',
        img: '/course13_18/kid_5.png'
    },
    {
        title: 'Subscription 2',
        discription: 'Tiếng Anh cho thiếu niên 18 tuổi ',
        href: '#promo_6',
        img: '/course13_18/kid_6.png'
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
                    <h2 className={styles['page__about-title']}>Các bạn teen học tiếng Anh vì tương lai</h2>
                    <p className={styles['page__about-description']}>
                        Bước vào tuổi dậy thì với vốn tiếng Anh vững vàng giúp các bạn tuổi teen đủ tự tin xây dựng cá tính và tương lai của mình. Nhờ nắm chắc tiếng Anh, các em giao tiếp lưu loát, chuẩn và với vốn từ phong phú, giúp các em thể hiện bản thân rõ nét hơn.
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

            <section className={styles['page__about']}>
                <h2 className={styles['page__about-title']}>Lớp Tiếng Anh cho thiếu niên 13-18 tuổi</h2>
                <div className={styles['page__about-grid']}>
                    <img className={styles['page__about__grid-about']} src='/index/kid_activity.jpg'/>
                    <img className={styles['page__about__grid-about']} src='/index/kid_activity.jpg'/>
                    <img className={styles['page__about__grid-about']} src='/index/kid_activity.jpg'/>
                </div>
            </section>
                        
            <section id='page__regis'>
                <RegistrationForm bg_color="#fff0f1" /> 
            </section>

            <HelpButton />
        </>
    );
};

export default Main;
