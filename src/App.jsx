import { Routes, Route } from "react-router-dom";

import Hero from "./components/hero/Hero";
import Pizzas from "./components/products/Pizzas";
import Pizza from "./components/products/Pizza";
import Cart from "./components/cart/Cart";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import NotFound from "./utils/NotFound";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import MainFooter from "./components/footer/MainFooter";

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
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <MainFooter />
    </>
  );
}
