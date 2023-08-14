import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "./Product";

function UserProducts() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (window.sessionStorage.getItem("isLoggedIn") === "true") {
      axios
        .get("/userproducts")
        .then((response) => {
          console.log(response.data);
          setProducts(response.data);
        })
        .catch((err) => console.log(err));
    } else {
      navigate("/login");
    }
  }, []);

  if (products.length === 0) {
    return (
      <div className="no-products">
        <h2>Nothing to show. Add some products to auction first. </h2>
      </div>
    );
  } else {
    return (
      <div className="container py-5">
        <div className="row">
          {products.map((product, index) => (
            <Product product={product} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default UserProducts;
