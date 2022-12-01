import React, { useState, useEffect } from "react";
import { logo } from "../assets";
import Navbar from "./Navbar";

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
        <a href="#home" className="logo">
          <img
            src={logo}
            alt="logo"
            style={{ width: "160px", height: "50px" }}
          />
        </a>

        <Navbar />
      </div>
    </header>
  );
};

export default Header;
