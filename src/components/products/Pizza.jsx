import { useEffect, useState } from "react";
import { useParams, NavLink } from "react-router-dom";
import { Card } from "react-bootstrap";

import Loading from "../../utils/Loading";
import { formatPrice } from "../../utils/formatPrice";
import { usePizzasContext } from "../../context/PizzasContext";
import { FakeLoading } from "../../utils/FakeLoading";
import FavoriteIcon from "@mui/icons-material/Favorite";
import axios from "axios";

export default function Pizza() {
  const [pizza, setPizza] = useState();
  const [loading, setLoading] = useState(true);
  const { addPizza } = usePizzasContext();

  const params = useParams();

  FakeLoading(2000);

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

  if (loading) return <Loading />;

  return (
    <Card className="card-detail animate__animated animate__fadeInLeftBig">
      <Card.Img
        variant="top"
        src={pizza.img}
        className="img-fluid rounded-top h-100"
        alt="Imagen de pizza seleccionada"
      />
      <Card.Body>
        <Card.Title className="fs-1 text-light">{pizza.name} </Card.Title>
        <Card.Text className="card-text text-light">{pizza.desc}</Card.Text>
        <Card.Body className="text-light" style={{ textAlign: "start" }}>
          {pizza.ingredients.map((ingredient, index) => (
            <div key={ingredient}>
              🍕 {ingredient}
              {pizza.ingredients.length !== index + 1 && ", "}
            </div>
          ))}
        </Card.Body>

        <section className="alert alert-warning text-center text-dark d-flex justify-content-center fs-4 gap-2">
          ${formatPrice(pizza.price)}
          <NavLink className="btn btn-danger btn-sm ms-4" to="/">
            MENU 🍕
          </NavLink>
          <NavLink
            className="btn btn-danger btn-sm"
            onClick={() => addPizza(pizza)}
            to="/cart"
          >
            <FavoriteIcon />
          </NavLink>
        </section>
      </Card.Body>
    </Card>
  );
}
