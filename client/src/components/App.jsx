import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import AddProduct from "./AddProduct";
import BidAndBuy from "./BidAndBuy";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Profile from "./Profile";
import ProductDetails from "./ProductDetails";
import Userproducts from "./UserProducts";
import axios from "axios";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/addproduct" element={<AddProduct />} />
      <Route path="/bidandbuy" element={<BidAndBuy />} />
      <Route path="/products/:id" element={<ProductDetails />} />
      <Route path="/userproducts" element={<Userproducts />} />

      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};

function App() {
  useEffect(() => {
    axios
      .get("/isAuthenticated")
      .then((response) => window.sessionStorage.setItem("isLoggedIn", response.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Navbar />
      <Routing />
      <Footer />
    </div>
  );
}

export default App;
