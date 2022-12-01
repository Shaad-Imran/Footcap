import React from "react";
import { cardActionBtnList } from "../constants";

const ProductCard = ({ img, gender, title, badge, badgeValue, price }) => {
  return (
    <div className="product-card" tabIndex="0">
      <figure className="card-banner">
        <img
          src={img}
          // style={{ width: "312px", height: "350px", loading: "lazy" }}
          alt={title}
          className="image-contain"
        />

        {badge && <div className="card-badge">{badgeValue}</div>}

        <ul className="card-action-list">
          {cardActionBtnList.map((list, index) => {
            return (
              <li className="card-action-item" key={index}>
                <button
                  className="card-action-btn"
                  aria-labelledby={list.ariaLabelledby}
                >
                  <ion-icon name={list.iconName}></ion-icon>
                </button>

                <div className="card-action-tooltip" id={list.ariaLabelledby}>
                  {list.title}
                </div>
              </li>
            );
          })}
        </ul>
      </figure>

      <div className="card-content">
        <div className="card-cat">
          <a href="#home" className="card-cat-link">
            {gender}
          </a>
        </div>

        <h3 className="h3 card-title">
          <a href="#home">{title}</a>
        </h3>

        <data className="card-price" value={price}>
          ${price}
        </data>
      </div>
    </div>
  );
};

export default ProductCard;
