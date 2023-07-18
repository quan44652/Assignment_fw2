import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AddProductPage from "./Admin/Components/Product/AddProductPage";
import ProductManagementPage from "./Admin/Components/Product/ProductManagementPage";
import { getAllCategories, getCategoryById } from "./apis/category";
import { addProduct, getAllProducts, } from "./apis/product";
import Category from "./Components/Category/Category";
import Footer from "./Components/Footer/Footer";
import Product from "./Components/Product/Product";
import Top_navigate from "./Components/Top_navigate/Top_navigate";
import { ICategory } from "./interfaces/category";
import { IProduct } from "./interfaces/product";
import AdminLayoutPage from "./Layouts/AdminLayout";
import Detail from "./Pages/Detail/Detail";


function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategory] = useState<ICategory[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  useEffect(() => {
    getAllProducts().then(({ data }) => setProducts(data))
    getAllCategories().then(({ data }) => setCategory(data))
  }, [])

  const onHandleAdd = (product: IProduct) => {
    console.log('add', product)
    addProduct(product).then(() => getAllProducts().then(({ data }) => setProducts(data)))
  }



  return (
    <div className="App">
      {/* <Top_navigate />
      <Category categories={categories} /> */}
      <Routes>
        <Route path='/'>
          <Route path='products'  >
            <Route index element={<Product products={products} />} />
            <Route path=':id' element={<Detail products={products} />} />
          </Route>
        </Route>
        <Route path="/admin" element={<AdminLayoutPage />}>
          <Route path='products'>
            <Route index element={<ProductManagementPage />} />
            <Route path='add' element={<AddProductPage onAdd={onHandleAdd} />} />
          </Route>
        </Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
