import Carousel from "react-bootstrap/Carousel";

function Hero() {
  return (
    <Carousel fade data-bs-theme="dark" controls={false} interval={6000} pause="hover">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="public/img/poster_1_hero.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="public/img/poster_2_hero.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="public/img/poster_3_hero.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="public/img/poster_4_hero.png"
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;
