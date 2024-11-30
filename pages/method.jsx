import React from 'react';
import styles from '@/styles/Page.module.css';
import NavBar from '@/components/ui/NavBar';
import WaveSection from '@/components/ui/WaveSection';
import Slideshow from '@/components/ui/SlideShow';
import CardContent from '@/components/ui/CardContent';
import RegistrationForm from '@/components/ui/RegisForm';
import HelpButton from '@/components/ui/HelpButton';
import QuestionList from '@/components/ui/QuestionList';
import CharacterShow from '@/components/ui/CharacterShow';

const big_slide_images = [
    "/method/slides/slide_1.png",
    "/method/slides/slide_2.png",
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
            effect: "scalezoom",
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
            effect: "scalezoom",
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
            effect: "scalezoom",
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
            effect: "scalezoom",
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
            effect: "scalezoom",
            width: "60vw",
            height: "25vw",
            img_pos: 'left', 
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
        }
    },
]

const method_info = [
    {
        title: 'Nghe',
        href: '#method__1',
        img: '/method/nghe.png'
    },
    {
        img: '/method/right-arrow.png'
    },
    {
        title: 'Hiểu',
        href: '#method__2',
        img: '/method/hieu.png'
    },
    {
        img: '/method/right-arrow.png'
    },
    {
        title: 'Nói',
        href: '#method__2',
        img: '/method/noi.png'
    },
    {
        img: '/method/right-arrow.png'
    },
    {
        title: 'Đọc',
        href: '#method__2',
        img: '/method/doc.png'
    },
    {
        img: '/method/right-arrow.png'
    },
    {
        title: 'Viết',
        href: '#method__2',
        img: '/method/viet.png'
    },
]

const method_style = {
    color: '#1e4b75',
    effect: 'border',
    gap: '30px',
    width: '60px', 
    height: '60px'
}

const base_info = [
    {
        href: '#',
        img: '/method/base_1.png'
    },
    {
        href: '#',
        img: '/method/base_2.png'
    },
    {
        href: '#',
        img: '/method/base_3.png'
    },
    {
        href: '#',
        img: '/method/base_4.png'
    },
]

const base_info_1 = [
    {
        href: '#',
        img: '/method/base_5.png'
    },
    {
        href: '#',
        img: '/method/base_5.png'
    },
    {
        href: '#',
        img: '/method/base_7.png'
    },
    {
        href: '#',
        img: '/method/base_8.png'
    },
]

const base_style = {
    color: 'var(--white-color)',
    effect: 'scalezoom',
    gap: '50px',
    width: '300px', 
    height: '230px'
}

const questions = [
    {
        title: 'Học tiếng Anh với phương pháp của Kids&Us diễn ra như thế nào? ',
        answer: 'Với khối lượng kiến thức vừa đủ và thú vị! Các lớp học của Kids&Us là sự kết hợp của kiến thức ngôn ngữ với các bài hát và trò chơi. Phương pháp Kids&Us được hiệu chỉnh tỉ mỉ để giúp việc học trở nên hiệu quả, năng động và đầy cảm hứng. Tất cả các hoạt động được thực hiện tại lớp học đều có mục đích giao tiếp và được thiết kế để củng cố nội dung và mục tiêu của mỗi khóa học. Trong phương pháp của chúng tôi, không có gì được thực hiện chỉ vì lợi ích riêng lẻ; mọi thứ đều có lý do!'
    },
    {
        title: 'Kids&Us có những cấp độ nào? ',
        answer: 'Tại Kids&Us, chúng tôi không phân biệt các cấp độ tiếng Anh, cũng như không có cấp độ nào khi tiếp thu tiếng mẹ đẻ. Chúng tôi sử dụng các câu chuyện và nhân vật phù hợp với từng lứa tuổi. Trong lớp học, các bé sẽ học được rằng môi trường xung quanh và những thứ chúng quen thuộc xung quanh đều có tên riêng bằng tiếng Anh. Với Linda, nhân vật dành cho bé 2 tuổi, trẻ sẽ thấy Linda ngừng mặc tã và bắt đầu tự đi vệ sinh. Tuy nhiên, đến Oliver (6 đến 7 tuổi) thì sẽ là câu chuyện khác về chiếc răng bị rụng. Điều này giúp dễ dàng khơi gợi sự quan tâm và tạo động lực cho trẻ.'
    },
    {
        title: 'Một tuần có bao nhiêu lớp học? ',
        answer: 'Từ một đến hai tuổi, bé sẽ tham gia một lớp học 45 phút mỗi tuần. Từ khi 3 tuổi cho đến khi bắt đầu biết đọc và viết, trẻ học một giờ một tuần. Và từ 8 tuổi, số giờ lên lớp mỗi tuần sẽ tăng dần lên 3 giờ một tuần, trải đều trong hai ngày. Tóm lại, đó là một thời lượng phù hợp và bền vững theo thời gian, phù hợp với lứa tuổi học sinh.'
    },
    {
        title: 'Tại sao trẻ phải nghe một đoạn âm thanh mỗi ngày? ',
        answer: 'Chúng tôi tin rằng việc tiếp xúc liên tục với ngôn ngữ là điều cần thiết cho việc học. Bằng cách nghe liên tục một đoạn âm thanh cụ thể, trẻ sẽ lưu giữ một số lượng lớn các từ và cấu trúc trong não bộ, để khi trẻ nghe thấy hoặc làm việc với chúng, trẻ sẽ dễ dàng hiểu và vận dụng hơn. Có thể nói, tầm quan trọng của kỹ năng nghe là vô cùng lớn, nó giúp trẻ quen dần với việc hiểu và phát âm tiếng Anh. Các bản nhạc này sẽ kéo dài khoảng mười phút. Trẻ có thể được nghe bất cứ lúc nào và trong bất kỳ hoạt động nào, miễn là không xem Tivi hoặc bất kỳ loại kích thích nghe nhìn nào khác có thể làm các trẻ mất tập trung. Về vấn đề này, điều quan trọng là phải tìm thời gian để cho trẻ lắng nghe hàng ngày, tích hợp thói quen này như một một hoạt động quen thuộc trong ngày (vào bữa sáng, trước khi đi ngủ, v.v.). Nếu trẻ không nghe đoạn âm thanh thì phương pháp này trở nên kém hiệu quả hơn. Điều này là do các lớp học được lên kế hoạch xoay quanh các hoạt động sử dụng từ vựng mà trẻ đã quen thuộc, vì vậy nếu trẻ không nghe đoạn âm thanh thì có nhiều khả năng chúng sẽ gặp khó khăn khi đến lớp học, và hậu quả lâu dài là trẻ sẽ mất động lực'
    },
    {
        title: 'Điều gì sẽ xảy ra nếu một đứa trẻ không nghe đoạn âm thanh mỗi ngày? ',
        answer: 'Nếu trẻ không nghe đoạn âm thanh thì phương pháp này trở nên kém hiệu quả hơn. Điều này là do các lớp học được lên kế hoạch xoay quanh các hoạt động sử dụng từ vựng mà trẻ đã quen thuộc, vì vậy nếu trẻ không nghe đoạn âm thanh thì có nhiều khả năng chúng sẽ gặp khó khăn khi đến lớp học, và hậu quả lâu dài là trẻ sẽ mất động lực'
    },
    {
        title: 'Gia đình có cần biết tiếng Anh không? ',
        answer: 'Không. Điều này là không cần thiết! Gia đình luôn là sự hỗ trợ tốt nhất cho con học tiếng Anh, bằng cách thể hiện sự quan tâm và nhiệt tình với những gì con đang học. Với sự hỗ trợ tinh thần của bạn, ba mẹ đã đóng góp rất nhiều vào sự thành công của quá trình học tập.'
    },
    {
        title: 'Ba mẹ có phải ở trong lớp học không? ',
        answer: 'Điều này chỉ cần thiết trong những năm đầu tiên của phương pháp này (1 và 2 tuổi). Sự hiện diện của ba mẹ làm cho trẻ cảm thấy an toàn và thoải mái trong môi trường mới và từ đó, trẻ bắt đầu kết nối cảm xúc với ngôn ngữ, tạo ra một mối liên kết rất đặc biệt để học tập hiệu quả hơn Khi ba mẹ ngừng tham gia lớp học cùng con, ba mẹ nên đảm bảo rằng con sẽ nghe các file âm thanh của Kids&Us ở nhà hàng ngày và thực hiện các hoạt động bổ sung mà chúng tôi đề xuất.'
    },
    {
        title: 'Trẻ có học những điều giống như ở trường không? ',
        answer: 'Tại Kids&Us, chương trình học của chúng tôi không khác với những gì trẻ học ở trường. Phương pháp của chúng tôi dựa trên sự đắm chìm hoàn toàn vào ngôn ngữ và khả năng tiếp thu ngôn ngữ toàn diện. Cấu trúc ngữ pháp và từ vựng không thể được học một cách độc lập mà phải học trong ngữ cảnh thực tế. Hơn nữa, chúng tôi tận dụng lợi thế của các lớp học nhóm nhỏ để thúc đẩy và cung cấp nhiều cơ hội hơn giao tiếp hơn.'
    },
    {
        title: 'Tại sao các em bắt đầu biết đọc và viết muộn hơn ở trường tiểu học? ',
        answer: 'Vấn đề không phải là bắt đầu muộn mà là bắt đầu khi trẻ đã thực sự sẵn sàng. Trong thực tế, với tiếng mẹ đẻ của chúng ta, chúng ta không bắt đầu nói, đọc và viết đồng thời, mà trước tiên chúng ta học nghe ngôn ngữ và sau đó mới học đọc và viết. Vì vậy, chúng tôi tin rằng việc thúc đẩy nghe và nói trong những năm đầu tiên học tiếng Anh và giới thiệu kỹ năng đọc và viết sau này sẽ trở nên tự nhiên và hiệu quả hơn.'
    },
    {
        title: 'Tại sao ba mẹ nên đăng ký cho con tham gia Kids&Us? ',
        answer: 'Bởi vì phương pháp của chúng tôi hiệu quả nên con bạn sẽ học tiếng Anh với chúng tôi, giống như 150.000 học sinh khác theo học tại 500 trường ở 9 quốc gia khác nhau. Là người đi đầu trong việc dạy tiếng Anh cho trẻ em ở Tây Ban Nha, chúng tôi tin tưởng vào sự cải tiến và đổi mới liên tục. Chúng tôi là tổ chức hàng đầu trong lĩnh vực này nhờ vào phương pháp hiệu quả đã được kiểm chứng.'
    },
]

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
                            <CharacterShow contents={method_info}  style={method_style} />
                        </WaveSection>

                    </div>
                </section>
            </WaveSection>

            <WaveSection>
                <section className={`${styles['page']} ${styles['page--red']}`}>
                    <p className={styles['page__description--pink']}>
                        Với phương pháp của Kids&Us, sự đồng hành của cha mẹ đóng vai trò rất quan trọng trong quá trình học tiếng Anh của trẻ.
                    </p>
                </section>
            </WaveSection>

            <section>
                {method_contents.map((method_content, index) => {
                    return ( 
                        <WaveSection>
                            <div className={styles[`method__block-${index + 1}`]} id={`method__${index + 1}`}>
                                <WaveSection direction={index % 2 == 0 ? 'right' : 'left'}>
                                    <CardContent img={method_content.img} style={method_content.style}>
                                        <h3 className={styles['method__grid-detail-title']}>{method_content.content.title}</h3>
                                        <h3 className={styles[`method__grid-detail-sub-title-${index + 1}`]}>{method_content.content.sub_title}</h3>
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
                <section className={`${styles['page']} ${styles['page--black']}`}>
                    <div className={styles['page__content']}>
                        <h2 className={`${styles['page__title']} ${styles['page__title--white']}`}>Phương pháp của chúng tôi</h2>

                        <WaveSection>
                            <CharacterShow contents={base_info}  style={base_style} />
                            <CharacterShow contents={base_info_1}  style={base_style} />
                        </WaveSection>

                    </div>
                </section>
            </WaveSection>
                        
            <WaveSection>
                <section id='page__regis'>
                    <RegistrationForm bg_color="#58d2dd" />
                </section>
            </WaveSection>

            <WaveSection>
                <section className={styles['page']}>
                    <div className={styles['page__content']}>
                        <h2 className={`${styles['page__title']} ${styles['page__title--black']}`}>Những câu hỏi thường gặp về <span>Kids&Us</span></h2>

                        <WaveSection>
                            <QuestionList questions={questions} />
                        </WaveSection>

                    </div>
                </section>
            </WaveSection>

            <HelpButton />
        </>
    );
};

export default Main;
