import React from "react";

const About = () => {
  return (
    <article>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/quienes_somos.png?alt=media&token=300f8dc5-7f64-4a58-9d86-0e850a25e7f4"
        alt=""
        className="about-image"
      />
      <section className="about-detailed-content">
        <h1>SOMOS FINA PIZZA</h1>
        <h6>
          Las hacemos con todo el cariño que nuestros clientes se merecen y
          cansados de que nos cobren tanto por una pizza es que nació Fina
          Pizza, una pizza para todos los gustos y todos los bolsillos. Tu pizza
          favorita con los mejores precios del sector...{" "}
        </h6>
      </section>
    </article>
  );
};

export default About;
