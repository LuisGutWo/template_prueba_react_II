import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";

import { usePizzasContext } from "../context/PizzasContext";

export default function MainCard({ item }) {
  const { addPizza } = usePizzasContext();

  return (
    <Card
      className="text-start m-1 col-12 col-md-6 col-xl-3 p-0 overflow-hidden"
      style={{ width: "18rem" }}
    >
      <Card.Img variant="top" className="card-image img-fluid" src={item.img} />
      <Card.Body className="m-0">
        <Card.Title className="card-title text-dark fs-2 mt-0 mb-1">
          {item.name}
        </Card.Title>
        <Card.Text>
          <Card.Title className="text-dark mb-1">
            <h6>Ingredientes: </h6>
            {item.ingredients.map((ingredient) => (
              <Card.Subtitle key={ingredient}>🍕 {ingredient}</Card.Subtitle>
            ))}
          </Card.Title>
          <Card.Body className="text-dark fs-2 p-0 mt-0">${item.price}</Card.Body>
        </Card.Text>

        <section className="text-center">
          <NavLink
            to={`/pizzas/${item.id}`}
            className="btn btn-sm btn-primary m-2"
          >
            Ver detalles 👀
          </NavLink>

          <NavLink
            to="/cart"
            className="btn btn-sm btn-danger m-2"
            onClick={() => addPizza(item)}
          >
            Comprar 🛒
          </NavLink>
        </section>
      </Card.Body>
    </Card>
  );
}
