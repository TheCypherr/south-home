import React, { useState } from "react";
import "./Covers.css";
import { useNavigate } from "react-router-dom";

const Covers = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // useState for page loading
  const handlePageLoading = (targetPage) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate(targetPage);
    }, 1500);
  };

  return (
    <section className="cover-wrapper">
      <div className="inner-cover">
        <div className="cover-image">
          <img src="/double-chair.webp" alt="" />
        </div>
        <div className="cover-text">
          <h1>FURNITURE COVERS</h1>
          <div className="underline1" />
          <p>
            Southern Home offers a wide range of custom furniture covers
            designed specifically to protect and enhance outdoor living spaces
            in any region. Crafted with meticulous attention to detail and using
            high-quality materials, these covers are tailored to fit all of our
            furniture pieces. Engineered to withstand the challenges of the any
            climate, these durable covers provide exceptional protection against
            UV rays, rain, dust, and other outdoor elements, ensuring the
            longevity and beauty of your outdoor furniture.
            <br />
            <br />
            With Southern Home’s custom furniture covers, you can enjoy peace of
            mind knowing that your outdoor investments are safeguarded and ready
            for relaxation and entertaining at any time.
          </p>

          <div
            className="view"
            onClick={() => handlePageLoading("/furniture-covers")}
          >
            <button>VIEW NOW</button>
          </div>
        </div>
      </div>

      {loading && (
        <div className="BouncyLoad-container">
          <div className="bouncy-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
    </section>
  );
};

export default Covers;
