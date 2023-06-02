import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Basket from "./pages/Basket";
import Wishlist from "./pages/WishList";
import Products from "./pages/Products";
import ProductDetail from "./components/product/ProductDetail";
import Terms from "./pages/Terms";
import ScrollToTop from "./ScrollToTop";
import NoPage from "./pages/NoPage";
import BasketForm from "./pages/BasketForm";
import RestorePassword from "./pages/RestorePassword";


function App() {
  return (
    <>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/restore-password" element={<RestorePassword/>}/>
          <Route path="/basket" element={<Basket />} />
          <Route path="/basket/order" element={<BasketForm/>}/>
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/terms/delivery" element={<Terms />} />
          <Route path="/terms/return-exchanges" element={<Terms />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:categoryName" element={<Products />} />
          <Route path="/products/:categoryName/:subCategoryName" element={<Products />} />
          <Route path="/products/:categoryName/:subCategoryName/:productName" element={<ProductDetail />} />
          <Route path="/products/new" element={<Products />} />
          <Route path="/products/discounts" element={<Products />} />
          <Route path="/products/best-sellers" element={<Products />} />
          <Route path="*" element={<NoPage/>}/>
        </Routes>
      </ScrollToTop>
    </>
  );
}

export default App;
