import React from "react";
import "./Footer.css";
import { Button } from "./Button";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div class="footer-links">
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div class="footer-link-items">
            <h2>Contact Us</h2>
            <Link to="/">Contact</Link>
            <Link to="/">Support</Link>
          </div>
        </div>
        <div className="footer-link-wrapper">
          <div class="footer-link-items">
            <h2>Services</h2>
            <Link to="/">To DO</Link>
          </div>
          <div class="footer-link-items">
            <h2>Social Media</h2>
            <a
              className="social-icon-link"
              href="https://www.instagram.com/jimmyngoorthodontist/"
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
            <Link to="/" className="navbar-logo">
              <img
                style={{ maxWidth: "100%", height: "auto" }}
                alt="Logo"
                src={"images/JimmyNgoLogo.PNG"}
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
              href="https://www.instagram.com/jimmyngoorthodontist/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Yelp"
            >
              <i class="fab fa-instagram" />
            </a>
            <Link
              class="social-icon-link youtube"
              to="/"
              target="_blank"
              aria-label="Youtube"
            >
              <i class="fab fa-youtube" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
