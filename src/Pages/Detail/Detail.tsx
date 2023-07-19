import React from 'react'
import { useParams } from 'react-router-dom'
import { IProduct } from '../../interfaces/product'
import styles from "./Detail.module.scss"
type IProps = {
    products: IProduct[]
}
const Detail = (props: IProps) => {
    const { id } = useParams();
    const currentProduct = props.products.find(item => item._id == String(id))
    return (
        <body>
            <div className={styles.name_detailProduct}>
                <h1>{currentProduct?.name}</h1>
            </div>

            <section className={styles.detailProduct}>
                <div className={styles.detailProduct__left}>
                    <div className={styles.big_img}>
                        <img src={currentProduct?.image} />
                    </div>
                    <div className={styles.images}>
                        <div className={styles.small_img}>
                            <img src="https://cdn.hoanghamobile.com/i/productlist/dst/Uploads/2022/09/08/44444.png" />
                        </div>
                        <div className={styles.small_img}>
                            <img src="https://cdn.hoanghamobile.com/i/productlist/dst/Uploads/2022/09/08/33333.png" />
                        </div>
                        <div className={styles.small_img}>
                            <img src="https://cdn.hoanghamobile.com/i/productlist/dst/Uploads/2022/09/08/222222.png" />
                        </div>
                        <div className={styles.small_img}>
                            <img src="https://cdn.hoanghamobile.com/i/productlist/dst/Uploads/2022/09/08/1111.png" />
                        </div>
                    </div>
                </div>
                <div className={styles.detailProduct__right}>
                    <div className={styles.productDetail__price}>
                        <strong>{currentProduct?.priceNew.toLocaleString("vi-VN", {
                        })}</strong>
                        <i className={styles.old_price}>{currentProduct?.priceOld.toLocaleString("vi-VN", {
                        })} ₫</i>
                        <i>| Giá đã bao gồm 10% VAT</i>
                    </div>
                    <div className={styles.productDetail__freeship}>
                        <p>MIỄN PHÍ VẬN CHUYỂN TOÀN QUỐC</p>
                    </div>
                    <div className={styles.productDetail__btn__buy}>
                        <div className={`${styles.btn_red__buy} ${styles.btn__buy}`}>
                            <strong className={styles.productDetail__btn__title}>Mua ngay</strong><br />
                            <span>Giao hàng tận nhà(COD)</span><br />
                            <span>Hoặc nhận tại cửa hàng</span>
                        </div>
                        <div className={`${styles.btn_green__buy} ${styles.btn__buy}`}>
                            <strong className={styles.productDetail__btn__title}>Trả góp</strong><br />
                            <span>Công ty Tài chính</span><br />
                            <span>Hoặc 0% qua thẻ tín dụng</span>
                        </div>
                        <div className={`${styles.btn_yellow__buy} ${styles.btn__buy}`}>
                            <svg xmlns="http://www.w3.org/2000/svg" width={30} height={30} fill="currentColor" className={`${styles.bi} ${styles.bi_cart3}`} viewBox="0 0 16 16">
                                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                            </svg><br />
                            <span>Thêm vào giỏ hàng</span>
                        </div>
                    </div>
                    <div className={styles.detailProduct__endow}>
                        <strong>Ưu đãi thanh toán</strong><br />
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: '#009981' }} width={16} height={16} fill="currentColor" className={`${styles.bi} ${styles.bi_check_lg}`} viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                            </svg>
                            <span>Ưu đãi đến 300.000đ khi mở Ví hoặc thanh toán qua VNPAY
                                Mở thẻ tín dụng VIB</span><br />
                            <svg xmlns="http://www.w3.org/2000/svg" style={{ color: '#009981' }} width={16} height={16} fill="currentColor" className={`${styles.bi} ${styles.bi_check_lg}`} viewBox="0 0 16 16">
                                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
                            </svg>
                            <span>Duyệt nhanh chỉ 15 phút, Liên hệ cửa hàng hoặc 1900.2091 để được hướng dẫn.</span><br />
                        </div>
                    </div>
                </div>
            </section>

            <section className={styles.detailProduct__parameter}>
                <div className={styles.detailProduct__parameter__left}>
                    <span>Tất cả iPhone chính hãng VN/A được phân phối tại Hoàng Hà
                        Mobile đều được nhập trực tiếp từ Công ty
                        TNHH Apple Việt Nam.
                        HoangHa Mobile là nhà bán lẻ ủy quyền chính thức của Apple tại
                        Việt Nam.</span><br /><br />
                    <img className={styles.diachi} src="../images/diachi.webp" alt="" />
                    <strong>Mua điện thoại iPhone 11 chính hãng, giá rẻ tại Hoàng Hà
                        Mobile</strong><br /><br />
                    <span>iPhone 11 - siêu phẩm được mong chờ nhất năm 2019 của Apple
                        chuẩn bị ra mắt. Với những cải tiến vượt
                        trội, phiên bản
                        iPhone mới nhất hứa hẹn sẽ làm bùng nổ thị trường công nghệ.</span><br /><br />
                    <strong>Thiết kế cực kỳ ấn tượng với màn hình có độ phân giải cao</strong>
                    <img className={styles.diachi} src="../images/morePhone.webp" alt="" />
                </div>
                <div className={styles.detailProduct__parameter__right}>
                    <strong>Thông số kỹ thuật iPhone 11 (64GB) - Chính hãng VN/A</strong>
                    <img className={styles.parammeter__right__img} src="../images/sp1.webp" alt="" />
                    <div className={styles.detail__parameter}>
                        <a href="#"> <strong>Cấu hình chi tiết</strong> </a>
                    </div>
                    <br />
                    <strong>Công nghệ màn hình ::</strong><span>IPS LCD</span><br /><br />
                    <strong>Độ phân giải::</strong><span>828 x 1792 Pixels</span><br /><br />
                    <strong>Màn hình rộng::</strong><span>6.1"</span><br /><br />
                    <strong>Độ phân giải:</strong><span>2 camera 12 MP, 12 MP</span><br /><br />
                    <strong>Hệ điều hành::</strong><span>iOS 15</span><br /><br />
                    <strong>Chip xử lý (CPU):</strong><span>Apple A13 Bionic 6 nhân</span><br /><br />
                </div>
            </section>
        </body >

    )
}

export default Detail