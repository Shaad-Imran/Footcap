import React from "react";
import { instaPicture } from "../constants";

const InstaPost = () => {
  return (
    <section className="section insta-post">
      <ul className="insta-post-list has-scrollbar">
        {instaPicture.map((pic, index) => {
          return (
            <li className="insta-post-item" key={index}>
              <img
                src={pic}
                // style={{ width: "100px", height: "100px", loading: "lazy" }}
                alt="Instagram post"
                className="insta-post-banner image-contain"
              />

              <a href="#home" className="insta-post-link">
                <ion-icon name="logo-instagram"></ion-icon>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default InstaPost;
