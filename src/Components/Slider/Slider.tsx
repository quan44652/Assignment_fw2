import React from "react";
import styles from "./Slider.module.scss";

const Slider = () => {
  return (
    <div className={styles.wrapper}>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className={`carousel-inner ${styles.carousel_inner}`}>
          <div className={`carousel-item active ${styles.carousel_item}`}>
            <img
              src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/05/18/s23-series.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className={`carousel-item ${styles.carousel_item}`}>
            <img
              src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/05/18/group-228_638200053953980602.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className={`carousel-item ${styles.carousel_item}`}>
            <img
              src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/05/12/hoang-ha-1200x375.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className={`carousel-item ${styles.carousel_item}`}>
            <img
              src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/05/08/banner-xa-kho-laptop-01.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className={`carousel-item ${styles.carousel_item}`}>
            <img
              src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/05/22/tv-coocaa-01.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className={`carousel-item ${styles.carousel_item}`}>
            <img
              src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/05/18/web1.jpg"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className={styles.quick_sales}>
        <div className={styles.quick_sales__item}>
          <img src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/05/12/group-203.png" />
        </div>
        <div className={styles.quick_sales__item}>
          <img src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/05/18/group-194.png" />
        </div>
        <div className={styles.quick_sales__item}>
          <img src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/05/04/ipad.png" />
        </div>
        <div className={styles.quick_sales__item}>
          <img src="https://cdn.hoanghamobile.com/i/home/Uploads/2023/05/22/group-202.png" />
        </div>
      </div>
    </div>
  );
};

export default Slider;
