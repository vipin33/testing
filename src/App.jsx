import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Product from "./components/Product";
import { items } from "./components/Data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Searchitem from "./components/Searchitem";
import ProductDetails from "./components/ProductDetails ";
import { Cart } from "./components/Cart";

const App = () => {

  const [data, setData] = useState([...items])
  const [cart, setCart] = useState([])

  return (
    <>
      <Router>
        <Navbar cart={cart} setData={setData} />
        <Routes>
          <Route path="/" element={<Product cart={cart} setCart={setCart} items={data} />} />
          <Route path="/productdetails/:id" element={<ProductDetails cart={cart} setCart={setCart} />} />
          <Route path="/search/:term" element={<Searchitem />} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />
        </Routes>

      </Router>

    </>

  )

}

export default App;
