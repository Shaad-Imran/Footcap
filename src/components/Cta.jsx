import React from "react";
import { ctaList } from "../constants";
import CtaCard from "./CtaCard";

const Cta = () => {
  return (
    <section className="section cta">
      <div className="container">
        <ul className="cta-list">
          {ctaList.map((currItem, index) => {
            return <CtaCard key={index} {...currItem} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Cta;
