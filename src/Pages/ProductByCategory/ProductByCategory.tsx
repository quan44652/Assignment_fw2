import React, { useEffect, useState } from "react";
import Top_navigate from "../../Components/Top_navigate/Top_navigate";
import Header from "../../Components/Header/Header";
import Product from "../../Components/Product/Product";
import Filter from "../../Components/Filter/Filter";
import fetchData from "../../Api";
import { ICategory, IProduct } from "../../Common";
import Footer from "../../Components/Footer/Footer";
import { useParams } from "react-router-dom";
import Category from "../../Components/Category/Category";

const ProductByCategory = () => {
  const { id } = useParams();
  const [products, setProducts] = useState<IProduct[]>([]);
  const [category, setCategory] = useState<ICategory[]>([]);
  useEffect(() => {
    fetchData({ method: "getOne", url: "/category", id: id }).then((response) =>
      setProducts(response)
    );
  }, [id]);

  useEffect(() => {
    fetchData({ method: "get", url: "/category" }).then((response) =>
      setCategory(response)
    );
  }, []);

  const handleGetParams = (params: string) => {
    fetchData({ method: "get", url: `/products${params}` }).then((response) => {
      setProducts(response.filter((item: IProduct) => item.categoryId == id));
    });
  };
  return (
    <div>
      <Top_navigate />
      <Header />
      <Category categories={category} />
      <Filter getParams={handleGetParams} />
      <Product products={products} />
      <Footer />
    </div>
  );
};

export default ProductByCategory;
