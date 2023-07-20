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

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [category, setCategory] = useState<ICategory[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    void fetchData({ method: "get", url: "/category" }).then((reponse:ICategory[]) =>
    {
      console.log(reponse)
    const res =  reponse.map((item: ICategory, index: number) => {
        return { ...item, key: index + 1 };
      })
      setCategory(res)
    }
    
    );
  }, []);

  const handleAddCategory = (newCategory: ICategory) => {
    void fetchData({
      method: "post",
      url: "/category",
      data: newCategory,
    }).then((data) => {
      console.log(data);

      if (data.error) {
        toast.error(data.error);
        return;
      }

      setCategory([...category, data.category]);
      toast.success("Thêm thành công");
      navigate("/admin/category");
    });
  };

  const handleUpdateCategory = (newCategory: ICategory) => {
    void fetchData({
      method: "post",
      url: "/category",
      data: newCategory,
      id: newCategory._id,
    }).then((data) => {
      console.log(data);

      if (data.error) {
        toast.error(data.error);
        return;
      }

      setCategory([...category, data.category]);
      toast.success("Sửa thành công");
      navigate("/admin/category");
    });
  };

  const handleRemoveCategory = (id: string) => {
    void fetchData({ method: "delete", url: "/category", id: id }).then(
      (data) => {
        if (data.error) {
          toast.error(data.error);
          return;
        }
        setCategory(category.filter((item: ICategory) => item._id != id));
        toast.success("Xóa thành công");
        navigate("/admin/category");
      }
    );
  };

  return (
    <div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/category/:id" element={<ProductByCategory />} />
        <Route path="admin" element={<LayoutAdmin />}>
          <Route path="products">
            <Route index element={<AdminProducts />}></Route>
            <Route path="add" element={<AddProduct />}></Route>
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
