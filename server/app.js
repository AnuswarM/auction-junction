const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const { User, userStrategy } = require("./models/userModel");
const cloudinary = require("cloudinary");
const { Product } = require("./models/productModel");
const { Bid } = require("./models/bid");

require("dotenv").config();

const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }));

app.use(
  session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(process.env.DATABASE, { useNewUrlParser: true });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

passport.use(userStrategy);

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

app.route("/").get((req, res) => res.send("Hello world!!"));

app.route("/signin").post((req, res) => {
  userData = req.body;
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });

  req.login(user, (err) => {
    if (err) {
      res.status(401).send("Failed to login.");
    } else {
      passport.authenticate("local")(req, res, function () {
        res.status(200).send("Logged in successfully.");
      });
    }
  });
});

app.route("/signup").post((req, res) => {
  userData = req.body;
  User.register(
    {
      username: userData.username,
      email: userData.email,
      phone: userData.phone,
    },
    userData.password,
    (err, user) => {
      if (err) {
        console.log(err);
        res.status(401).send("Could not register user.");
      } else {
        console.log("Successfully registered.");
        res.status(200).send("Registered Successfully.");
      }
    }
  );
});

app.route("/addproduct").post(async (req, res) => {
  const details = req.body.details;
  const product = new Product({
    name: details.name,
    description: details.description,
    startingBid: details.price,
    bidEnd: details.endDate,
    seller: req.user._id,
    images: [],
  });

  const images = req.body.images;
  imageLinks = [];

  for (let i = 0; i < images.length; i++) {
    const result = await cloudinary.v2.uploader.upload(images[i], {
      folder: "products",
    });

    imageLinks.push({
      public_id: result.public_id,
      url: result.secure_url,
    });

    product.images = imageLinks;
  }

  try {
    await product.save();
    res.status(200).send("Successfully added.");
  } catch (error) {
    console.log(error);
  }
});

app.route("/products").get((req, res) => {
  Product.find({})
    .populate("seller")
    .then((products) => res.status(200).send(products))
    .catch((err) => console.log(err));
});

app.route("/products/:id").get((req, res) => {
  console.log(req.params);
  const id = req.params.id;

  Product.findOne({ _id: id })
    .populate("seller")
    .then((response) => res.status(200).send(response))
    .catch((err) => console.log(err));
});

app.route("/userproducts").get((req, res) => {
  if (req.isAuthenticated()) {
    const userId = req.user._id;

    Product.find({ seller: userId })
      .then((response) => res.status(200).send(response))
      .catch((err) => console.log(err));
  } else {
    res.status(401).send("No user data found. Login again.");
  }
});

app.route("/placeBid").post((req, res) => {
  const productId = req.body.productId;
  const bidAmount = req.body.bid;
  const userId = req.user._id;

  Bid.findOne({ product: productId, bidder: userId })
    .then(async (bid) => {
      if (bid) {
        bid.amount = bidAmount;

        await bid.save();

        res.status(200).send("Bid updated Successfully");
      } else {
        const newBid = new Bid({
          amount: bidAmount,
          product: productId,
          bidder: userId,
        });

        await newBid.save();

        res.status(200).send("Bid placed successfully.");
      }
    })
    .catch((err) => console.log(err));
});

app.route("/userBids").get((req, res) => {
  const userId = req.user._id;

  Bid.find({ bidder: userId })
    .populate("product")
    .then((bids) => res.status(200).send(bids))
    .catch((err) => console.log(err));
});

app.route("/logout").get((req, res) => {
  req.logout((err) => {
    if (err) console.log(err);
    else res.status(200).send("Logged Out Successfully.");
  });
});

app.route("/currentUserId").get((req, res) => {
  res.status(200).send(req.user._id);
});

app.route("/isAuthenticated").get((req, res) => {
  res.status(200).send(req.isAuthenticated());
});

app.listen(3002, () => console.log("server started on port 3002"));
