import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Product.module.scss";
import { IProduct } from "../../Common";
interface IProps {
  products: IProduct[];
}
const Product = (props: IProps) => {
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    setData(props.products);
  }, [props]);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h4 className={styles.title}>ĐIỆN THOẠI NỔI BẬT</h4>
        <div className={styles.list_products}>
          {data.map((product) => {
            return (
              <div key={product._id} className={styles.list_products__item}>
                <div className={styles.wrapper_product}>
                  <div className={styles.sticker}>
                    <img src={product.sticker} />
                  </div>
                  <div className={styles.avatar}>
                    <img src={product.image} />
                  </div>
                  <Link to={`/products/${product._id}`} className={styles.name}>
                    {product.name}
                  </Link>
                  <p className={styles.price}>
                    {product.priceNew.toLocaleString()} ₫{" "}
                    <span>{product.priceOld.toLocaleString()} ₫</span>
                  </p>
                  <div className={styles.note}>
                    <p>
                      <span>KM</span>
                      Giảm thêm tới 800.000đ khi mở thẻ t...{" "}
                      <strong>và 9 km khác</strong>
                    </p>
                  </div>
                </div>
                <div className={styles.promote}>
                  <Link to={`/products/${product._id}`}>
                    <ul>
                      <li>
                        <p className={styles.note}>
                          <span>KM</span>
                          Ưu đãi đến 300.000đ khi mở Ví hoặc thanh toán qua
                          VNPAY
                        </p>
                      </li>

                      <li>
                        <p className={styles.note}>
                          <span>KM</span>
                          Mở thẻ tín dụng VIB - Ưu đãi 250.000đ/thẻ thành công
                        </p>
                      </li>

                      <li>
                        <p className={styles.note}>
                          <span>KM</span>
                          Giảm thêm tới 800.000đ khi mở thẻ tín dụng TPBank EVO
                          - Duyệt nhanh chỉ 15 phút, Liên hệ cửa hàng hoặc
                          1900.2091 để được hướng dẫn.
                        </p>
                      </li>
                    </ul>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;
