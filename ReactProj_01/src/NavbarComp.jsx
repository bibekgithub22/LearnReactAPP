import React from "react";
import "./index.css";
import "./NavbarComp.css"
export const NavbarComp = () => {
  return (
    <div id="nav">
      <div className="left">
        <h2>LOGO</h2>
      </div>
      <div className="mid">
        <ul>
          <li>Service</li>
          <li>Product</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
      <div className="right">
        <input type="search" name="" id="search" placeholder="Search..." />
      </div>
    </div> 
  );
 
};
