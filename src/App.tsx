/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-floating-promises */
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { getAllCategories, getCategoryById } from "./apis/category";
import { getAllProducts } from "./apis/product";
import Category from "./Components/Category/Category";
import Footer from "./Components/Footer/Footer";
import Product from "./Components/Product/Product";
import Top_navigate from "./Components/Top_navigate/Top_navigate";
import { ICategory } from "./interfaces/category";
import { IProduct } from "./interfaces/product";
import Detail from "./Pages/Detail/Detail";
import SignIn from "./Components/Signin/signin.component";
import { Iauth } from "./interfaces/auth";
import { addAccount } from "./apis/auth";
import SignUpForm from "./Components/Signup/signup.component";


function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [categories, setCategory] = useState<ICategory[]>([]);
  const [dataAuth, setData] = useState<Iauth[]>([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  useEffect(() => {
    getAllProducts().then(({ data }) => setProducts(data))
    getAllCategories().then(({ data }) => setCategory(data))
  }, [])
  const onHandleAddAccount = (data: Iauth) => {
     addAccount(data).then(() => setData([...dataAuth, data]));
  };
  return (
    <div className="App">
      <Top_navigate />
      <Category categories={categories} />
      <Routes>
        <Route path='/'>
          <Route path='products'  >
            <Route index element={<Product products={products} />} />
            <Route path=':id' element={<Detail products={products} />} />
          </Route>
        </Route>
      </Routes>
      <Routes>
        
          <Route path='/signin'  element={<SignIn />}/>
          <Route path='/signup'  element={<SignUpForm onAdd={onHandleAddAccount}/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
