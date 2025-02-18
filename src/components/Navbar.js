import React, { useState, useEffect } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../images/JimmyNgoLogo.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    window.addEventListener("resize", showButton);
    return () => window.removeEventListener("resize", showButton);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          {button && (
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img
                style={{ maxWidth: "100%", height: "auto" }}
                alt="Logo"
                src={Logo}
              />
            </Link>
          )}
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {!button && (
              <li className="nav-item">
                <img
                  style={{ maxWidth: "100%", height: "auto" }}
                  alt="Logo"
                  src={Logo}
                />
              </li>
            )}
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                About Dr. Ngo
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/staff" className="nav-links" onClick={closeMobileMenu}>
                Associate Dr.
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/promotions" className="nav-links" onClick={closeMobileMenu}>
                Promotions & Rewards
              </Link>
            </li>
            <li>
              <div className="nav-links-mobile">Call (714) 530-8577</div>
            </li>
          </ul>
          {button && (
            <Button
              style={{ width: "20%", marginRight: "1rem" }}
              buttonStyle="btn--outline"
            >
              Call (714) 530-8577
              drjimmyngo@gmail.com
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
