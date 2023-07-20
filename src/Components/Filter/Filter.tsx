import React from "react";
import styles from "./Filter.module.scss";

const filter = [
  {
    id: 1,
    name: "Mới cập nhập",
    params: "?_sort=createdAt&_order=desc",
  },
  {
    id: 2,
    name: "Cũ nhất",
    params: "?_sort=createdAt&_order=asc",
  },
  {
    id: 3,
    name: "Giá cao nhất",
    params: "?_sort=priceNew&_order=asc",
  },
  {
    id: 4,
    name: "Giá thấp nhất",
    params: "?_sort=priceNew&_order=desc",
  },
];

interface IProps {
  getParams: (params: string) => void;
}

const Filter = ({ getParams }: IProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_filter}>
        <ul className={styles.box_filter}>
          <li>
            <h4 className={styles.title}>Lọc danh sách: </h4>
          </li>
          {filter.map((item) => (
            <li onClick={() => getParams(item.params)} key={item.id}>
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Filter;
