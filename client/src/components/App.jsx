import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import AddProduct from "./AddProduct";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/addproduct" element={<AddProduct />} />
    </Routes>
  );
};

function App() {
  return (
    <div>
      <Navbar />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
