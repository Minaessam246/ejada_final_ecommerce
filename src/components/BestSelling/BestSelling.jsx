import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";

const CATEGORIES = ["male", "female", "boy", "girl"];

export default function BestSelling() {
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState("male");

  useEffect(() => {
    axios
      .get("https://6a955e28fa33b37f821a91e9.mockapi.io/product")
      .then((res) => setProducts(res.data)
      )
      .catch((err) => console.error(err));
  }, []);

  const filteredProducts = products.filter(
    (product) => product.category === activeCategory
  );

  return (
    <section className="py-5 px-4 px-lg-5 bg-white">
      <h2 className="text-center fw-bold mb-4">
        <span className="text-secondary me-2">—</span>
        Best Selling
        <span className="text-secondary ms-2">—</span>
      </h2>

      <div className="d-flex justify-content-center gap-3 mb-5 flex-wrap">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`btn rounded-3 px-4 py-2 fw-semibold ${
              activeCategory === category
                ? "btn-dark"
                : "btn-outline-dark"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="row g-4">
        {filteredProducts.length === 0 ? (
          <p className="text-center text-secondary">No products found.</p>
        ) : (
          filteredProducts.map((product) => (
            <div className="col-12 col-md-6 col-lg-4" key={product.id}>
              <ProductCard product={product} badge="New" />
            </div>
          ))
        )}
      </div>
    </section>
  );
}
