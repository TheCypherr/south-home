import React, { useState } from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
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
    <section className="footer-wrapper">
      <div className="inner-footer">
        <div className="left-foot">
          <img src="white-logo.png" alt="" />
          <p>The Designer Trade is Our Only Business</p>
        </div>

        <div className="middle-foot">
          <span onClick={() => handlePageLoading("/request")}>
            Sample Request
          </span>
          <span onClick={() => handlePageLoading("/employment")}>
            Employment
          </span>
          <span onClick={() => handlePageLoading("/contact-us")}>
            Contact Us
          </span>
        </div>

        <div className="right-foot">
          <span onClick={() => handlePageLoading("/warranty")}>Warranty</span>
          <span onClick={() => handlePageLoading("/cleaning")}>
            Cleaning & Care Instructions
          </span>
          <span onClick={() => handlePageLoading("/contact-us")}>
            The Southern Home Difference
          </span>
        </div>

        <div className="footer-icon">
          <FaFacebook size={25} />
          <FaInstagram size={25} />
        </div>
      </div>

      <div className="mobile-inner-footer">
        <div className="center-align">
          <div className="mobile-left-foot">
            <img src="white-logo.png" alt="" />
            <p>The Designer Trade is Our Only Business</p>
          </div>

          <div className="mobile-footer-icon">
            <span>Email Us</span>
            <span>805.697.4677(p)</span>
            <span className="span-icon">
              <FaFacebook size={25} />
              <FaInstagram size={25} />
            </span>
          </div>
        </div>

        <div className="left-align">
          <div className="middle-foot">
            <span onClick={() => handlePageLoading("/request")}>
              Sample Request
            </span>
            <span onClick={() => handlePageLoading("/employment")}>
              Employment
            </span>
            <span onClick={() => handlePageLoading("/contact-us")}>
              Contact Us
            </span>
          </div>

          <div className="right-foot">
            <span onClick={() => handlePageLoading("/warranty")}>Warranty</span>
            <span onClick={() => handlePageLoading("/cleaning")}>
              Cleaning & Care Instructions
            </span>
            <span onClick={() => handlePageLoading("/contact-us")}>
              The Southern Home Difference
            </span>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>Copyright © 2024 Southern Home, Inc. All rights reserved.</p>
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

export default Footer;
