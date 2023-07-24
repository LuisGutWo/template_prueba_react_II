import React from "react";
import Hero from "../pages/Hero";
import MainSection from "../pages/Pizzas";
import Contact from "../components/Contact"

const Home = () => {
  return (
    <div>
      <Hero />
      <MainSection />
      <Contact />
    </div>
  );
};

export default Home;
