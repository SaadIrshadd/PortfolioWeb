import React from "react";
import logo from "../assets/logo.svg";
import logo1 from "../assets/logo2.png";

function Navbar() {
  return (
    <nav>
      <img src={logo1} alt="Logo" />
      <div>
        <button className="btn">Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar;