import { NavLink } from "react-router-dom";

import CartItem from "../cart/CartItem";
import { usePizzasContext } from "../../context/PizzasContext";
import { formatPrice } from "../../utils/formatPrice";
import { Button } from "react-bootstrap";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import PizzaSadImg from "../../assets/img/pizza_triste.jpg";
import MainFooter from "../footer/MainFooter";

export default function Cart(id) {
  const { cart, totalCart, onCleanCart } = usePizzasContext();

  return (
    <>
      <section className="cart-container container overflow-hidden animate__animated animate__zoomIn">
        <h5 className="text-center my-1 text-light">Tu Selección 🍕</h5>
        <hr className="text-light mb-3" />
        <ul className="list-group" key={id}>
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
          {cart.length === 0 && (
            <>
              <li className="list-group-item text-center">
                <b>Tu Carrito esta vacío</b>
                <img className="img-thumbnail" src={PizzaSadImg} alt="" />
              </li>
            </>
          )}
          {cart.length !== 0 ? (
            <Button variant="secondary" size="sm" onClick={onCleanCart}>
              <DeleteForeverIcon />
            </Button>
          ) : null}
          <li className="list-group-item bg-danger border-0 list-group-item-action active text-start ps-1 d-flex justify-content-between">
            <b className="fs-6">Total: ${formatPrice(totalCart())}</b>
            <NavLink
              className="btn btn-warning animate__animated animate__bounceInRight"
              to="/pizzas"
            >
              Seguir viendo
            </NavLink>
          </li>
        </ul>
      </section>
      <MainFooter />
    </>
  );
}
