import React from "react";
import { useNavigate } from "react-router-dom";
import Themechanger from "./Themechanger";
import "./Theme.css";
import Modalitem from "./Modalitem";

const Navbar = ({ count, cart, username }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
    navigate("/login");
  };

  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <button
            data-mdb-collapse-init
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarButtonsExample"
            aria-controls="navbarButtonsExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarButtonsExample">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <nav className="navbar navbar-expand-lg navbar-light">
                  <div className="container-fluid">
                    <ul className="navbar-nav">
                      <li className="nav-item">
                        <a className="nav-link" href="#">
                          <span className="badge badge-pill bg-danger">
                            {count.length}
                          </span>
                          <span>
                            <span
                              className="fas fa-shopping-cart"
                              style={{ marginLeft: "10px" }}
                            >
                              <Modalitem cart={cart} />
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <div
                className="user-info"
                style={{ display: "flex", alignItems: "center" }}
              >
                <span
                  className="fas fa-user"
                  style={{ marginRight: "10px" }}
                ></span>
                <span style={{ marginRight: "20px" }}>{username}</span>
              </div>
              <button
                data-mdb-ripple-init
                type="button"
                className="btn btn-primary me-auto mb-2 mb-lg-0"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          </div>
          <Themechanger Size={90} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
