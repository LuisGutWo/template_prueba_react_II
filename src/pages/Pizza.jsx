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
    <Card className="card-detail animate__animated animate__fadeInLeftBig">
      <Card.Img
        variant="top"
        src={pizza.img}
        className="img-fluid rounded-top h-100"
        alt="..."
      />
      <Card.Body>
        <Card.Title className="fs-1">{pizza.name} </Card.Title>
        <Card.Text className="card-text">{pizza.desc}</Card.Text>
        <Card.Body style={{ textAlign: "start" }}>
          {pizza.ingredients.map((ingredient, index) => (
            <div key={ingredient}>
              🍕 {ingredient}
              {pizza.ingredients.length !== index + 1 && ", "}
            </div>
          ))}
        </Card.Body>

        <section className="alert alert-warning text-center text-dark d-flex justify-content-center gap-2">
          ${pizza.price}
          <NavLink className="btn btn-primary btn-sm ms-4" to="/">
            Pizzas 🍕
          </NavLink>
          <NavLink
            className="btn btn-danger btn-sm"
            onClick={() => addPizza(pizza)}
            to="/cart"
          >
            Añadir 🛒
          </NavLink>
        </section>
      </Card.Body>
    </Card>
  );
}
