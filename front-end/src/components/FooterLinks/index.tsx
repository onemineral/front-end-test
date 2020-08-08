import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./styles.scss";

const Footerlinks: React.FC = () => {
  return (
    <div className="footerLinks__container">
      <Router>
        <div className="footerLinks__wrapper">
          <div></div>
          <>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <div className="footerLinks__anchor">About</div>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <div className="footerLinks__anchor">Contact</div>
            </Link>
            <Link to="/legal" style={{ textDecoration: "none" }}>
              <div className="footerLinks__anchor">Legal</div>
            </Link>
          </>

          <div className="footerLinks__text">
            Copyright © 2019 Site.com. All rights reserved.{" "}
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Footerlinks;
