import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login"
import Signup from "./Signup";
import Footer from "./Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Signup />
      <Login />
      <Footer />
    </div>
  );
}

export default App;
