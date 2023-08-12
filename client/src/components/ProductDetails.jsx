import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

function ProductDetails() {
  // const location = useLocation();
  const id = useParams().id;
  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);
  const [date, setDate] = useState(new Date());
  const [readableDate, setReadableDate] = useState("");
  const [bid, setBid] = useState(0);

  useEffect(() => {
    console.log(id);

    axios
      .get(`/products/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setProduct(response.data);
          setDate(response.data.bidEnd);
          setImages(response.data.images);
        } else console.log(response);
      })
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    setBid(product.startingBid);
  }, [product]);

  useEffect(() => {
    let dt = new Date(date);
    setReadableDate(
      dt.getDate() + "/" + (dt.getMonth() + 1) + "/" + dt.getFullYear()
    );
  }, [date]);

  function handleBid() {
    console.log("handling bid");
  }

  return (
    <div className="container mt-5">
      <div className="row gx-5">
        <div
          id="carouselIndicators"
          className="carousel slide carousel-dark col-lg-6"
        >
          <div className="carousel-indicators">
            {images.map((image, index) => {
              return (
                <button
                  type="button"
                  data-bs-target="#carouselIndicators"
                  data-bs-slide-to={index}
                  key={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : "false"}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              );
            })}
          </div>

          <div className="carousel-inner">
            {images.map((image, index) => {
              return (
                <div
                  className={
                    index === 0 ? "carousel-item active" : "carousel-item"
                  }
                  key={index}
                >
                  <img src={image.url} className="d-block w-100" />
                </div>
              );
            })}
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <main className="col-lg-6">
          <div className="ps-lg-3">
            <h4
              className="title text-dark"
              style={{ textTransform: "capitalize" }}
            >
              {product.name}
            </h4>
            <div className="mb-3">
              <span className="h5">${product.startingBid}</span>
            </div>

            <dt className="col-3">Description:</dt>
            <dd className="col-9">
              <p>{product.description}</p>
            </dd>

            <dt className="col-3">Seller:</dt>
            <dd className="col-9">
              {product.seller ? product.seller.username : ""}
            </dd>

            <dt className="col-3">Phone:</dt>
            <dd className="col-9">
              {product.seller ? product.seller.phone : ""}
            </dd>

            <dt className="col-3">Email:</dt>
            <dd className="col-9">
              {product.seller ? product.seller.email : ""}
            </dd>

            <dt className="col-3">Bid ends by:</dt>
            <dd className="col-9">{readableDate}</dd>

            <hr />

            <form onSubmit={handleBid}>
              <div className="form-group">
                <label htmlFor="bid">Your Bid:</label>
                <input
                  type="number"
                  className="form-control w-25"
                  id="bid"
                  min={product.startingBid}
                  value={bid}
                  onChange={(event) => setBid(event.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg mt-2 w-25"
              >
                Place Bid
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}

export default ProductDetails;
