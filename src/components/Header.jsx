import React, { useState, useEffect } from "react";
import { logo } from "../assets";
import Navbar from "./Navbar";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [visible, setVisible] = useState(false);

  const listenToScroll = () => {
    if (window.scrollY > 80) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  return (
    <header className={visible ? "header active" : "header"}>
      <div className="container">
        <NavLink to="/" className="logo">
          <img
            src={logo}
            alt="logo"
            style={{ width: "160px", height: "50px" }}
          />
        </NavLink>

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
