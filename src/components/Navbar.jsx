import React, { useState } from "react";
import { logo } from "../assets";
import { navBarLinks, navActionList } from "../constants";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);

  return (
    <>
      <button className="nav-open-btn" onClick={() => setMenuIcon(!menuIcon)}>
        <ion-icon name="menu-outline"></ion-icon>
      </button>

      <nav className={menuIcon ? "navbar active" : "navbar"}>
        <button className="nav-close-btn" onClick={() => setMenuIcon(false)}>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <NavLink to="/" className="logo">
          <img
            src={logo}
            alt="logo"
            style={{ width: "190px", height: "50px" }}
            onClick={() => setMenuIcon(false)}
          />
        </NavLink>

        <ul className="navbar-list">
          {navBarLinks.map((link, index) => {
            return (
              <li className="navbar-item" key={index}>
                <NavLink
                  to={link.path}
                  className="navbar-link"
                  onClick={() => setMenuIcon(false)}
                >
                  {link.title}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <ul className="nav-action-list">
          {navActionList.map((list, index) => {
            return (
              <li key={index}>
                <button className="nav-action-btn">
                  <ion-icon name={list.iconName} aria-hidden="true"></ion-icon>

                  <span className="nav-action-text">{list.text}</span>
                  {list.data && (
                    <data
                      className="nav-action-badge"
                      value={list.value}
                      aria-hidden="true"
                    >
                      {list.value}
                    </data>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div
        className={menuIcon ? "overlay active" : "overlay"}
        onClick={() => setMenuIcon(false)}
      ></div>
    </>
  );
};

export default Navbar;
