import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./Top_navigate.module.scss"
const Top_navigate = () => {
    return (
        <div className={styles.top_navigate}>
            <ul>
                <li><a href="">Bản mobile</a></li>
                <li><a href="">Giới thiệu</a></li>
                <li><a href="">Sản phẩm đã xem</a></li>
                <li><a href="">Trung tâm bảo hành</a></li>
                <li><a href="">Hệ thống 126 siêu thị</a></li>
                <li><a href="">Tuyển dụng</a></li>
                <li><a href="">Tra cứu đơn hàng</a></li>
                <li><a ><Link to={"signin"}>Đăng nhập</Link></a></li>
            </ul>
        </div >
    )
}

export default Top_navigate