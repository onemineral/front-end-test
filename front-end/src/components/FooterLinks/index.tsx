import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "./styles.scss";

const Footerlinks: React.FC = () => {
  return (
    <div className="footerLinks-Container">
      <Router>
        <div className="footerLinks-Wrapper">
          <div></div>
          <>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <div className="footerLinks-Anchor">About</div>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <div className="footerLinks-Anchor">Contact</div>
            </Link>
            <Link to="/legal" style={{ textDecoration: "none" }}>
              <div className="footerLinks-Anchor">Legal</div>
            </Link>
          </>

          <div className="footerLinks-Text">
            Copyright © 2019 Site.com. All rights reserved.{" "}
          </div>
        </div>
      </Router>
    </div>
  );
};

export default Footerlinks;
