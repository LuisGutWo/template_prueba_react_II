import { useNavigate, NavLink, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { usePizzasContext } from "../context/PizzasContext";
import { formatPrice } from "../utils/formatPrice";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import "animate.css";

export default function Header() {
  const navigate = useNavigate();
  const { totalCart } = usePizzasContext();

  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} expand={expand} className="navbar-main">
          <Container fluid>
            <Navbar.Brand href="#home">
              <Link
                className="navbar-brand animate__animated animate__zoomIn"
                to="/"
              >
                <img
                  src="https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/2.png?alt=media&token=ec97873a-d384-43fc-bac5-688a3080861d"
                  className="main-logo"
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
            <a
              rel=""
              href="https://api.whatsapp.com/send?phone=56920390272&text=Hola, bienvenido a Huellitas. En que podemos ayudarte...😀"
              className="btn-wsp"
              target="_blank"
            >
              <img
                src="https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/wa_chat_icon.png?alt=media&token=ce6cb743-6822-4223-9279-0bdd5efe6677"
                alt=""
                className="wsp-image main-logo animate__animated animate__fadeIn"
              />
            </a>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              style={{ border: "0", color: "transparent" }}
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              style={{ width: "70%" }}
            >
              <Offcanvas.Header
                closeButton
                style={{ height: "20%", padding: "0 1.2rem 0 0.5rem" }}
              >
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/fina_pizza_white_logo.png?alt=media&token=2fed6d24-8e76-4379-9b7f-00a86461ce13"
                    width="160"
                    height="100"
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
