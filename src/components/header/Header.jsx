import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import { usePizzasContext } from "../../context/PizzasContext";
import { formatPrice } from "../../utils/formatPrice";

import LogoRedPng from "../../assets/img/logo_red.png";
import "animate.css";

export default function Header() {
  const { totalCart } = usePizzasContext();

  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar-main">
          <Container fluid>
            <Navbar.Brand href="#home">
              <Link className="navbar-brand" to="/">
                <img
                  src={LogoRedPng}
                  className="main-logo animate__animated animate__rubberBand"
                  alt="Fina Pizza Logo"
                />
              </Link>
            </Navbar.Brand>
            <NavLink
              className="btn btn-outline-warning header-favorite-button animate__animated animate__zoomIn"
              to="/cart"
            >
              ❤ ${formatPrice(totalCart())}
            </NavLink>

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
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              style={{ border: "0", color: "black", borderRadius: "6px", backgroundColor: "inherit" }}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ width: "80%", backgroundColor: "black" }}
            >
              <Offcanvas.Header
                closeButton
                style={{ height: "20%", padding: "0 1.2rem 0 0.5rem" }}
              >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img
                    src={LogoRedPng}
                    width="165"
                    height="150"
                    className="d-inline-block align-top"
                    alt="React Bootstrap logo"
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <NavLink to="/pizzas" className="offcanvas-action1">
                    MENU
                  </NavLink>
                  <NavLink to="/about" className="offcanvas-action2">
                    QUIENES SOMOS
                  </NavLink>
                  <NavLink to="/contact" className="offcanvas-action3">
                    UBICACIÓN
                  </NavLink>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}
