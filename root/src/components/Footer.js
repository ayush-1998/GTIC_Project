import React from "react";
import "../styles/Footer.css";
import { AiOutlineCopyrightCircle } from "react-icons/ai";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-left">
          <div className="footer-logo">
            <AiOutlineCopyrightCircle />
          </div>
          <div className="footer-text">Retail Grocery</div>
        </div>
        <div className="footer-right">
          <ul>
            <li>Guide</li>
            <li>Terms of sale</li>
            <li>Terms of Use</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
