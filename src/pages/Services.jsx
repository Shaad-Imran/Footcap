import React from "react";
import { serviceList } from "../constants";

const Services = () => {
  return (
    <section className="section service">
      <div className="container">
        <ul className="service-list">
          {serviceList.map((list, index) => {
            return (
              <li className="service-item" key={index}>
                <div className="service-card">
                  <div className="card-icon">
                    <img
                      src={list.img}
                      style={{ width: "53px", height: "28px", loading: "lazy" }}
                      alt="Service icon"
                    />
                  </div>

                  <div>
                    <h3 className="h4 card-title">{list.title}</h3>

                    <p className="card-text">
                      {list.text}{" "}
                      {list.price && <span> {list.priceValue}</span>}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Services;
