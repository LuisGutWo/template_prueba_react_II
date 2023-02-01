import { NavLink } from "react-bootstrap";

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          MamaMía 😋
        </NavLink>
        <div className="d-flex gap-2">
          <NavLink className="btn btn-outline-light" to="/pizzas">
            Pizzas
          </NavLink>
          <NavLink className="btn btn-outline-info me-2" to="/cart">
            Cart: $3.99
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
