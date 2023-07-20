import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "./Category.module.scss";
import { ICategory } from "../../Common";
// import { LaptopOutlined } from "@ant-design/icons"
interface IProps {
  categories: ICategory[];
}
const Category = (props: IProps) => {
  const [data, setData] = useState<ICategory[]>([]);
  useEffect(() => {
    setData(props.categories);
  }, [props]);
  return (
    <div className={styles.wrapper}>
      <ul className={styles.container}>
        {data.map((category) => {
          return (
            <li key={category._id}>
              <Link to={`/category/` + category._id}>
                <span className={styles.icon}>
                  <img src={category.image} />
                </span>
                <h6>{category.name}</h6>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Category;
