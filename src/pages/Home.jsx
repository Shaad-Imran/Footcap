import React from "react";
import Cta from "../components/Cta";
import Hero from "../components/Hero";
import InstaPost from "../components/InstaPost";
import BestSellers from "./BestSellers";
import Products from "./Products";
import Services from "./Services";
import TodaySpecial from "./TodaySpecial";

const Home = () => {
  return (
    <main>
      <article>
        <Hero />
        <Products />
        <BestSellers />
        <Cta />
        <TodaySpecial />
        <Services />
        <InstaPost />
      </article>
    </main>
  );
};

export default Home;
