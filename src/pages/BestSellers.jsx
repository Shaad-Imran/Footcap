import React from "react";
import ProductCard from "../components/ProductCard";
import { filterList } from "../constants";
import { productList } from "../constants";

const BestSellers = () => {
  return (
    <section className="section product">
      <div className="container">
        <h2 className="h2 section-title">Bestsellers Products</h2>

        <ul className="filter-list">
          {filterList.map((list, index) => {
            return (
              <li key={index}>
                <button
                  className={list.active ? "filter-btn active" : "filter-btn"}
                >
                  {list.brand}
                </button>
              </li>
            );
          })}
        </ul>

        <ul className="product-list">
          {productList[0].links.map((item, index) => {
            return (
              <li key={index} className="product-item">
                <ProductCard
                  img={item.img}
                  gender={item.gender}
                  title={item.title}
                  badge={item.badge}
                  badgeValue={item.badgeTitle}
                  price={item.price}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default BestSellers;
