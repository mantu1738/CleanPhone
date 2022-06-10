import React from "react";
import { images } from "../../constants";
import "./Home.css";

const Home = () => {
  return (
    <div className="app__home app__bg section__padding flex__center">
      <div className="app__home-content">
        <div className="app__home-content_img">
          <img src={images.childImage} alt="Home" />
        </div>
        <div className="app__home-content_word">
          <h1>
            What are your kids <br /> looking at their at Phones.
          </h1>
          <p>
            Manage your kid's phone from anywhere with a brand new <br /> Clean
            Phone. Order now and get FREE shipping!
          </p>
          <button className="custom__button">Order Now !</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
