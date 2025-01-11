import React, { useEffect, useState } from "react";
import "./Header.css";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  // For page refresh
  const handlePageRefresh = () => {
    navigate("/");
    window.location.reload();
  };

  // useState for page loading
  const handlePageLoading = (targetPage) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      navigate(targetPage);
    }, 1500);
  };

  // onClick function to handle menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // onClick function to close menubar onclick of menu items
  const closeSideBar = () => {
    setIsOpen(false);
  };

  // useEffect to prevent scrolling when menubar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <section className="header-wrapper">
      <div className="inner-header">
        <div className="left" onClick={handlePageRefresh}>
          <img src="/south-logo2.png" alt="" />
        </div>
        <div className="middle">
          <ul>
            <li onClick={() => handlePageLoading("/collections")}>
              COLLECTIONS
            </li>
            <li>PRODUCT TYPE</li>
            <li>FABRICS</li>
            <li>CLEARANCE</li>
            <li>QUICK SHIP</li>
            <li>ABOUT</li>
          </ul>
        </div>
        <div className="right">
          <FaSearch />
          <FaShoppingCart color="#666" />
          <div className="cart-count">0</div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="mobile-header">
        <div className={`fixed-header ${isOpen ? "menu-open" : ""}`}>
          <div className="mobile-left" onClick={handlePageRefresh}>
            <img src="/south-logo2.png" alt="" />
          </div>

          <div className="mobile-right-flex">
            <div className="mobile-right">
              <FaShoppingCart color="#666" size={18} />
              <div className="mobile-cart-count">0</div>
              <FaSearch size={18} />
            </div>

            <div className="menu-bar" onClick={() => toggleMenu()}>
              {isOpen ? (
                <FaTimes size={23} className="main-fa-times" />
              ) : (
                <FaBars size={23} />
              )}
            </div>
          </div>

          {isOpen && (
            <div className="mobile-menu">
              <div className="inner-menu">
                <div>
                  <ul className="middle-mobile">
                    <li
                      onClick={() => {
                        handlePageLoading("/collections");
                        closeSideBar();
                      }}
                    >
                      COLLECTIONS
                    </li>
                    <li
                      onClick={() => {
                        handlePageLoading("/product-type");
                        closeSideBar();
                      }}
                    >
                      PRODUCT TYPE
                    </li>
                    <li
                      onClick={() => {
                        handlePageLoading("/fabrics");
                        closeSideBar();
                      }}
                    >
                      FABRICS
                    </li>
                    <li
                      onClick={() => {
                        handlePageLoading("/clearance");
                        closeSideBar();
                      }}
                    >
                      CLEARANCE
                    </li>
                    <li
                      onClick={() => {
                        handlePageLoading("/quick-ship");
                        closeSideBar();
                      }}
                    >
                      QUICK SHIP
                    </li>
                    <li
                      onClick={() => {
                        handlePageLoading("/about");
                        closeSideBar();
                      }}
                    >
                      ABOUT
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}
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

export default Header;
