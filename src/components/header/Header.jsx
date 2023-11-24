import { NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import { usePizzasContext } from "../../context/PizzasContext";
import { formatPrice } from "../../utils/formatPrice";

import LogoBlackPng from "../../assets/img/logo_black.png";
import LogoRedPng from "../../assets/img/logo_red.png";
import "animate.css";

export default function Header() {
  const { totalCart } = usePizzasContext();

  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar-main">
          <Navbar.Brand className="navbar-brand">
            <Link to="/">
              <img src={LogoBlackPng} alt="Fina Pizza Logo" />
            </Link>
          </Navbar.Brand>
          <NavLink
            className="btn btn-outline-warning header-favorite-button animate__animated animate__zoomIn"
            to="/cart"
          >
            ❤ ${formatPrice(totalCart())}
          </NavLink>

          <Navbar.Toggle
            aria-controls={`offcanvasNavbar-expand-${expand}`}
            style={{
              border: "0",
              color: "black",
              borderRadius: "6px",
              backgroundColor: "inherit",
            }}
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
                  alt="Fina pizza red Logo"
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
        </Navbar>
      ))}
    </>
  );
}
