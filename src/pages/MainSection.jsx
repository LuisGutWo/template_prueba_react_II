import { useState, useEffect } from "react";
import MainCard from "../components/MainCard";
import Loading from "../utils/Loading";
import { FakeLoading } from "../utils/FakeLoading";
import { NavLink } from "react-router-dom";

export default function MainSection() {
  const [data, setData] = useState([]);
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  const [filter, setFilter] = useState("all");
  const [types, setTypes] = useState([]);
  const [sticky, setSticky] = useState(false);

  FakeLoading(200);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setLoading(true);

    fetch("pizzas.json")
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
        setTypes([...new Set(data.map((item) => item.type))]);
        setLoading(false);
      })

      .finally(() => setLoading(false));
  }, []);

  const searchData = (item, search) => {
    return item.name.toLowerCase().includes(search.toLowerCase());
  };

  const filteredData = () => {
    if (filter === "all") {
      return pizzas.filter((item) => searchData(item, search));
    } else {
      return pizzas.filter((item) => item.type === filter)
      .filter((item) => searchData(item, search));
    }
  };

  const filteredProduct = filteredData().map((item) => (
    <MainCard key={item.id} item={item} />
  ));

  if (loading) return <Loading />;
  if (error) return <div>Error: Pizza no encontrada</div>;

  return (
    <div>
      <nav className={`${sticky ? "stickyNavbar" : ""}`}>
        <div className="navbar-button-group">
          {types.map((type) => (
            <NavLink
              key={type}
              to={`/types/${type}`}
              onClick={() => setFilter(type)}
              className="navbar-button"
              style={{ alignItems: "center" }}
            >
              {type}
            </NavLink>
          ))}
        </div>
      </nav>

      <div className="main-section">{filteredProduct}</div>
    </div>
  );
}
