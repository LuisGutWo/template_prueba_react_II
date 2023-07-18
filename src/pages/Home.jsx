import Pizzas from "../pages/Pizzas";

export default function Home() {
  return (
    <>
      <div className="main-hero bg-black">
        <div className="hero-container">
          <img
            src="https://firebasestorage.googleapis.com/v0/b/login-huellitas.appspot.com/o/fondo_pizzas_2.jpg?alt=media&token=4e1c39b3-4149-4e57-836c-20caaf30083b"
            alt=""
            className="hero-img"
          />
        </div>
        <div className="hero-text">
          <h1 className="display-3">
            <b>¡Pizzeria Fina Pizza!</b>
          </h1>
          <p className="text-center">
            <b>¡Una pizza distinta hecha a tu medida!</b>
          </p>
          <hr />
        </div>
      </div>

      <div className="m-5">
        <Pizzas />
      </div>
    </>
  );
}
