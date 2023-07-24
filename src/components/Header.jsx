import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { NavLink, Link } from "react-router-dom";
import { usePizzasContext } from "../context/PizzasContext";
import { formatPrice } from "../utils/formatPrice";

export default function Header() {
  const navigate = useNavigate();
  const { totalCart } = usePizzasContext();

  return (
    <Navbar className="navbar navbar-main horizontal-nav full-width horizontalNav-notprocessed">
      <Container className="header-main-container">
        <Navbar.Brand href="#home">
          <Link className="navbar-brand" to="/">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/2.png?alt=media&token=ec97873a-d384-43fc-bac5-688a3080861d"
              width="30"
              height="30"
              className="main-logo d-inline-block align-top"
              alt="Fina Pizza Logo"
            />
          </Link>
        </Navbar.Brand>
        <NavLink className="btn btn-outline-warning me-2" to="/cart">
          ❤ ${formatPrice(totalCart())}
        </NavLink>
        <a
          rel=""
          href="https://api.whatsapp.com/send?phone=56920390272&text=Hola, bienvenido a Huellitas. En que podemos ayudarte...😀"
          className="btn-wsp"
          target="_blank"
        >
          <img
            src="https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/wa_chat_icon.png?alt=media&token=ce6cb743-6822-4223-9279-0bdd5efe6677"
            alt=""
            className="wsp-image"
          />
        </a>
      </Container>
    </Navbar>
  );
}
