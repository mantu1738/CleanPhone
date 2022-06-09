import React from "react";
import { images } from "../../constants";
import "./Home.css";

const Home = () => {
  return (
    <div className="bg__app app__flex section-padding">
      <div className="app__home">
        <div className="app__home-image">
          <img src={images.childImage} alt="childimage" />
        </div>
        <div className="app__home-contnet">
          <h1>
            What are your kids <br /> looking at on their phones?
          </h1>
          <p>
            Manage your kid's phone from anywhere with a <br /> brand new Clean
            Phone. Order now and get <br /> FREE shipping!
          </p>
          <button type="button">Order Now !</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
