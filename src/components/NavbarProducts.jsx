import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

const NavbarProducts = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <navbar className={`${sticky ? "stickyNavbar" : ""}`}>
      <div className="navbar-button-group">
        <Button className="navbar-button" variant="warning" size="sm">
          PROMOCIONES
        </Button>{" "}
        <Button className="navbar-button" variant="warning" size="sm">
          CLÁSICAS
        </Button>{" "}
        <Button className="navbar-button" variant="warning" size="sm">
          ESPECIALES
        </Button>{" "}
      </div>
    </navbar>
  );
};

export default NavbarProducts;
