import React from "react";

export default function ProductCard({ product }) {
  const { name, price, image } = product;

  return (
    <div className="bg-white border rounded-4 p-4 h-100">
      <div
        className="d-flex align-items-center justify-content-center mb-4"
        style={{ height: "160px" }}
      >
        <img
          src={image}
          alt={name}
          className="w-100 h-100"
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="d-flex align-items-center justify-content-between">
        <div>
          <p className="mb-1 text-dark">{name}</p>
          <p className="fw-semibold mb-0">₹ {parseFloat(price).toFixed(2)}</p>
        </div>

        <button
          className="btn btn-dark rounded-circle d-flex align-items-center justify-content-center p-0"
          style={{ width: "40px", height: "40px" }}
          aria-label={`View ${name}`}
        >
          <i className="bi bi-arrow-up-right"></i>
        </button>
      </div>
    </div>
  );
}
