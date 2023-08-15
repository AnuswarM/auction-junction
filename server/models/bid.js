const mongoose = require("mongoose");

const bidSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  product: {
    type: mongoose.Schema.ObjectId,
    ref: "Product",
    required: true,
  },
  bidder: { type: mongoose.Schema.ObjectId, ref: "User", required: true },
});

const Bid = new mongoose.model("Bid", bidSchema);

module.exports = { Bid };
