import React from "react";
import CollectionCard from "./CollectionCard";
import { collectionList } from "../constants";

const Collection = () => {
  return (
    <section className="section collection">
      <div className="container">
        <ul className="collection-list has-scrollbar">
          {collectionList.map((list, index) => {
            return (
              <li key={index}>
                <CollectionCard img={list.image} category={list.category} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Collection;
