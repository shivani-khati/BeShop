import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from './components/Home';
import { Category } from './components/Category';
import './App.css';
import { HomeFixed } from './components/HomeFixed';
import { LastSection } from './components/LastSection';
import { Blog } from './components/Blog';
import { Contacts } from './components/Contacts';
import { Shop } from './components/Shop';
import { ShopSecondSection } from './components/ShopSecondSection';
import { Product } from './components/Product';
import { Cart } from './components/Cart';
import { Wishlist } from './components/Wishlist';

function App() {
  return (
    <>
      <HomeFixed />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contacts />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/products" element={<ShopSecondSection />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </Router>
      <LastSection />
    </>
  );
}

export default App;
