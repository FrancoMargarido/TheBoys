import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Cart from "./components/pages/cart/Cart";
import ItemDetailContainer from "./components/pages/ItemDetailContainer/ItemDetailContainer";
import The7 from "./components/pages/The7/The7";
import Layout from "./components/layout/LayoutRouter/Layout";
/*=============== STYLES ===============*/
import "./components/common/counter/counter.css";
import "./components/pages/home/home.css";
import "./components/layout/footer/footer.css";
import "./components/layout/nav/nav.css";
import "./components//common/ProductCard/product.css";
import "./components/pages/The7/the7.css";
import "./components/pages/ItemDetailContainer/itemdetail.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/The7/" element={<The7 />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ItemDetail/:id" element={<ItemDetailContainer />} />
        </Route>
        <Route path="*" element={<h1>404 Page not fount</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
