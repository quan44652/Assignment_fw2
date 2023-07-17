import React from 'react'
import styles from './Category.module.scss'
// import { LaptopOutlined } from "@ant-design/icons"
const Category = () => {
    return (
        <div className={styles.wrapper}>
            <ul className={styles.container}>
                <li>
                    <a>
                        <span className={styles.icon}>

                            <img src="https://freepngimg.com/save/68671-android-white-iphone-telephone-free-transparent-image-hq/1258x944" />
                        </span>
                        <h6>Điện thoại</h6>
                    </a>
                </li>
                {/* end */}

                <li>
                    <a>
                        <span className={styles.icon}>
                            <img src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-watch-icon-png-image_696346.jpg" />
                        </span>
                        <h6>Đồng hồ</h6>
                    </a>
                </li>
                {/* end */}

                <li>
                    <a>
                        <span className={styles.icon}>
                            <img src="https://www.pngkit.com/png/full/45-453223_open-laptop-icon-white-png.png" />
                        </span>
                        <h6>Laptop</h6>
                    </a>
                </li>
                {/* end */}
            </ul>
        </div>
    )
}

export default Category