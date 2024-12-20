import React from 'react';
import styles from '@/styles/Page.module.css';
import NavBar from '@/components/ui/NavBar';
import WaveSection from '@/components/ui/WaveSection';
import Slideshow from '@/components/ui/SlideShow';
import CardContent from '@/components/ui/CardContent';
import RegistrationForm from '@/components/ui/RegisForm';
import HelpButton from '@/components/ui/HelpButton';
import InteractiveImg from '@/components/ui/InteractiveImg';
import CharacterShow from '@/components/ui/CharacterShow';

const big_slide_images = [
    "/course13_18/slides/slide_1.png",
    "/course13_18/slides/slide_2.png"
]

const promo_contents = [
    { 
        img: '/course13_18/kid_7.png', 
        content: {
            title: 'Tiếng Anh cho trẻ 13 tuổi', 
            sub_title: 'Mysteries 1',
            description_1: 'Spike, nhân vật chính trong khóa này, cùng cả lớp phiêu lưu đến đảo Looet vùng Ca-ri-bê. Nhưng vừa đến nơi, họ nhận ra một người trong lớp đã mất tích. Qua giải đáp các bí ẩn, các em sẽ học được vô số từ vựng mới và bắt đầu hiểu rõ hơn các quy tắc ngữ pháp.', 
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
        img: '/course13_18/kid_8.png', 
        content: {
            title: 'Tiếng Anh cho trẻ 14 tuổi',
            sub_title: 'Mysteries 2', 
            description_1: 'trong khóa này, các em hoàn thiện kỹ năng viết thông qua thử sức với nhiều thể loại như tiểu luận, truyện ngắn, báo chí, báo cáo với nhiều mẫu câu phức tạp. Đồng thời, kỹ năng nói của các em cũng được nâng cao thông qua hỏi đáp về hoạt động thường nhật của mình.', 
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
        img: '/course13_18/kid_9.png', 
        content: {
            title: 'Tiếng Anh cho thiếu niên 15 tuổi',
            sub_title: 'The future 1',
            description_1: 'các em học cách nêu lên và bảo vệ quan điểm của mình qua hai câu chuyện: chuyện thứ nhất về một tương lai xa nơi chính trị gia được bầu chọn qua chương trình thực tế. Còn trong chuyện thứ hai, các em du hành đến tương lai nơi một phần của Trái Đất đã bị nhấn chìm sau thảm họa sinh thái.', 
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
        img: '/course13_18/kid_10.png', 
        content: {
            title: 'Tiếng Anh cho thiếu niên 16 tuổi', 
            sub_title: 'The future 2',
            description_1: 'càng lớn, kiến thức của các em về thế giới cũng càng nhiều. Thông qua nhìn nhận những vấn đề thế giới hiện tại, các em đồng thời nâng cao khả năng ngôn ngữ của mình. Các em được học thêm từ vựng và thậm chí có thể phân biệt các từ gần như đồng nghĩa.', 
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
        img: '/course13_18/kid_11.png', 
        content: {
            title: 'Tiếng Anh cho thiếu niên 17 tuổi', 
            sub_title: 'Subscription 1&Paul',
            description_1: 'riêng với khóa học này, trẻ được học bằng tạp chí tiếng Anh do chính Kids&Us biên soạn. Trong đó, những vấn đề đang nóng được đưa tin bằng các cấu trúc ngữ pháp tương đương cấp độ C1. Qua đối mặt với các tình huống thực tế, các em 17 tuổi đạt sự lưu loát tiếng Anh và tăng cường khả năng tư duy phản biện.', 
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
        img: '/course13_18/kid_12.png', 
        content: {
            title: 'Tiếng Anh cho thiếu niên 18 tuổi',
            sub_title: 'Subscription 2', 
            description_1: 'ở khóa này, các em 18 tuổi có thể diễn đạt đúng ý mình trong mọi hoàn cảnh, từ đời thường đến môi trường học thuật hay chuyên nghiệp. Các em vận dụng mọi mặt của tiếng Anh một cách xuất sắc, với sự lưu loát và chính xác cao.', 
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
]

const character_info_1 = [
    {
        title: 'Mysteries 1',
        discription: 'Tiếng anh cho trẻ 13 tuổi',
        href: '#promo__1',
        img: '/course13_18/kid_1.png'
    },
    {
        title: 'Mysteries 2',
        discription: 'Tiếng anh cho trẻ 14 tuổi',
        href: '#promo__2',
        img: '/course13_18/kid_2.png'
    },
    {
        title: 'The Future 1',
        discription: 'Tiếng Anh cho thiếu niên 15 tuổi ',
        href: '#promo__3',
        img: '/course13_18/kid_3.png'
    },
    {
        title: 'MThe Future 2',
        discription: 'Tiếng Anh cho thiếu niên 16 tuổi',
        href: '#promo__4',
        img: '/course13_18/kid_4.png'
    }
]

const character_info_2 = [
    {
        title: 'Subscription 1',
        discription: 'Tiếng Anh cho thiếu niên 17 tuổi ',
        href: '#promo__5',
        img: '/course13_18/kid_5.png'
    },
    {
        title: 'Subscription 2',
        discription: 'Tiếng Anh cho thiếu niên 18 tuổi ',
        href: '#promo__6',
        img: '/course13_18/kid_6.png'
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
                        <h2 className={styles['page__title']}>Các bạn teen học tiếng Anh vì tương lai</h2>
                        <p className={styles['page__description']}>
                            Bước vào tuổi dậy thì với vốn tiếng Anh vững vàng giúp các bạn tuổi teen đủ tự tin xây dựng cá tính và tương lai của mình. Nhờ nắm chắc tiếng Anh, các em giao tiếp lưu loát, chuẩn và với vốn từ phong phú, giúp các em thể hiện bản thân rõ nét hơn.
                        </p>
                        <CharacterShow contents={character_info_1}  style={character_style} />
                        <CharacterShow contents={character_info_2}  style={character_style} />
                    </div>
                </section>
            </WaveSection>

            <section>
                {promo_contents.map((promo_content, index) => {
                    return ( 
                        <WaveSection direction='none'>
                            <div className={styles[`promo__block-${2 - (index + 1) % 2}`]} id={`promo__${index + 1}`}>
                                <WaveSection direction={index % 2 == 0 ? 'right' : 'left'}>
                                    <CardContent img={promo_content.img} style={promo_content.style}>
                                        <h3 className={styles['promo__grid-detail-title']}>{promo_content.content.title}</h3>
                                        <h3 className={styles['promo__grid-detail-sub-title']}>{promo_content.content.sub_title}</h3>
                                        <p className={styles['promo__grid-detail-content']}>
                                            <span className={styles['promo__grid-detail-about']}>Mục tiêu khóa học: </span>
                                            {promo_content.content.description_1}
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
                <section className={styles['page__media']}>
                    <h2 className={styles['page__title']}>Lớp Tiếng Anh cho thiếu niên 13-18 tuổi </h2>
                </section>
            </WaveSection>

            <InteractiveImg
                src="/course13_18/kid_zzz.jpeg"
                imgs={["/course13_18/kid_zzz.jpeg", "/course13_18/kid_activity.jpg", "/course13_18/kid_edu.jpg"]}
                alt="Kid and us"
                width="400"
                height="300"
            />

            
            <WaveSection>
                <section id='page__regis'>
                    <RegistrationForm bg_color="#f8dff6" />
                </section>
            </WaveSection>

            <HelpButton />
        </>
    );
};

export default Main;
