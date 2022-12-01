import React from "react";
import { logo } from "../assets";
import { footerLink } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top section">
        <div className="container">
          <div className="footer-brand">
            <a href="#home" className="logo">
              <img
                src={logo}
                alt="logo"
                style={{
                  width: "160px",
                  height: "50px",
                }}
              />
            </a>

            <ul className="social-list">
              {footerLink[0].link.map((social, index) => {
                return (
                  <li key={index}>
                    <a href="#home" className="social-link">
                      <ion-icon name={social.iconName}></ion-icon>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="footer-link-box">
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Contact Us</p>
              </li>

              <li>
                <address className="footer-link">
                  <ion-icon name="location"></ion-icon>

                  <span className="footer-link-text">
                    2751 S Parker Rd, Aurora, CO 80014, United States
                  </span>
                </address>
              </li>

              <li>
                <a href="tel:+557343673257" className="footer-link">
                  <ion-icon name="call"></ion-icon>

                  <span className="footer-link-text">+557343673257</span>
                </a>
              </li>

              <li>
                <a href="mailto:footcap@help.com" className="footer-link">
                  <ion-icon name="mail"></ion-icon>

                  <span className="footer-link-text">footcap@help.com</span>
                </a>
              </li>
            </ul>

            <ul className="footer-list">
              {footerLink[1].link.map((item, index) => {
                return (
                  <li key={index}>
                    {item.heading && (
                      <p className="footer-list-title">{item.title}</p>
                    )}
                    <a href="#home" className="footer-link">
                      <ion-icon name="chevron-forward-outline"></ion-icon>

                      <span className="footer-link-text">{item.title}</span>
                    </a>
                  </li>
                );
              })}
            </ul>

            <div className="footer-list">
              <p className="footer-list-title">Opening Time</p>

              <table className="footer-table">
                <tbody>
                  {footerLink[2].link.map((item, index) => {
                    return (
                      <tr className="table-row" key={index}>
                        <th className="table-head" scope="row">
                          {item.day}:
                        </th>

                        <td className="table-data">{item.time}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>

            <div className="footer-list">
              <p className="footer-list-title">Newsletter</p>

              <p className="newsletter-text">
                Authoritatively morph 24/7 potentialities with error-free
                partnerships.
              </p>

              <form action="" className="newsletter-form">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email Address"
                  className="newsletter-input"
                />

                <button type="submit" className="btn btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            &copy; {new Date().getFullYear()}{" "}
            <a href="#home" className="copyright-link">
              Shaad Imran
            </a>
            . All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
