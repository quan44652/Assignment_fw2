import React, { ChangeEvent, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { Link } from "react-router-dom";
import { AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { FaShippingFast } from "react-icons/fa";
import axios from "axios";
import { IProduct } from "../../Common";

const Header = ({ products }: any) => {
  const [searchValue, setSearchValue] = useState<string>("");
  const [productSearch, setProductSearch] = useState<IProduct[]>([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const valueInput = e.target.value;
    const resultProduct: IProduct[] = products.filter((item: IProduct) =>
      item.name
        .toLowerCase()
        .includes(valueInput == "" ? null : valueInput.toLowerCase())
    );
    setProductSearch(resultProduct);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className="logo">
          <a href="/">
            <img src="https://hoanghamobile.com/Content/web/img/logo-text.png" />
          </a>
        </div>
        <div className={styles.box_serach}>
          <form className={styles.form_search}>
            <input
              placeholder="Hôm nay bạn cần gì?"
              onChange={(e) => handleChange(e)}
              type="text"
              name="seach"
            />
            <button className={styles.btn_icon}>
              <AiOutlineSearch />
            </button>
          </form>
          {productSearch.length > 0 && (
            <div className={styles.search_result}>
              {productSearch.map((item: IProduct, index: number) => (
                <Link key={index} to="/" className={styles.search_item}>
                  <div className={styles.avata}>
                    <img src={item.image} />
                  </div>
                  <div className={styles.info}>
                    <h4>{item.name}</h4>
                    <span>{item.priceNew.toLocaleString()} ₫</span>
                  </div>
                </Link>
              ))}
              <p className={styles.search_name}>
                Hiển thị kết quả tìm kiếm cho <strong>{searchValue}</strong>
              </p>
            </div>
          )}
        </div>

        <div className={styles.order_tool}>
          <div className={styles.check_order}>
            <span>
              <FaShippingFast />
            </span>
            <h4>Kiểm tra đơn hàng</h4>
          </div>
          <a href="/cart" className={styles.total_order}>
            <span>
              {" "}
              <AiOutlineShoppingCart />
            </span>
            <h4>0</h4>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
