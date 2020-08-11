import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./styles.scss";

const Footerlinks: React.FC = () => {
  return (
    <Router>
      <div className="footerLinks__wrapper">
        <div className="footerLinks__links">
          <Link
            className="footerLinks__anchor"
            to="/about"
          >
            About
          </Link>
          <Link
            className="footerLinks__anchor"
            to="/contact"
          >
            Contact
          </Link>
          <Link
            className="footerLinks__anchor"
            to="/legal"
          >
            Legal
          </Link>
        </div>

      <div className="footerLinks__text">
        <strong>Copyright</strong> © 2019 Site.com. All rights <strong>reserved</strong>.
      </div>
      </div>
    </Router>
  );
};

export default Footerlinks;
