import React from "react";

const ServiceCard = ({ img, title, text, price, priceValue }) => {
  return (
    <li className="service-item">
      <div className="service-card">
        <div className="card-icon">
          <img
            src={img}
            style={{ width: "53px", height: "28px", loading: "lazy" }}
            alt="Service icon"
          />
        </div>

        <div>
          <h3 className="h4 card-title">{title}</h3>

          <p className="card-text">
            {text} {price && <span> {priceValue}</span>}
          </p>
        </div>
      </div>
    </li>
  );
};

export default ServiceCard;
