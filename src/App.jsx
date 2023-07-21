import { Routes, Route } from "react-router-dom";

import Hero from "./pages/Hero";
import MainSection from "./pages/MainSection";
import Pizza from "./pages/Pizza";
import Cart from "./pages/Cart";
import Header from "./components/Header";
import MainFooter from "./components/MainFooter";
import Home from "./layout/Home";


export default function App() {
  return (
    <>
      <Header />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hero" element={<Hero />} />
          <Route path="/pizzas" element={<MainSection />} />
          <Route path="/pizzas/:id" element={<Pizza />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<h1>Not Found 404</h1>} />
        </Routes>
      </div>
      <MainFooter />
    </>
  );
}
