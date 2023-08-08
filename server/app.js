const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const { User, userStrategy } = require("./models/userModel");

require("dotenv").config();

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

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

app.listen(3002, () => console.log("server started on port 3002"));
