import React from 'react';
import styles from '@/styles/Funweek.module.css';
import NavBar from '@/components/ui/NavBar';
import WaveSection from '@/components/ui/WaveSection';
import FunWeekForm from '@/components/ui/FunWeekForm';
import HelpButton from '@/components/ui/HelpButton';

const Main = () => {
    return (
        <>
            <NavBar />
            <WaveSection>
                <img src='/activity_fw/big_kid.jpg' className={styles['fw__bigimage']}/>
            </WaveSection>

            <WaveSection>
                <div className={styles['fw__intro']}>
                    <div className={styles['intro']}>
                        <img src="/activity_fw/small_kid.png"/>
                        <div className={styles['intro__overlay']}>
                            <h1>Fun Week là gì?</h1>
                            <p>Fun Weeks là trại hè độc quyền của Kids&Us được tổ chức xuyên suốt tháng 6, 7 và 8. Với đa dạng hoạt động được thiết kế dựa trên những chất liệu trong cuộc sống của trẻ, Fun Weeks sẽ đem đến cho các con một thế giới học tiếng Anh tràn ngập màu sắc, niềm vui và sự bổ ích.</p>
                            <a href="#page__regis">Đăng ký ngay</a>
                        </div>
                    </div>
                    <img className={styles["intro__overlay-img"]} src="/activity_fw/grid_activity.png"/>
                </div>
            </WaveSection>

            <WaveSection>
                <div className={styles['fw__info']}>
                    <h1>Thông tin chương trình</h1>
                    <ul>
                        <li>Dành cho trẻ từ 2 tuổi</li>
                        <li>Thời gian hội hè: Từ 10/6 - 23/8</li>
                        <li>Các lớp học được xếp theo từng nhóm tuổi: 2 - 3 tuổi, 4 - 6 tuổi, 7 - 9 tuổi</li>
                        <li>Sĩ số: Tối đa 10 trẻ/lớp</li>
                    </ul>
                </div>
                <WaveSection>
                        <div className={styles['fw__info-img']}>
                            <img src="/activity_fw/kid_learning.png" />
                        </div>
                </WaveSection>
            </WaveSection>
            
            <div className={styles['fw__clear']}></div>

            <WaveSection>
                <div className={styles["fw__grid"]}>
                    <h1>Tại sao ba mẹ nên đăng ký Fun Weeks cho con?</h1>
                    <div className={styles["grid"]}>
                        <div className={styles["grid__item"]}>
                            <img src="/activity_fw/reason_1.jpg" />
                            <p>Trẻ được học tiếng Anh theo phương pháp thuận tự nhiên. Phương pháp được thiết kế dựa trên cơ chế tiếp thu ngôn ngữ đầu đời của một đứa trẻ, nên khả năng thẩm thấu tiếng Anh của trẻ sẽ đạt mức tối đa</p>
                        </div>
                        <div className={styles["grid__item"]}>
                            <img src="/activity_fw/reason_2.jpg" />
                            <p>Đa dạng hoạt động vui chơi bổ ích và giá trị được lồng ghép vào chương trình học, giúp khơi dậy niềm cảm hứng học tiếng Anh bất tận</p>
                        </div>
                        <div className={styles["grid__item"]}>
                            <img src="/activity_fw/reason_3.jpg" />
                            <p>Mọi chất liệu trong cuộc sống thường nhật của trẻ sẽ được dùng để làm chất liệu bài giảng nhằm kích thích óc quan sát và tạo cho trẻ sự thân thuộc và gần gũi</p>
                        </div>
                    </div>
                    <div className={styles["grid__submit"]}>
                        <a href="#page__regis" className={styles["submit__button"]}>Đăng ký ngay</a>
                    </div>
                </div>
            </WaveSection>

            <WaveSection>
                <div className={`${styles["fw__grid"]} ${styles["fw__grid--white"]}`}>
                    <h1>Chia sẻ của phụ huynh về Kids&US</h1>
                    <div className={styles["grid"]}>
                        <div className={styles["grid__item"]}>
                            <img src="/activity_fw/parent_1.png" />
                            <h3>Ba Thuần - <span>Giảng viên</span></h3>
                            <p>Mình là người thích những điều sáng tạo, mới mẻ và khoa học. Và phương pháp của Kids&Us đáp ứng được những điều này.</p>
                        </div>
                        <div className={styles["grid__item"]}>
                            <img src="/activity_fw/parent_2.png" />
                            <h3>Mẹ Uyên - <span>Giảng viên</span></h3>
                            <p>Chỉ với 2 tháng học, bé nhỏ 3 tuổi nhà mình nhưng đã có thể nói tròn câu, và thậm chí đặt câu hỏi bằng tiếng Anh để tương tác với mình.</p>
                        </div>
                        <div className={styles["grid__item"]}>
                            <img src="/activity_fw/parent_3.png" />
                            <h3>Mẹ Nhung - <span>Bác sĩ</span></h3>
                            <p>Dù chỉ mới 2 tuổi, nhưng bé đã bắt đầu sử dụng tiếng Anh ngay cả trong những tình huống trong cuộc sống. Ví dụ khi dọn dẹp đồ chơi, bé sẽ nói: Clean up, clean up.</p>
                        </div>
                    </div>
                </div>
            </WaveSection>

            <WaveSection>
                <div className={styles['fw__register']} id="page__regis">
                    <div className={styles['register__form']}>
                        <div className={styles['form__header']}>
                            <img src="/activity_fw/register_kid.png"/>
                            <div className={styles["form__title"]}>
                                <img src="/activity_fw/register_line.png" />
                                <p>Đăng ký ngay để nhận ưu đãi hấp dẫn!</p>
                            </div>
                        </div>
                        <FunWeekForm />
                    </div> 
                </div>
            </WaveSection>

            <HelpButton />
        </>
    );
};

export default Main;
