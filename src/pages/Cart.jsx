import CartItem from "../components/CartItem";
import { usePizzasContext } from "../context/PizzasContext";
import { NavLink } from "react-router-dom";

export default function Cart(id) {
  const { cart, totalCart } = usePizzasContext();

  return (
    <div className="cart-container container overflow-hidden animate__animated animate__zoomIn">
      <h5 className="text-start my-1 text-light">Tu Selección 🍕</h5>
      <hr className="text-light mb-3" />
      <ul className="list-group" key={id}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}

        {cart.length === 0 && (
          <li className="list-group-item text-center">
            <b>Tu Carrito esta vacío</b>
          </li>
        )}

        <li className="list-group-item list-group-item-action active text-start ps-1 d-flex justify-content-between">
          <b className="fs-6">Total: ${totalCart().toLocaleString("de-DE")}</b>
          <NavLink
            className="btn btn-warning animate__animated animate__bounceInRight"
            to="/pizzas"
          >
            Seguir viendo
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
