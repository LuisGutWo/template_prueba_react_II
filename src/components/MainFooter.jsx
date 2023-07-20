import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const MainFooter = () => {
  return (
    <footer>
      <Container className="footer-container">
        <Row>
          <Col className="footer-content">
            <img
              src={
                "src/assets/img/2.png"
              }
              width="50%"
              height="50%"
              className="d-inline-block align-top"
              alt=""
            />
            <p className="footer-text">
              Pizzas hechas con cariño y respetando siempre al media ambiente y los productos que de ella obtenemos <br /> Se realizan
              envíos a todo Chile.{" "}
            </p>
            <img
              src={
                "https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/tarjetas_logo.png?alt=media&token=6e33bc30-938c-4589-b0af-ea5750ffd5c7"
              }
              width="150"
              height="45"
              className="d-inline-block align-top"
              alt=""
            />
          </Col>
          <Col className="footer-content">
            <h5 className="mt-3">INFORMACIÓN</h5>
            <p className="footer-text">
              Envíos y Entregas
              <br />
              Devolución y Cambios
              <br />
              Política de Garantía
              <br />
              Política de Privacidad{" "}
            </p>
          </Col>
          <Col className="footer-content">
            <h5 className="mt-3">CONTACTO</h5>
            <p className="footer-text">
              San Pablo 3610, local 2, Quinta Normal - Santiago
              <br />
              +569 36352145 | +569 98451212
              <br />
              @finapizza.cl
              <br />
            </p>
          </Col>
          <Col className="footer-content">
            <img
              src="src/assets/img/pizza_7.jpg"
              alt=""
              className="footer-image"
            />
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MainFooter;
