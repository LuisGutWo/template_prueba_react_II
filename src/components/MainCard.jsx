import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";

import { usePizzasContext } from "../context/PizzasContext";

export default function MainCard({ item }) {
  const { addPizza } = usePizzasContext();

  return (
    <Card
      className="main-card text-start m-0 col-12 col-md-6 col-xl-3 p-0 overflow-hidden"
      style={{ width: "18rem"}}
      
    >
      <NavLink to={`/pizzas/${item.id}`}>
        <Card.Img
          variant="top"
          className="card-image img-fluid"
          src={item.img}
        />
      </NavLink>
      <Card.Body className="m-0 bg-dark">
        <Card.Title className="card-title text-light fs-2 mt-0 mb-1">
          {item.name}
        </Card.Title>
        <Card.Text>
          <Card.Title className="text-light mb-1">
            {item.ingredients.map((ingredient) => (
              <Card.Subtitle key={ingredient}>🍕 {ingredient}</Card.Subtitle>
            ))}
          </Card.Title>
          <Card.Body className="text-light fs-4 p-0 mt-0">
            ${item.price}
          </Card.Body>
        </Card.Text>

        <section className="text-start">
          <NavLink
            to="/cart"
            className="btn btn-sm btn-warning"
            onClick={() => addPizza(item)}
          >
            Seleccionar 🍕
          </NavLink>
        </section>
      </Card.Body>
    </Card>
  );
}
