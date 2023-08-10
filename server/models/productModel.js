const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  startingBid: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  bidEnd: {
    type: Date,
  },
  seller: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  bids: [
    {
      bidder: { type: mongoose.Schema.ObjectId, ref: "User" },
      bid: Number,
      time: Date,
    },
  ],
});

const Product = new mongoose.model("Product", productSchema);

module.exports = { Product };
