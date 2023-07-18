import { Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Slider from "./Components/Slider/Slider";
import Home from "./Pages/Home/Home";
import ProductByCategory from "./Pages/ProductByCategory/ProductByCategory";

function App() {
  return (
    <div>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/category/:id" element={<ProductByCategory />} />
      </Routes>
    </div>
  );
}

export default App;
