import React from "react";
import { specialBanner } from "../assets";
import { productList } from "../constants";
import ProductCard from "./ProductCard";

const NikeSpecial = () => {
  return (
    <section className="section special">
      <div className="container">
        <div
          className="special-banner"
          style={{ backgroundImage: `url(${specialBanner})` }}
        >
          <h2 className="h3 banner-title">New Trend Edition</h2>

          <a href="#home" className="btn btn-link">
            <span>Explore All</span>

            <ion-icon
              name="arrow-forward-outline"
              aria-hidden="true"
            ></ion-icon>
          </a>
        </div>

        <div className="special-product">
          <h2 className="h2 section-title">
            <span className="text">Nike Special</span>

            <span className="line"></span>
          </h2>
          <ul className="has-scrollbar">
            {productList[1].links.map((currItem, index) => {
              return (
                <li key={index} className="product-item">
                  <ProductCard {...currItem} />
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default NikeSpecial;
