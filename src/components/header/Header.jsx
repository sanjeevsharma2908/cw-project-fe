import React from "react";
import "./header.css";
import { assets } from "../../assets/assets";
import Navigation from "../navigation/Navigation";

const Header = () => {
  return (
    <>
    <div className="header">
      <div></div>
      <div></div>

      <div className="logo">
        <img src={assets.logo} alt="logo" />
      </div>
      <div className="right-div">
        <div className="search-bar">
          <img src={assets.search_icon} alt="" />
          <span>SEARCH</span>
          {/* <input type="text" placeholder="Search..." /> */}
        </div>
        <div className="user-profile">
          <img src={assets.profile_icon} alt="profile_icon" />
          <img src={assets.heart_icon} alt="liked-img" />
          <img src={assets.bag_icon} alt="" />
        </div>
      </div>
    </div>
    <Navigation />
    </>
    
  );
};

export default Header;
