import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import Product from "./Product";

function BidAndBuy() {
  const userLoggedIn = window.localStorage.getItem("isLoggedIn");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("/products")
      .then((response) => setProducts(response.data))
      .catch((err) => console.log(err));
  }, []);

  if (userLoggedIn) {
    return (
      <div className="container py-5">
        <div className="row">
          {products.map((product) => (
            <Product product={product} />
          ))}
        </div>
      </div>
    );
  } else {
    return <Navigate replace to="/login" />;
  }
}

export default BidAndBuy;
