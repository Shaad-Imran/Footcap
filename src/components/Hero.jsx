import React from "react";
import { heroBanner } from "../assets";

const Hero = () => {
  return (
    <section
      className="section hero"
      style={{ backgroundImage: `url(${heroBanner})` }}
    >
      <div className="container">
        <h2 className="h1 hero-title">
          New Summer <strong>Shoes Collection</strong>
        </h2>

        <p className="hero-text">
          Competently expedite alternative benefits whereas leading-edge
          catalysts for change. Globally leverage existing an expanded array of
          leadership.
        </p>

        <button className="btn btn-primary">
          <span>Shop Now</span>

          <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
        </button>
      </div>
    </section>
  );
};

export default Hero;
