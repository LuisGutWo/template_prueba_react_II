import { usePizzasContext } from "../../context/PizzasContext";
import { formatPrice } from "../../utils/formatPrice";

export default function CartItem({ item }) {
  const { addPizza, removePizza, findItemCount } = usePizzasContext();

  return (
    <li className="list-group-item">
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-center">
          <img className="m-0" src={item.img} alt="Pizza" width="60" />
          <p className="m-1 fs-6">{item.name}</p>
        </div>
        <div className="d-flex gap-1">
          <small className="text-muted p-2">${formatPrice(item.price)}</small>
          <button
            className="btn btn-outline-danger btn-sm"
            onClick={() => removePizza(item)}
          >
            -
          </button>
          <button className="btn btn-outline-dark btn-sm disabled">
            {findItemCount(item.id)}
          </button>
          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => addPizza(item)}
          >
            +
          </button>
        </div>
      </div>
    </li>
  );
}
