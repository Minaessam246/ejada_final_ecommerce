import React from "react";

export default function ProductCard({ product, badge }) {
  const { name, price, image } = product;


  return (
    <div className="bg-white border rounded-4 p-4 h-100 position-relative">
      {badge && (
        <span className="position-absolute top-0 start-0 bg-dark text-white small px-2 py-1 m-3 rounded-1">
          {badge}
        </span>
      )}

      <button
        className="btn position-absolute top-0 end-0 m-3 p-0 border-0"
        aria-label="Add to wishlist"
      >
        <i className="bi bi-heart fs-5"></i>
      </button>

      <div
        className="d-flex align-items-center justify-content-center mb-4"
        style={{ height: "180px" }}
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
          <p className="mb-1 text-dark fw-semibold">{name}</p>
          <p className="mb-0">
            <span className="fw-semibold">₹ {parseFloat(price).toFixed(2)}</span>{" "}
            <span className="text-secondary text-decoration-line-through ms-1">
              ₹ {Math.floor(price*1.5)}
            </span>
          </p>
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
