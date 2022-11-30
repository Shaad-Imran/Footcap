import React from "react";
import { logo } from "../assets";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a href="#home" className="logo">
          <img src={logo} alt="logo" />
        </a>

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
