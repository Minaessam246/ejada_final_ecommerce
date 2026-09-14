import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md bg-white bg-md-transparent">
      <div className="container-fluid p-0">

        <a className="navbar-brand fw-bold fs-3" href="#">
          StepUp
        </a>

        <button
          className="navbar-toggler mx-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="navbarContent"
        >
          <ul className="navbar-nav mx-auto gap-md-4 text-center">
            <li className="nav-item">
              <a className="nav-link text-dark fs-5" href="#">
                Home
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-dark fs-5" href="#">
                Shop
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-dark fs-5" href="#">
                Collection
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-dark fs-5" href="#">
                Customize
              </a>
            </li>

            <Link className="nav-item text-decoration-none" to={"dashboard"}>
              <a className="nav-link text-dark fs-5" href="#">
                Dashboard
              </a>
            </Link>
          </ul>
        </div>

        <div className="align-items-center gap-3 fs-5 mx-2 d-none d-md-flex">
          <i className="bi bi-search"></i>
          <i className="bi bi-cart"></i>
        </div>

      </div>
    </nav>
  );
}
