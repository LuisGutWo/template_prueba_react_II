import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";
import "../../css/styles.scss";

const ScrollToTop = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return function cleanup() {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 300) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 300) {
      setShowScroll(false);
    }
  };
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <div className="top-to-btm">
      <Link to="section1" smooth={true} duration={600}>
        <FaAngleUp
          className="btn-arrow-up icon-style"
          onClick={scrollToTop}
          style={{ display: showScroll ? "flex" : "none" }}
        />
      </Link>
    </div>
  );
};

export default ScrollToTop;
