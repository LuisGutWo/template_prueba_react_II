import React from "react";
import { useState, useEffect } from "react";
import { NavLink } from "react-bootstrap";

import MainCard from "../components/MainCard";
import Loading from "../utils/Loading";
import { FakeLoading } from "../utils/FakeLoading";
import { motion } from "framer-motion";

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
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { delay: 1, duration: 1 },
          }}
          exit={{
            opacity: 0.5,
            transition: { duration: 0.7 },
          }}
          className="navbar-button-group"
        >
          {types.map((type) => (
            <NavLink
              key={type}
              to={`/types/${type}`}
              onClick={() => setFilter(type)}
              className="navbar-button"
            >
              {type}
            </NavLink>
          ))}
        </motion.div>
      </main>
      <div className="main-section">
        {filteredData().map((item) => (
          <div key={item.id} className="">
            <MainCard key={item.id} item={item} />
          </div>
        ))}
      </div>
    </>
  );
};

export default MainProductsList;
