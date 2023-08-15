import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BidProduct from "./BidProduct";

function BidStatus() {
  const navigate = useNavigate();
  const [bids, setBids] = useState([]);

  useEffect(() => {
    if (window.sessionStorage.getItem("isLoggedIn") === "true") {
      axios
        .get("/userBids")
        .then((response) => setBids(response.data))
        .catch((err) => console.log(err));
    } else {
      navigate("/login");
    }
  }, []);

  if (bids.length === 0) {
    return (
      <div className="no-products">
        <h2>Nothing to show. Bid on some items to see them here. </h2>
      </div>
    );
  } else {
    return (
      <div className="container py-5">
        <div className="row">
          {bids.map((bid, index) => (
            <BidProduct product={bid.product} bid={bid.amount} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default BidStatus;
