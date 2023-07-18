import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ICategory } from '../../interfaces/category';
import styles from './Category.module.scss'
// import { LaptopOutlined } from "@ant-design/icons"
interface IProps {
    categories: ICategory[],

}
const Category = (props: IProps) => {
    const [data, setData] = useState<ICategory[]>([]);
    useEffect(() => {
        setData(props.categories)
    }, [props])
    return (
        <div className={styles.wrapper}>

            <ul className={styles.container}>
                {
                    data.map(category => {

                        return (

                            < li >
                                <a>
                                    <span className={styles.icon}>

                                        <img src={category.image} />
                                    </span>
                                    <h6>{category.name}</h6>
                                </a>
                            </li>
                        )
                    })
                }
                {/* end */}

                {/* <li>
                    <a>
                        <span className={styles.icon}>
                            <img src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-watch-icon-png-image_696346.jpg" />
                        </span>
                        <h6>Đồng hồ</h6>
                    </a>
                </li> */}
                {/* end */}

                {/* <li>
                    <a>
                        <span className={styles.icon}>
                            <img src="https://www.pngkit.com/png/full/45-453223_open-laptop-icon-white-png.png" />
                        </span>
                        <h6>Laptop</h6>
                    </a>
                </li> */}
                {/* end */}
            </ul>
        </div >
    )
}

export default Category