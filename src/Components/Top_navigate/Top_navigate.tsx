import React from "react";
import { Link } from "react-router-dom";
import styles from "./Top_navigate.module.scss";
const Top_navigate = () => {
  return (
    <div className={styles.top_navigate}>
      <ul>
        <li>
          <Link to="">Bản mobile</Link>
        </li>
        <li>
          <Link to="">Giới thiệu</Link>
        </li>
        <li>
          <Link to="">Sản phẩm đã xem</Link>
        </li>
        <li>
          <Link to="">Trung tâm bảo hành</Link>
        </li>
        <li>
          <Link to="">Hệ thống 126 siêu thị</Link>
        </li>
        <li>
          <Link to="">Tuyển dụng</Link>
        </li>
        <li>
          <Link to="">Tra cứu đơn hàng</Link>
        </li>
        <li>
          <Link to={"signin"}>Đăng nhập</Link>
        </li>
      </ul>
    </div>
  );
};

export default Top_navigate;
