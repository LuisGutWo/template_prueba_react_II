import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-bootstrap";

import MainCard from "../components/MainCard";
import Loading from "../utils/Loading";
import { FakeLoading } from "../utils/FakeLoading";
import 'animate.css';

const MainProductsList = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [types, setTypes] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(false);
  const [sticky, setSticky] = useState(false);

  FakeLoading(200);

  useEffect(() => {
    setLoading(true);

    fetch("pizzas.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setTypes([...new Set(data.map((item) => item.type))]);
        setLoading(false);
      })

      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const searchData = (item, search) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  };

  const filteredData = () => {
    if (filter === "all") {
      return data.filter((item) => searchData(item, search));
    } else {
      return data
        .filter((item) => item.type === filter)
        .filter((item) => searchData(item, search));
    }
  };

  if (loading) return <Loading />;

  return (
    <>
      <main className={`${sticky ? "sticky" : ""}`}>
        {/* Category Navbar */}
        <section className="navbar-button-group animate__animated animate__flipInY">
          {types.map((type) => (
            <NavLink
              key={type}
              to={`/types/${type}`}
              onClick={() => setFilter(type)}
              className="navbar-button animate__animated animate__zoomIn"
            >
              {type}
            </NavLink>
          ))}
        </section>
      </main>
      <div className="main-section">
        {filteredData().map((item) => (
          <div key={item.id} className="animate__animated animate__flipInY">
            <MainCard key={item.id} item={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default MainProductsList;
