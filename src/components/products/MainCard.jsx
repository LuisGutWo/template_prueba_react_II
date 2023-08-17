import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { usePizzasContext } from "../../context/PizzasContext";
import { formatPrice } from "../../utils/formatPrice";

export default function MainCard({ item }) {
  const { addPizza } = usePizzasContext();

  return (
    <Card
      className="main-card text-start m-0 col-12 col-md-6 col-xl-3 p-0 overflow-hidden"
      style={{ width: "18rem" }}
      border="dark"
    >
      <NavLink to={`/pizzas/${item.id}`}>
        <Card.Img
          variant="top"
          className="card-image img-fluid"
          src={item.img}
        />
      </NavLink>
      <Card.Body className="m-0 card-body">
        <Card.Title className="card-title text-light fs-5">
          {item.name}
        </Card.Title>
        <Card.Text>
          {item.ingredients.map((ingredient) => (
            <Card.Subtitle className="text-light card-ingredients" key={ingredient}>
              🍕 {ingredient}
            </Card.Subtitle>
          ))}
        </Card.Text>
        <Card.Footer className="card-price">
          ${formatPrice(item.price)}
        </Card.Footer>
        <NavLink
          to="/cart"
          className="btn btn-sm btn-warning fw-bolder"
          onClick={() => addPizza(item)}
        >
          AGREGAR 🍕
        </NavLink>
      </Card.Body>
    </Card>
  );
}
