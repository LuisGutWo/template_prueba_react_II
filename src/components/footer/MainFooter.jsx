import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import InstagramIcon from '@mui/icons-material/Instagram';
import LogoBlackPng from "../../assets/img/logo_black.png"
import ThumbnailLogoBlack from  "../../assets/img/thumbnail_finapizza_black&white.png"

const MainFooter = () => {
  return (
    <footer>
      <Container className="footer-container">
        <Row>
          <Col className="footer-content">
            <img
              src={LogoBlackPng}
              width="60%"
              height="60%"
              className="d-inline-block align-top"
              alt=""
            />
            <p className="footer-text">
              Pizzas hechas con cariño y respetando siempre al medio ambiente y a los productos que de ella obtenemos.
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
            <h5 className="mt-3 mb-3 text-center">SÍGUENOS</h5>
            <a href="https://www.instagram.com/finapizzachile/?hl=es" className="footer-text-icon">
              <InstagramIcon />
            </a>
            <p className="text-center">#finapizzachile</p>
          </Col>
          <Col className="footer-content">
            <h5 className="mt-3">CORPORATIVO</h5>
            <p className="footer-text-corporativo">
              Envíos y Entregas
              <br />
              Términos y condiciones
            </p>
          </Col>
          <Col className="footer-content">
            <img
              src={ThumbnailLogoBlack} 
              alt=""
              className="footer-image"
            />
          </Col>
        </Row>
      </Container>
      <div className="copyright-footer">Copyright © 2023 | LGwebmedia, Inc.</div>
    </footer>
  );
};

export default MainFooter;
