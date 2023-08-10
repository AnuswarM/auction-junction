const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const { User, userStrategy } = require("./models/userModel");
const cloudinary = require("cloudinary");
const { Product } = require("./models/productModel");

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
  try {
    images.forEach(async (image) => {
      const result = await cloudinary.v2.uploader.upload(image, {
        folder: "products",
      });

      imageLinks.push({
        public_id: result.public_id,
        url: result.url,
      });

      product.images = imageLinks;
      await product.save();
    });
  } catch (error) {
    console.log(error);
  }

  res.status(200).send("Call Recieved");
});

app.route("/isAuthenticated").get((req, res) => {
  res.status(200).send(req.isAuthenticated());
});

app.listen(3002, () => console.log("server started on port 3002"));
