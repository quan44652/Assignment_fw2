import React from 'react'
import styles from "./Cart.module.scss";
import { LeftOutlined, CheckCircleTwoTone } from '@ant-design/icons';
const Cart = () => {
    return (
        <div>
            {/* topnavigate */}
            <div className={styles.wrapper}>
                <div className={styles.back}>
                    <a ><span><LeftOutlined /></span>
                        Quay lại</a>
                </div>
                <div className={styles.cart_layout}>
                    <div className={styles.cart_info}>
                        <div className={styles.cart_icon}>
                            <CheckCircleTwoTone />
                            <span>Giỏ hàng</span>
                        </div>
                        <div className={styles.cart_items}>
                            <div className={styles.item}>
                                <div className={styles.item_img}>
                                    <img src="{{item.image}}" alt="" />
                                    <h4>Name</h4>
                                    <h6>Giá 1 | Giá 2 ₫</h6>
                                    <span>số lượng</span>
                                    <input defaultValue={2} min={0} type="number" />
                                </div>
                                <ul className={styles.item_info}>
                                    <li><span>KM1</span><p>promotionItem</p></li>
                                </ul>
                            </div>
                        </div>
                        <div className={styles.cart_tatol}>
                            <h2>Tổng giá trị: 146,950,000 ₫</h2>
                            <h2>Giảm giá: 0 ₫</h2>
                            <h2>Tổng thanh toán: <span>146,950,000 ₫</span></h2>
                        </div>
                    </div>
                    <div className={styles.cart_form}>
                        <h2 className={styles.title}>Thông tin đặt hàng</h2>
                        <p className={styles.warning}>Bạn cần nhập đầy đủ các trường thông tin có dấu *
                        </p>
                        <form >
                            <div className={styles.form_control}>
                                <input type="text" placeholder="Họ và tên *" />
                            </div>
                            <div className={styles.form_control}>
                                <input type="text" placeholder="Số điện thoại *" />
                            </div>
                            <div className={styles.form_control}>
                                <input type="text" placeholder="Email *" />
                            </div>
                            <div className={styles.form_control}>
                                <input type="text" placeholder="Địa chỉ nhận hàng *" />
                            </div>
                            <button className={styles.btn}>Xác nhận và đặt hàng</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart
