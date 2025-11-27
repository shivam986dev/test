import React from "react";
import "./Footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <footer className="footer-dark pt-5 pb-4">
      <div className="container">
        <div className="row">

          {/* LEFT COLUMN */}
          <div className="col-md-4 mb-4">
            <h4 className="footer-title">Mumbai Homes Blogs</h4>
            <p className="footer-text">
              We bring you the best Premium WordPress-style themes that are perfect for news,
              magazines, and blogs. Stay informed with our financial insights.
            </p>

            {/* Social Icons */}
            <div className="footer-social">
              <a href="#"><i className="bi bi-twitter"></i></a>
              <a href="#"><i className="bi bi-facebook"></i></a>
              <a href="#"><i className="bi bi-linkedin"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-youtube"></i></a>
            </div>
          </div>

          {/* MIDDLE COLUMN */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Categories</h5>

            <div className="row">
              <div className="col-6">
                <ul className="footer-links">
                  <li>Builder</li>
                  <li>Infrastructure</li>
                  <li>Locality Insights</li>
                  <li>Vastu</li>
                </ul>
              </div>

              <div className="col-6">
                <ul className="footer-links">
                  <li>Celebrity Homes</li>
                  <li>Insurance</li>
                  <li>Property Buying Guides</li>
                  <li>Property News</li>
                  <li>Interiors</li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="col-md-4 mb-4">
            <h5 className="footer-title">Contact Us</h5>
            <p className="footer-mail">
              <i className="bi bi-envelope"></i>
              &nbsp; mumbaihomesnow@gmail.com
            </p>
          </div>

        </div>

        {/* BOTTOM COPYRIGHT */}
        <hr className="footer-line" />
        <div className="text-center footer-copy">
          © {new Date().getFullYear()} Mumbai Homes Blogs. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
