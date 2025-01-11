import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home-wrapper">
      <div className="image-overlay">
        <div className="chair-image">
          <img src="s-two.jpg" alt="Designer Trade" />
        </div>
        <div className="overlay-text">
          <p className="text">THE DESIGNER TRADE IS OUR ONLY BUSINESS</p>
          <div className="gradient" />
        </div>
      </div>
    </section>
  );
};

export default Home;
