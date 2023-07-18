import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getAllCategories } from "./apis/category";
import { getAllProducts } from "./apis/product";
import Category from "./Components/Category/Category";
import Footer from "./Components/Footer/Footer";
import Product from "./Components/Product/Product";
import Top_navigate from "./Components/Top_navigate/Top_navigate";
import { ICategory } from "./interfaces/category";
import { IProduct } from "./interfaces/product";
import Detail from "./Pages/Detail/Detail";


function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategory] = useState<ICategory[]>([]);
  useEffect(() => {
    getAllProducts().then(({ data }) => setProducts(data))
    getAllCategories().then(({ data }) => setCategory(data))
  }, [])



  return (
    <div className="App">
      <Top_navigate />

      <Routes>
        <Route path='/'>
          <Route path='category'  >
            <Route index element={<Category categories={categories} />} />
            <Route path=':id' element={<Detail products={products} />} />
          </Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
