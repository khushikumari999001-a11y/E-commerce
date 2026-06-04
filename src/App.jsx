import React, { useState } from "react";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Cart from "./pages/cart/Cart";
import Contact from "./pages/contact/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Shop from "./pages/shop/Shop";

const App = () => {
  const [input, setInput] = useState("");
  return (
    <>
      <BrowserRouter basename="/E-commerce">
        <Nav input={input} setInput={setInput} />
        <Routes>
          <Route path="/" element={<Home input={input} />} />
          <Route path="/shop" element={<Shop input={input} />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  );
};

export default App;
