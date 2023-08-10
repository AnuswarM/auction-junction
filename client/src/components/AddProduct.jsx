import axios from "axios";
import React from "react";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function AddProduct() {
  const userLoggedIn = window.localStorage.getItem("isLoggedIn");
  const [product, setProduct] = useState({});
  const [images, setImages] = useState([]);

  function handleTextChange(event) {
    const { name, value } = event.target;

    setProduct((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleImageChange(event) {
    const files = Array.from(event.target.files);
    setImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImages((old) => [...old, reader.result]);
      };

      reader.readAsDataURL(file);
    });
  }

  function handleAddProductSubmit(event) {
    event.preventDefault();

    axios
      .post(
        "/addproduct",
        {
          details: product,
          images: images,
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  }

  if (userLoggedIn)
    return (
      <form className="container" onSubmit={handleAddProductSubmit}>
        <div className="row mb-4">
          <div className="col">
            <div className="form-outline">
              <label className="form-label" htmlFor="productName">
                Product Name
              </label>
              <input
                type="text"
                id="productName"
                className="form-control"
                name="name"
                value={product.name}
                onChange={handleTextChange}
              />
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <label className="form-label" htmlFor="productPrice">
                Starting Price
              </label>
              <input
                type="number"
                id="productPrice"
                className="form-control"
                name="price"
                value={product.price}
                onChange={handleTextChange}
              />
            </div>
          </div>
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="productDesc">
            Description
          </label>
          <textarea
            className="form-control"
            id="productDesc"
            style={{ height: "100px" }}
            rows="4"
            name="description"
            value={product.description}
            onChange={handleTextChange}
          ></textarea>
        </div>

        <div className="form-outline">
          <label className="form-label" htmlFor="tentative-date">
            End Date
          </label>
          <input
            type="date"
            id="tentative-date"
            className="form-control"
            name="endDate"
            value={product.endDate}
            onChange={handleTextChange}
          />
        </div>

        <div className="form-outline">
          <label className="form-label" htmlFor="formFile">
            Images
          </label>
          <input
            className="form-control"
            type="file"
            id="formFile"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
          />
        </div>

        {/* <div className="row mb-3 rowset">
          <div className="col-sm-10 createProductFormImage">
            {imagesPreview.map((image, index) => (
              <img key={index} src={image} alt="Product preview" />
            ))}
          </div>
        </div> */}
        <button type="submit" className="btn btn-primary btn-block mb-4 mt-4">
          Place Product for Auction
        </button>
      </form>
    );
  else return <Navigate replace to="/login" />;
}

export default AddProduct;
