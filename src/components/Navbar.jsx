import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeNav, setActiveNav] = useState("/");
  return (
    <nav>
      <h1 className="logo">#todo</h1>
      <div className="nav-links">
        <Link
          to="/"
          onClick={() => setActiveNav("/")}
          className={activeNav === "/" ? "active" : ""}
        >
          All
        </Link>
        <Link
          to="/active"
          onClick={() => setActiveNav("/active")}
          className={activeNav === "/active" ? "active" : ""}
        >
          Active
        </Link>
        <Link
          to="/completed"
          onClick={() => setActiveNav("/completed")}
          className={activeNav === "/completed" ? "active" : ""}
        >
          Completed
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
