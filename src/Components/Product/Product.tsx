import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { IProduct } from '../../interfaces/product'

import styles from "./Product.module.scss"
interface IProps {
    products: IProduct[],

}
const Product = (props: IProps) => {
    const [data, setData] = useState<IProduct[]>([]);
    useEffect(() => {
        setData(props.products)
    }, [props])
    return (

        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h4 className={styles.title} >ĐIỆN THOẠI NỔI BẬT</h4>
                <div className={styles.list_products}>
                    {
                        data.map(product => {
                            return (
                                <div className={styles.list_products__item}>
                                    <div className={styles.wrapper_product}>
                                        <div className={styles.sticker}>
                                            <img src={product.sticker} />
                                        </div>
                                        <div className={styles.avatar}>
                                            <img src={product.image} />
                                        </div>
                                        <Link to={`/products/${product._id}`} className={styles.name}>{product.name}</Link>
                                        <p className={styles.price}>{product.priceNew} ₫ <span>{product.priceOld} ₫</span></p>
                                        <div className={styles.note}>
                                            <p><span>KM</span>
                                                Giảm thêm tới 800.000đ khi mở thẻ t... <strong>
                                                    và 9 km khác</strong></p>
                                        </div>
                                    </div>
                                    <div className={styles.promote}>
                                        <a>
                                            <ul>
                                                <li
                                                ><p

                                                    className={styles.note}><span>KM</span>
                                                        aaaaaaaaa</p></li>
                                            </ul>
                                        </a>
                                    </div>
                                </div>
                            )

                        })
                    }
                    {/* end mot san pham */}
                    {/* 
                    <div className={styles.list_products__item}>
                        <div className={styles.wrapper_product}>
                            <div className={styles.sticker}>
                                <img src="https://hoanghamobile.com/Content/web/sticker/apple.png" />
                            </div>
                            <div className={styles.avatar}>
                                <img src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/02/01/1111.png" />
                            </div>
                            <a className={styles.name} >iPhone 11 (64GB) - Chính hãng VN/A</a>
                            <p className={styles.price}>10,390,000 ₫ <span>19,990,000 ₫</span></p>
                            <div className={styles.note}>
                                <p><span>KM</span>
                                    Giảm thêm tới 800.000đ khi mở thẻ t... <strong>
                                        và 9 km khác</strong></p>
                            </div>
                        </div>
                        <div className={styles.promote}>
                            <a>
                                <ul>
                                    <li><p className={styles.note}>765<span>KM</span>
                                    </p></li>
                                </ul>
                            </a>
                        </div>
                    </div> */}
                    {/* end mot san pham */}

                    {/* <div className={styles.list_products__item}>
                        <div className={styles.wrapper_product}>
                            <div className={styles.sticker}>
                                <img src="https://hoanghamobile.com/Content/web/sticker/apple.png" />
                            </div>
                            <div className={styles.avatar}>
                                <img src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/02/01/1111.png" />
                            </div>
                            <a className={styles.name} >iPhone 11 (64GB) - Chính hãng VN/A</a>
                            <p className={styles.price}>10,390,000 ₫ <span>19,990,000 ₫</span></p>
                            <div className={styles.note}>
                                <p><span>KM</span>
                                    Giảm thêm tới 800.000đ khi mở thẻ t... <strong>
                                        và 9 km khác</strong></p>
                            </div>
                        </div>
                        <div className={styles.promote}>
                            <a>
                                <ul>
                                    <li><p className={styles.note}>765<span>KM</span>
                                    </p></li>
                                </ul>
                            </a>
                        </div>
                    </div> */}
                    {/* end mot san pham */}

                    {/* <div className={styles.list_products__item}>
                        <div className={styles.wrapper_product}>
                            <div className={styles.sticker}>
                                <img src="https://hoanghamobile.com/Content/web/sticker/apple.png" />
                            </div>
                            <div className={styles.avatar}>
                                <img src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/02/01/1111.png" />
                            </div>
                            <a className={styles.name} >iPhone 11 (64GB) - Chính hãng VN/A</a>
                            <p className={styles.price}>10,390,000 ₫ <span>19,990,000 ₫</span></p>
                            <div className={styles.note}>
                                <p><span>KM</span>
                                    Giảm thêm tới 800.000đ khi mở thẻ t... <strong>
                                        và 9 km khác</strong></p>
                            </div>
                        </div>
                        <div className={styles.promote}>
                            <a>
                                <ul>
                                    <li><p className={styles.note}>765<span>KM</span>
                                    </p></li>
                                </ul>
                            </a>
                        </div>
                    </div> */}
                    {/* end mot san pham */}

                    {/* <div className={styles.list_products__item}>
                        <div className={styles.wrapper_product}>
                            <div className={styles.sticker}>
                                <img src="https://hoanghamobile.com/Content/web/sticker/apple.png" />
                            </div>
                            <div className={styles.avatar}>
                                <img src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/02/01/1111.png" />
                            </div>
                            <a className={styles.name} >iPhone 11 (64GB) - Chính hãng VN/A</a>
                            <p className={styles.price}>10,390,000 ₫ <span>19,990,000 ₫</span></p>
                            <div className={styles.note}>
                                <p><span>KM</span>
                                    Giảm thêm tới 800.000đ khi mở thẻ t... <strong>
                                        và 9 km khác</strong></p>
                            </div>
                        </div>
                        <div className={styles.promote}>
                            <a>
                                <ul>
                                    <li><p className={styles.note}>765<span>KM</span>
                                    </p></li>
                                </ul>
                            </a>
                        </div>
                    </div> */}
                    {/* end mot san pham */}

                    {/* <div className={styles.list_products__item}>
                        <div className={styles.wrapper_product}>
                            <div className={styles.sticker}>
                                <img src="https://hoanghamobile.com/Content/web/sticker/apple.png" />
                            </div>
                            <div className={styles.avatar}>
                                <img src="https://cdn.hoanghamobile.com/i/productlist/ts/Uploads/2023/02/01/1111.png" />
                            </div>
                            <a className={styles.name} >iPhone 11 (64GB) - Chính hãng VN/A</a>
                            <p className={styles.price}>10,390,000 ₫ <span>19,990,000 ₫</span></p>
                            <div className={styles.note}>
                                <p><span>KM</span>
                                    Giảm thêm tới 800.000đ khi mở thẻ t... <strong>
                                        và 9 km khác</strong></p>
                            </div>
                        </div>
                        <div className={styles.promote}>
                            <a>
                                <ul>
                                    <li><p className={styles.note}>765<span>KM</span>
                                    </p></li>
                                </ul>
                            </a>
                        </div>
                    </div> */}
                    {/* end mot san pham */}
                </div>
            </div>
        </div >
    )
}

export default Product