import React from "react";
import "./strip.css";
import Carausel from "../carausel/Carausel";

const Strip = () => {
  return (
    <>
      <div className="welcome-message">
        <h1>Welcome to Butterfly</h1>
      </div>
      <div className="offer-image">
        <img
          src="https://cdn.shopify.com/s/files/1/0248/3473/6191/files/7_BANNER_1200X200_1.jpg?v=1715036262"
          alt=""
        />
      </div>
      <Carausel />
    </>
  );
};

export default Strip;
