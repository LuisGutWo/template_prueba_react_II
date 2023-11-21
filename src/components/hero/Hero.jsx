import Carousel from "react-bootstrap/Carousel";
import FirstPromoFlyer from "../../assets/img/flyer_promo_1.jpg";
import SecondPromoFlyer from "../../assets/img/flyer_promo_2.jpg";
import { Container } from "react-bootstrap";

function Hero() {
  return (
    <>
      <Container fluid>
        <Carousel
          fade
          data-bs-theme="dark"
          controls={false}
          interval={6000}
          pause="hover"
          className="animate__animated animate__zoomIn"
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={FirstPromoFlyer}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={SecondPromoFlyer}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </Container>
    </>
  );
}

export default Hero;
