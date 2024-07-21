import React from "react";
import "./footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div>
    <div className="container">
      <div>
        <h2>ABOUT US</h2>
        <ul>
          <li>Contact Us</li>
          <li>Frequently ASked Questions</li>
          <li>Shopping & Returns</li>
          <li> Pre-Owned Guide</li>
          <li>Sell on Butterfly</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>Contact Us</li>
          <li>Frequently ASked Questions</li>
          <li>Shopping & Returns</li>
          <li> Pre-Owned Guide</li>
          <li>Sell on Butterfly</li>
        </ul>
      </div>
      <div>
        <h2>SIGN UP AND SAVE</h2>
        <p>Subscribe to get exclusive offers on designer brands</p>
        <form className="subscription">
          <input type="text" placeholder="Enter your email " />
          <button type="submit">Subscribe</button>
        </form>
        <div className="icon">
            <img src ={assets.twitter_icon} alt="instagram" />
            <img src={assets.facebook_icon} alt="facebook" />
  
        </div>
      </div>
    </div>
    <div className="logo-footer">
    <img src={assets.logo} alt="" />
    <p>© 2024 Bluefly BLUEFLY.COM OR ITS AFFILIATES ALL RIGHTS RESERVED.</p>
    </div>
    </div>
  );
};

export default Footer;
