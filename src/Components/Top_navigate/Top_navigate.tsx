/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Top_navigate.module.scss";

const Top_navigate = () => {
  const user = JSON.parse(localStorage.getItem("user")!);
  const handleLogout = () => {
    localStorage.clear();
    // Redirect to the home page or any other desired page after logout
    window.location.href = '/';
  };
  return (
    <div className={styles.top_navigate}>
      <ul>
        <li>
          <a href="">Bản mobile</a>
        </li>
        <li>
          <a href="">Giới thiệu</a>
        </li>
        <li>
          <a href="">Sản phẩm đã xem</a>
        </li>
        <li>
          <a href="">Trung tâm bảo hành</a>
        </li>
        <li>
          <a href="">Hệ thống 126 siêu thị</a>
        </li>
        <li>
          <a href="">Tuyển dụng</a>
        </li>
        <li>
          <a href="">Tra cứu đơn hàng</a>
        </li>
        {user ? (
          <li style={{ padding: "0 20px", color: "white" }}>{user.name} <Link
          style={{ textDecoration: "none", fontSize: "15px", color: "red" }}
          to={"/"}
          onClick={() => {
            localStorage.clear();
            window.location.href = "/";
          }}
        >
          Đăng Xuất
        </Link></li>
        ) : (
          <li>
            <a>
              <Link to={"signin"}>Đăng nhập</Link>
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Top_navigate;