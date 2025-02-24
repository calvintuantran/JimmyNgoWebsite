import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import Logo from "../images/JimmyNgoLogo.png";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/about">Dr. Jimmy Ngo</Link>
            <Link to="/staff">Associate Doctor</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Services</h2>
            <Link to="/services">Braces</Link>
            <Link to="/services">Clear Aligners</Link>
            <Link to="/services">Retainers</Link>
            <Link to="/services">Early Orthodontic</Link>            
            <Link to="/services">Corrective Jaw Treatments</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <a
              className="social-icon-link"
              href="https://www.instagram.com/jimmyngo.orthodontics/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Yelp"
            >
              <h6>Instagram</h6>
            </a>
            <a
              className="social-icon-link"
              href="https://www.yelp.com/biz/jimmy-vu-ngo-dds-garden-grove"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Yelp"
            >
              <h6>Yelp</h6>
            </a>
          </div>
        </div>
      </div>
      <section class="social-media">
        <div class="social-media-wrap">
          <div class="footer-logo">
            <Link to="/" >
              <img
                style={{ maxWidth: "100%", height: "auto" }}
                alt="Logo"
                src={Logo}
              />
            </Link>
          </div>
          <div class="social-icons">
            <a
              className="social-icon-link"
              href="https://www.yelp.com/biz/jimmy-vu-ngo-dds-garden-grove"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Yelp"
            >
              <i class="fab fa-yelp" />
            </a>
            <a
              className="social-icon-link"
              href="https://www.instagram.com/jimmyngo.orthodontics/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Yelp"
            >
              <i class="fab fa-instagram" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
