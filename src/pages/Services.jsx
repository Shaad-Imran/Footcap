import React from "react";
import ServiceCard from "../components/ServiceCard";
import { serviceList } from "../constants";

const Services = () => {
  return (
    <section className="section service">
      <div className="container">
        <ul className="service-list">
          {serviceList.map((currItem, index) => {
            return <ServiceCard key={index} {...currItem} />;
          })}
        </ul>
      </div>
    </section>
  );
};

export default Services;
