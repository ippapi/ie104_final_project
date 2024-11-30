import React from 'react';
import styles from '@/styles/Page.module.css';
import NavBar from '@/components/ui/NavBar';
import WaveSection from '@/components/ui/WaveSection';
import CardContent from '@/components/ui/CardContent';
import RegistrationForm from '@/components/ui/RegisForm';
import HelpButton from '@/components/ui/HelpButton';

const trial_style = {
    effect: "float",
    width: "70vw",
    height: "20vw",
    img_pos: 'left', 
    background: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
}

const trial_contents = [
    {
        img: '/trial/kid_2.png',
        content: {
            title: 'Trình độ Babies',
            sub_title: 'Từ 1 – 2 tuổi',
            content: 'Tham gia buổi học trải nghiệm ở các lớp học Babies của chúng tôi để có kinh nghiệm về phương pháp này. Tại Kids&Us, trẻ lớn lên cùng tiếng Anh.'
        },
        styles: {
            effect: "float",
            width: "60vw",
            height: "25vw",
            img_pos: 'left', 
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
        },
    },
    {
        img: '/trial/kid_3.png',
        content: {
            title: 'Trình độ Kids',
            sub_title: 'Từ 3 – 8 tuổi',
            content: 'TTham gia buổi dạy thử ở các lớp học Kids để bạn có thể thấy những lợi ích mà phương pháp này đem lại. Tại Kids&Us, trẻ học tiếng Anh giống như cách học ngôn ngữ mẹ đẻ.'
        },
        styles: {
            effect: "float",
            width: "60vw",
            height: "25vw",
            img_pos: 'right', 
            background: 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0))',
        },
    },
]

const base_contents = [
    { content: 'Nguyễn Thị Thập', description: '47-49 Nguyễn Thị Thập, KDC Him Lam, Quận 7'},
    { content: 'Cityland Park Hills', description: '3 Đường số 3, Phường 10, Quận Gò Vấp'},
    { content: 'Cao Đức Lân', description: '126 Cao Đức Lân, An Phú, Quận 2'},
    { content: 'Sư Vạn Hạnh', description: '770 Sư Vạn Hạnh, Phường 12, Quận 10'},
    { content: 'Lê Văn Việt', description: '695 Lê Văn Việt, TP.Thủ Đức'},
    { content: 'Tên lửa', description: '29-31 Tên Lửa, Phường Bình Trị Đông B, Quận Bình Tân'},
]


const Main = () => {
    return (
        <>
            <NavBar />
            <WaveSection>
                <section className={`${styles['page']} ${styles['page--gradient1']}`}>
                    <div className={styles['page__content']}>
                        <img src='/logo.png' className={styles['trial__image']}/>

                        <CardContent img='/trial/kid_1.png' style={trial_style}>
                            <h3 className={styles['trial__grid-detail-title']}>Cùng trải nghiệm Demo Day miễn phí</h3>
                            <p className={styles['trial__grid-detail-content']}>
                                (*) Demo Day: Lớp học trải nghiệm phương pháp học tiếng Anh tự nhiên cho trẻ từ 1 - 7 tuổi
                            </p>
                            <a href='#page__regis' className={styles['trial__grid-detail-link']}>Đăng ký ngay</a>
                        </CardContent>
                    </div>
                </section>
            </WaveSection>

            <WaveSection>
                <section className={styles['page']}>
                    <div className={styles['page__content']}>
                        <h2 className={styles['page__title']}>Phương pháp học tiếng Anh tự nhiên</h2>
                        <p className={`${styles['page__description']} ${styles['page__description--trial']}`}>
                            Phương pháp này được xây dựng dựa trên quá trình tiếp thu ngôn ngữ đầu đời của một đứa trẻ, diễn ra trình tự: Nghe - Hiểu - Nói - Đọc - Viết.
                        </p>
                        <h2 className={`${styles['page__title']} ${styles['page__title--black']}`}>Hoạt động phù hợp cho mọi lứa tuổi</h2>
                    </div>
                </section>
            </WaveSection>

            {
                trial_contents.map((trial_content, index) => {
                    return (
                        <WaveSection>
                            <section className={`${styles['page']} ${styles[`page--gradient${2 - index}`]}`}>
                                <div className={styles['page__content']}>
                                    <CardContent img={trial_content.img} style={trial_content.styles}>
                                        <div className={styles['trial__grid']}>
                                            <h3 className={styles['trial__grid-detail-title']}>{trial_content.content.title}</h3>
                                            <h3 className={styles['trial__grid-detail-sub-title']}>{trial_content.content.sub_title}</h3>
                                            <p className={styles['trial__grid-detail-content']}>
                                                {trial_content.content.content}
                                            </p>
                                        </div>
                                    </CardContent>
                                </div>
                            </section>
                        </WaveSection>
                    )
                })
            }

            <WaveSection>
                <section className={styles['page']}>
                    <div className={styles['page__content']}>
                        <h2 className={`${styles['page__title']} ${styles['page__title--black']}`}>Các cơ sở Kids&Us tại TP.HCM</h2>
                        <div className={styles['page__grid']}>
                        {
                            base_contents.map((base_content, index) => {
                                return (<div>
                                        <h2 className={styles['base__title']}>Cơ sở <span>{index + 1}</span></h2>
                                        <h2 className={styles['base__sub-title']}>{base_content.content}</h2>
                                        <p className=''>
                                            {base_content.description}
                                        </p>
                                </div>);
                            }) 
                        }
                        </div>
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
