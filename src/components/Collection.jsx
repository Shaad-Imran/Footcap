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
                <CollectionCard {...list} />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Collection;
