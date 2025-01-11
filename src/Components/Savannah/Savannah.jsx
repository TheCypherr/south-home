import React, { useState } from "react";
import "./Savannah.css";
import { useNavigate } from "react-router-dom";

const sav1annah = () => {
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
    <section className="savannah-wrapper">
      <div className="inner-savannah">
        <div className="savass">
          <div className="sav-contain">
            <img src="sav1.png" alt="" />
          </div>

          <div className="sav-text">
            <h1>SAVANNAH</h1>
            <p>NEW COLLECTION ALERT!</p>
            <h5>
              A new addition to our slip cover collections, the savannah
              Collection oozes style and comfort - a perfect marriage of indoor
              coziness and outdoor living!
            </h5>
          </div>

          <div
            className="view"
            onClick={() => handlePageLoading("/savannah-collection")}
          >
            <button>VIEW NOW</button>
          </div>
        </div>

        <div className="savass">
          <div className="sav-contain">
            <img src="sav22.png" alt="" />
          </div>

          <div className="sav-text">
            <h1>CORSICA BISTRO</h1>
            <p>NEW COLLECTION ALERT!</p>
            <h5>
              In both round and square option, with four different finish
              options, the 36″ Corsica Bistro table is perfect for all small
              dining designs!
            </h5>
          </div>

          <div
            className="view"
            onClick={() => handlePageLoading("/tubular-aluminum-dining-tables")}
          >
            <button>VIEW NOW</button>
          </div>
        </div>

        <div className="savass">
          <div className="sav-contain">
            <img src="sav3.png" alt="" />
          </div>

          <div className="sav-text">
            <h1>VENUE</h1>
            <p>NEW COLLECTION ALERT!</p>
            <h5>
              Check out the new Natural Finish we launched for our beloved Venue
              Collection - All pieces available in Natural!
            </h5>
          </div>

          <div
            className="view"
            onClick={() => handlePageLoading("/venue-collection")}
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

export default sav1annah;
