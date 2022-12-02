import React from "react";

const CollectionCard = ({ image, category }) => {
  return (
    <div className="collection-card" style={{ backgroundImage: `url(${image})` }}>
      <h3 className="h4 card-title">{category}</h3>

      <a href="#home" className="btn btn-secondary">
        <span>Explore All</span>

        <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
      </a>
    </div>
  );
};

export default CollectionCard;
