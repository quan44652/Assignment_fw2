import React from 'react'
import styles from './Footer.module.scss'
const Footer = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.list_content}>
                    <h2>Hỗ Trợ - Dịch Vụ</h2>
                    <ul className={styles.support}>
                        <li><a >Mua hàng trả góp</a></li>
                        <li><a >Hướng dẫn đặt hàng và thanh toán</a></li>
                        <li><a >Tra cứu đơn hàng</a></li>
                        <li><a >Chính sách bảo hành</a></li>
                        <li><a >Phạm vi, điều khoản gói bảo hành mở rộng</a></li>
                        <li><a >Chính sách bảo mật</a></li>
                        <li><a >Chính sách giải quyết khiếu nại</a></li>
                        <li><a >Điều khoản mua bán hàng hóa</a></li>
                        <li><a >Câu hỏi thường gặp</a></li>
                    </ul>
                </div>
                <div className={styles.list_content}>
                    <h2>Thông Tin Liên Hệ</h2>
                    <ul className={styles.contact}>
                        <li><a >Bán hàng Online</a></li>
                        <li><a >Chăm sóc Khách Hàng</a></li>
                        <li><a >Hỗ Trợ Kỹ thuật</a></li>
                        <li><a >Hỗ trợ Bảo hành &amp; Sửa chữa</a></li>
                        <li><a >Liên hệ khối văn phòng</a></li>
                        <li><a >Hợp tác kinh doanh</a></li>
                        <li><a >Trung tâm bảo hành</a></li>
                    </ul>
                </div>
                <div className={styles.list_content}>
                    <h2>Hệ thống 126 siêu thị trên toàn quốc
                    </h2>
                    <ul>
                        <li><a >Danh sách 126 siêu thị trên toàn quốc</a></li>
                    </ul>
                </div>
                <div className={styles.list_content}>
                    <h2>Tổng đài</h2>
                    <ul>
                        <li><button>19008198</button></li>
                    </ul>
                </div>
                <div className={styles.list_content}>
                    <h2>Thanh toán miễn phí</h2>
                    <ul className={styles.list_content__img}>
                        <li><img src="https://hoanghamobile.com/Content/web/img/logo-visa.png" alt="" /></li>
                        <li><img src="https://hoanghamobile.com/Content/web/img/logo-master.png" alt="" /></li>
                        <li><img src="https://hoanghamobile.com/Content/web/img/logo-jcb.png" alt="" /></li>
                        <li><img src="https://hoanghamobile.com/Content/web/img/logo-samsungpay.png" alt="" /></li>
                    </ul>
                </div>
                <div className={styles.list_content}>
                    <h2>Hình thức vận chuyển</h2>
                    <ul className={styles.list_content__img}>
                        <li><img src="https://hoanghamobile.com/Content/web/img/nhattin.jpg" alt="" /></li>
                        <li><img src="https://hoanghamobile.com/Content/web/img/vnpost.jpg" alt="" /></li>
                    </ul>
                    <div className={styles.list_content__check}>
                        <img src="https://hoanghamobile.com/Content/web/img/logo-bct.png" alt="" />
                    </div>
                </div>
            </div>
            <div className={styles.infomation}>
                <h4>© 2020. CÔNG TY CỔ PHẦN XÂY DỰNG VÀ ĐẦU TƯ THƯƠNG MẠI HOÀNG HÀ. MST:
                    0106713191. (Đăng ký lần đầu: Ngày 15 tháng 12 năm 2014, Đăng ký
                    thay đổi ngày 24/11/2022)</h4>
                <h6>GP số 426/GP-TTĐT do sở TTTT Hà Nội cấp ngày 22/01/2021</h6>
                <p>Địa chỉ: Số 89 Đường Tam Trinh, Phường Mai Động, Quận Hoàng Mai,
                    Thành Phố Hà Nội, Việt Nam. Điện thoại: 1900.2091. Chịu trách nhiệm
                    nội dung: <span>Hoàng Ngọc Chiến</span> </p>
            </div>
        </div>
    )
}

export default Footer