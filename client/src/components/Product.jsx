import React from "react";
import { Link } from "react-router-dom";

function Product(props) {
  return (
    <div className="col-md-12 col-lg-4 mb-4 mb-lg-0">
      <Link to={"/products/" + props.product._id} className="card product-card">
        <img
          src={props.product.images[0].url}
          className="card-img-top mx-auto"
          alt="Laptop"
          style={{ width: "300px", height: "300px" }}
        />

        <div className="card-body">
          <div className="d-flex justify-content-between mb-3">
            <h5 className="mb-0" style={{ textTransform: "capitalize" }}>
              {props.product.name}
            </h5>
            <h5 className="text-dark mb-0">$ {props.product.startingBid}</h5>
          </div>

          <div className="d-flex justify-content-between">
            <p className="small">By {props.product.seller.username}</p>
          </div>

          <div className="d-flex justify-content-between mb-2">
            <p className="text-muted mb-0">
              {props.product.description.substr(0, 50)}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;
