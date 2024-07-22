import React, { useState } from "react";
import "./navigation.css";
import Strip from "../Strip/Strip";

const Navigation = () => {
  const [menu, setMenu] = useState("clothing");
  return (
   <>
    <div className="nav-cont">
      <ul>
        <li
          onClick={() => setMenu("CLOTHING")}
          className={menu === "CLOTHING" ? "active" : ""}
        >
          CLOTHING
        </li>
        <li
          onClick={() => setMenu("SHOES")}
          className={menu === "SHOES" ? "active" : ""}
        >
          SHOES
        </li>
        <li
          onClick={() => setMenu("HANDBAGS")}
          className={menu === "HANDBAGS" ? "active" : ""}
        >
          HANDBAGS
        </li>
        <li
          onClick={() => setMenu("DESIGNERS")}
          className={menu === "DESIGNERS" ? "active" : ""}
        >
          DESIGNERS
        </li>
        <li
          onClick={() => setMenu("SUNGLASSES")}
          className={menu === "SUNGLASSES" ? "active" : ""}
        >
          SUNGLASSES
        </li>
        <li
          onClick={() => setMenu("JEWELRY & WATCHES")}
          className={menu === "JEWELRY & WATCHES" ? "active" : ""}
        >
          JEWELRY & WATCHES
        </li>
        <li
          onClick={() => setMenu("ACCESSORIES")}
          className={menu === "ACCESSORIES" ? "active" : ""}
        >
          ACCESSORIES
        </li>
        <li
          onClick={() => setMenu("HOME")}
          className={menu === "HOME" ? "active" : ""}
        >
          {" "}
          HOME
        </li>
        <li
          onClick={() => setMenu("UNDER $50")}
          className={menu === "UNDER $50" ? "active" : ""}
        >
          UNDER $50
        </li>
        <li
          onClick={() => setMenu("CLEARANCE")}
          className={menu === "CLEARANCE" ? "active" : ""}
        >
          CLEARANCE
        </li>
      </ul>
    </div>
    <Strip />
   </>
  );
};

export default Navigation;
