import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Product from "./pages/product/Product";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Layout from "./Layout/Layout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="*" element={<h2>404-Not found</h2>} />
      </Route>
    </Routes>
  );
};

export default App;
