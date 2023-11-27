import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { usePizzasContext } from "../../context/PizzasContext";
import { formatPrice } from "../../utils/formatPrice";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";

export default function MainCard({ item }) {
  const { addPizza } = usePizzasContext();
  const [modalShow, setModalShow] = useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            La pizza <b>{item.name}</b> fue agregada a favoritos...
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            El carrito de favoritos te ayuda a seleccionar mejor la FinaPizza
            para este dia.
          </p>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          <NavLink to="/cart" onClick={props.onHide} className="btn btn-danger">
            FAVORITOS
          </NavLink>
        </Modal.Footer>
      </Modal>
    );
  }

  function handleProductButton() {
    addPizza(item);
    setModalShow(true);
  }

  return (
    <Card
      className="main-card text-start m-0 col-12 col-md-6 col-xl-3 p-0 overflow-hidden"
      style={{ width: "18rem" }}
    >
      <NavLink to={`/pizzas/${item.id}`}>
        <Card.Img
          variant="top"
          className="card-image img-fluid"
          src={item.img}
        />
      </NavLink>
      <Card.Body className="m-0 card-body">
        <Card.Title className="card-title text-light">
          {item.name}
        </Card.Title>
        <Card.Text>
          {item.ingredients.map((ingredient) => (
            <Card.Subtitle
              className="text-light card-ingredients"
              key={ingredient}
            >
              🍕 {ingredient}
            </Card.Subtitle>
          ))}
        </Card.Text>
        <Card.Footer className="card-price">
          ${formatPrice(item.price)}
        </Card.Footer>
        <Button
          className="btn btn-sm btn-warning fw-bolder"
          onClick={handleProductButton}
        >
          AGREGAR 🍕
        </Button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </Card.Body>
    </Card>
  );
}
