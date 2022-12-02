import React from "react";

const CtaCard = ({ img, subTitle, title }) => {
  return (
    <li>
      <div className="cta-card" style={{ backgroundImage: `url(${img})` }}>
        <p className="card-subtitle">{subTitle}</p>

        <h3 className="h2 card-title">{title}</h3>

        <a href="#home" className="btn btn-link">
          <span>Shop Now</span>

          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
        </a>
      </div>
    </li>
  );
};

export default CtaCard;
