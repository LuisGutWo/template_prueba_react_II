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
      {/* whatsapp button */}
      <section
        rel=""
        href="https://api.whatsapp.com/send?phone=56942920997&text=Hola, somos FinaPizza, En que podemos ayudarte...😀"
        className="btn-wsp"
        target="_blank"
      >
        <img
          src="https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/wa_chat_icon.png?alt=media&token=ce6cb743-6822-4223-9279-0bdd5efe6677"
          alt=""
          className="wsp-image main-logo animate__animated animate__fadeIn"
        />
      </section>
    </>
  );
};

export default Home;
