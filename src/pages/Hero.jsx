import { Margin } from "@mui/icons-material";
import Carousel from "react-bootstrap/Carousel";

function Hero() {
  return (
    <Carousel fade data-bs-theme="dark" controls={false} interval={6000} pause="hover">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/poster_1_hero.png?alt=media&token=338deba6-5b33-4411-a824-c5680269aff2"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/poster_2_hero.png?alt=media&token=660ac6d7-1106-461d-bfd2-63df12921ee0"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/poster_3_hero.png?alt=media&token=722f2427-1a27-46b0-afd0-433bd76b654a"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/poster_4_hero.png?alt=media&token=849e822f-8d47-4cf8-86bd-e249004586eb"
          alt="Fourth slide"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default Hero;
