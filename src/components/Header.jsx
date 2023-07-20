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
              src="src/assets/img/2.png"
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
      </Container>
    </Navbar>
  );
}
