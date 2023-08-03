import { Route, Routes, useNavigate } from "react-router-dom";
import Header from "./Components/Header/Header";
import Slider from "./Components/Slider/Slider";
import Home from "./Pages/Home/Home";
import ProductByCategory from "./Pages/ProductByCategory/ProductByCategory";
import AdminProducts from "./Admin/Product";
import AddProduct from "./Admin/Product/add";
import UpdateProduct from "./Admin/Product/update";
import AdminCategory from "./Admin/Category";
import AddCategory from "./Admin/Category/add";
import UpdateCategory from "./Admin/Category/update";
import LayoutAdmin from "./Admin/LayoutAdmin";
import { useEffect, useState } from "react";
import { ICategory, IProduct } from "./Common";
import fetchData from "./Api";
import { toast } from "react-toastify";
import axios from "axios";
import Detail from "./Pages/Detail/Detail";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [category, setCategory] = useState<ICategory[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    void fetchData({ method: "get", url: "/category" }).then((reponse) =>
      setCategory(
        reponse.map((item: ICategory, index: number) => {
          return { ...item, key: index + 1 };
        })
      )
    );

    void fetchData({ method: "get", url: "/products" }).then((reponse) =>
      setProducts(
        reponse.map((item: IProduct, index: number) => {
          return { ...item, key: index + 1 };
        })
      )
    );
  }, []);

  const handleAddCategory = (newCategory: ICategory) => {
    fetchData({
      method: "post",
      url: "/category",
      data: newCategory,
    }).then((data) => {
      if (data.error) {
        toast.error(data.error);
        return;
      }

      setCategory([...category, data.category]);
      toast.success("Thêm thành công");
      navigate("/admin/category");
    });
  };

  const handleAddProduct = (newProduct: IProduct) => {
    axios
      .post("http://localhost:8080/api/products", newProduct)
      .then((data) => {
        // if (data.error) {
        //   toast.error(data.error);
        //   return;
        // }

        setProducts([...products, data.product]);
        toast.success("Thêm thành công");
        navigate("/admin/products");
      });
    // fetchData({
    //   method: "post",
    //   url: "/products",
    //   data: newProduct,
    // }).then((data) => {
    //   if (data.error) {
    //     toast.error(data.error);
    //     return;
    //   }

    //   setProducts([...products, data.product]);
    //   toast.success("Thêm thành công");
    //   navigate("/admin/products");
    // });

    console.log(newProduct);
  };

  const handleUpdateCategory = (newCategory: ICategory) => {
    console.log(newCategory);

    void fetchData({
      method: "put",
      url: "/category",
      data: newCategory,
      id: newCategory._id,
    }).then((data) => {
      console.log(data);

      if (data.error) {
        toast.error(data.error);
        return;
      }

      setCategory(
        category.filter((item: ICategory) =>
          item._id != newCategory._id ? newCategory : item
        )
      );
      toast.success("Sửa thành công");
      navigate("/admin/category");
    });
  };

  const handleRemoveCategory = (id: string) => {
    fetchData({ method: "delete", url: "/category", id: id }).then((data) => {
      if (data.error) {
        toast.error(data.error);
        return;
      }
      setCategory(category.filter((item: ICategory) => item._id != id));
      toast.success("Xóa thành công");
      navigate("/admin/category");
    });
  };

  const handleRemoveProduct = (id: string) => {
    fetchData({ method: "delete", url: "/products", id: id }).then((data) => {
      if (data.error) {
        toast.error(data.error);
        return;
      }
      setProducts(products.filter((item: IProduct) => item._id != id));
      toast.success("Xóa thành công");
      navigate("/admin/products");
    });
  };

  return (
    <div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="products/:id" element={<Detail products={products} />} />
        <Route path="/category/:id" element={<ProductByCategory />} />
        <Route path="admin" element={<LayoutAdmin />}>
          <Route path="products">
            <Route
              index
              element={
                <AdminProducts
                  products={products}
                  category={category}
                  onRemove={handleRemoveProduct}
                />
              }
            ></Route>
            <Route
              path="add"
              element={
                <AddProduct category={category} onAdd={handleAddProduct} />
              }
            ></Route>
            <Route path="update/:id" element={<UpdateProduct />}></Route>
          </Route>
          <Route path="category">
            <Route
              index
              element={
                <AdminCategory
                  categories={category}
                  onRemove={handleRemoveCategory}
                />
              }
            ></Route>
            <Route
              path="add"
              element={<AddCategory onAdd={handleAddCategory} />}
            ></Route>
            <Route
              path="update/:id"
              element={<UpdateCategory onUpdate={handleUpdateCategory} />}
            ></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
