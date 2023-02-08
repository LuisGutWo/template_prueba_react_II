import Pizzas from "../pages/Pizzas";

export default function Home() {
  return (
    <>
      <div className="main-hero bg-black">
        <div className="hero-container">
          <img
            src="./src/assets/img/fondo_pizzas_2.jpg"
            alt=""
            className="hero-img"
          />
        </div>
        <div className="hero-text">
          <h1 className="display-3">
            <b>¡Pizzeria Mamma Mia!</b>
          </h1>
          <p className="text-center">
            <b>¡Tenemos las mejores pizzas que podrás imaginar!</b>
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
