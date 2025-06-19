import React from "react";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <nav>
      <img width="140" src={logo} alt="Logo" />
      <div>
        <button className="btn">Sign In</button>
      </div>
    </nav>
  );
}

export default Navbar;