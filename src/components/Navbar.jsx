import { NavLink, Link } from "react-router-dom";
import { usePizzasContext } from "../context/PizzasContext";
import { formatPrice } from "../utils/formatPrice";

export default function Navbar() {
  const { totalCart } = usePizzasContext();

  return (
    <nav className="navbar fixed-top navbar-main bg-black p-3 horizontal-nav full-width horizontalNav-notprocessed">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src="src/assets/img/2.png"
            className="main-logo"
            alt=""
          />
        </Link>
        <NavLink className="btn btn-outline-info me-2" to="/cart">
          🛒 ${formatPrice(totalCart())}
        </NavLink>
      </div>
    </nav>
  );
}
