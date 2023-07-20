import React, { useEffect, useState } from "react";
import Top_navigate from "../../Components/Top_navigate/Top_navigate";
import Header from "../../Components/Header/Header";
import Slider from "../../Components/Slider/Slider";
import Product from "../../Components/Product/Product";
import Footer from "../../Components/Footer/Footer";
import { IProduct, ICategory } from "../../Common";
import axios from "axios";
import Category from "../../Components/Category/Category";
import fetchData from "../../Api";

const Home = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [category, setCategory] = useState<ICategory[]>([]);

  useEffect(() => {
    fetchData({ method: "get", url: "/products" }).then((response) =>
      setProducts(response)
    );

    fetchData({ method: "get", url: "/category" }).then((response) =>
      setCategory(response)
    );
  }, []);

  return (
    <div>
      <Top_navigate />
      <Header products={products} />
      <Category categories={category} />
      <Slider />
      <Product products={products} />
      <Footer />
    </div>
  );
};

export default Home;
