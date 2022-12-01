import React from "react";
import { ctaList } from "../constants";

const Cta = () => {
  return (
    <section className="section cta">
      <div className="container">
        <ul className="cta-list">
          {ctaList.map((item, index) => {
            return (
              <li key={index}>
                <div
                  className="cta-card"
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  <p className="card-subtitle">{item.subTitle}</p>

                  <h3 className="h2 card-title">{item.title}</h3>

                  <a href="#home" className="btn btn-link">
                    <span>Shop Now</span>

                    <ion-icon
                      name="arrow-forward-outline"
                      aria-hidden="true"
                    ></ion-icon>
                  </a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Cta;
