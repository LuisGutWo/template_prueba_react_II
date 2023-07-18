import { useEffect, useState } from "react";
import { usePizzasContext } from "../context/PizzasContext";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
import { Card } from "react-bootstrap";

export default function Pizza() {
  const [pizza, setPizza] = useState();
  const [loading, setLoading] = useState(true);
  const { addPizza } = usePizzasContext();

  const params = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get("/pizzas.json")
      .then((res) => {
        const pizza = res.data.find((item) => item.id === params.id);
        setPizza(pizza);
      })
      .finally(() => setLoading(false));
  }, [params]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Card className="card-detail">
      <Card.Img
        variant="top"
        src={pizza.img}
        className="img-fluid rounded-start h-100"
        alt="..."
      />
      <Card.Body>
        <Card.Title className="fs-1">{pizza.name} </Card.Title>
        <Card.Text className="card-text">{pizza.desc}</Card.Text>
        <Card.Body style={{ textAlign: "start" }}>
          <h3>Ingredientes:</h3>
          {pizza.ingredients.map((ingredient, index) => (
            <div key={ingredient}>
              🍕 {ingredient}
              {pizza.ingredients.length !== index + 1 && ", "}
            </div>
          ))}
        </Card.Body>

        <h4 className="alert alert-primary text-center d-flex justify-content-between">
          ${pizza.price}
          <NavLink
            className="btn btn-primary"
            to="/"
          >
            Pizzas 🍕
          </NavLink>
          <NavLink
            className="btn btn-danger"
            onClick={() => addPizza(pizza)}
            to="/cart"
          >
            Añadir 🛒
          </NavLink>
        </h4>
      </Card.Body>
    </Card>
  );
}
