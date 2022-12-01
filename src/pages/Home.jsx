import React from "react";
import Collection from "../components/Collection";
import Cta from "../components/Cta";
import Hero from "../components/Hero";
import InstaPost from "../components/InstaPost";
import NikeSpecial from "../components/NikeSpecial";
import Products from "./Products";
import Services from "./Services";

const Home = () => {
  return (
    <main>
      <article>
        <Hero />
        <Collection />
        <Products />
        <Cta />
        <NikeSpecial />
        <Services />
        <InstaPost />
      </article>
    </main>
  );
};

export default Home;
