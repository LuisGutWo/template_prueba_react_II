import React from "react";
import Hero from "../hero/Hero";
import Pizzas from "../products/Pizzas";
import MainFooter from "../footer/MainFooter";


const Home = () => {
  return (
    <>
      <Hero />
      <Pizzas />
      <MainFooter />
    </>
  );
};

export default Home;
