import React from "react";

const QUICK_LINKS = ["Home", "Shop", "Category", "Contact", "Privacy"];

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-5 pb-4 px-4 px-lg-5">
      <div className="row g-5">

        <div className="col-12 col-lg-4">
          <h2 className="fw-bold display-6">StepUp</h2>

          <p className="text-secondary mt-3" style={{ maxWidth: "360px" }}>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do
            Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua.
          </p>

          <div className="d-flex gap-3 mt-4">
            <a
              href="#"
              className="bg-white text-dark rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "42px", height: "42px" }}
              aria-label="Facebook"
            >
              <i className="bi bi-facebook"></i>
            </a>
            <a
              href="#"
              className="bg-white text-dark rounded-circle d-flex align-items-center justify-content-center"
              style={{ width: "42px", height: "42px" }}
              aria-label="Instagram"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </div>
        </div>

        <div className="col-12 col-lg-5">
          <h5 className="mb-3">Subscribe for news latter</h5>

          <div className="bg-white rounded-3 d-flex align-items-center p-2" style={{ maxWidth: "460px" }}>
            <input
              type="email"
              placeholder="Enter Email..."
              className="form-control border-0 shadow-none"
            />
            <span className="text-secondary px-2">|</span>
            <button className="btn btn-white fw-bold text-nowrap px-3">
              SUBSCRIBE
            </button>
          </div>
        </div>

        <div className="col-12 col-lg-3">
          <h5 className="mb-3">Quick Links</h5>
          <ul className="list-unstyled d-flex flex-column gap-2 mb-0">
            {QUICK_LINKS.map((link) => (
              <li key={link}>
                <a href="#" className="text-secondary text-decoration-none">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="text-center mt-5">
        <hr className="border-secondary mx-auto" style={{ width: "60px" }} />
        <p className="text-secondary mb-0 mt-3">
          www.stepup.com©all right reserve
        </p>
      </div>
    </footer>
  );
}
