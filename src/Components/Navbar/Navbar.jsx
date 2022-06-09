import React from "react";
import { images } from "../../constants";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-links">
        <div className="logo">
          <img src={images.logo} alt="logo" />
        </div>
        <div className="order_now">
          <a href="#top">Order Now !</a>
        </div>
        <div className="send_email">
          <a href="mailto:mantoshsah55@gmail.com">Reach Us</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
