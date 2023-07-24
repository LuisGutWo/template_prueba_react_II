import { Routes, Route } from "react-router-dom";

import Hero from "./pages/Hero";
import Pizzas from "./pages/Pizzas";
import Pizza from "./pages/Pizza";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import MainFooter from "./components/MainFooter";
import Home from "./layout/Home";
import NotFound from "./utils/NotFound";

export default function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/pizzas" element={<Pizzas />} />
          <Route path="/pizzas/:id" element={<Pizza />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <MainFooter />
    </>
  );
}
