import React from "react";
import "animate.css";

import HeroImgAbout from "../../assets/img/finapizza_about_hero.png";
import { FakeLoading } from "../../utils/FakeLoading";
import MainFooter from "../footer/MainFooter";
import { Container } from "react-bootstrap";

const About = () => {
  FakeLoading(200);

  return (
    <>
      <Container fluid>
        <article className="animate__animated animate__fadeIn">
          <img src={HeroImgAbout} alt="" className="about-image" />
          <section className="about-detailed-content">
            <h1>
              Somos... <em>FINA PIZZA!</em>{" "}
            </h1>
            <h6>
              Hacemos pizzas con cariño, dedicación y respeto a los productos
              locales y de estación.
              <br />
              Cansados de que nos cobren tanto por una pizza es que nació Fina
              Pizza, una pizza para todos los gustos y todos los bolsillos.
              <br />
              Tu pizza favorita con los mejores precios del sector...{" "}
            </h6>
          </section>
        </article>
      </Container>
      <MainFooter />
    </>
  );
};

export default About;
