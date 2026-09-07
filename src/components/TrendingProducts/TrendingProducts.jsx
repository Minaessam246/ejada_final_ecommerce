import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import PromoBanner from "../PromoBanner/PromoBanner";


export default function TrendingProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://6a955e28fa33b37f821a91e9.mockapi.io/product")
      .then((res) => {
        console.log(res.data);
        
        setProducts(res.data.filter((item) => item.populer));
      })
      .catch((err) => console.error(err));
  }, []);

  const slides = [];
  for (let i = 0; i < products.length; i += 3) {
    slides.push(products.slice(i, i + 3));
  }

  return (
    <section className="py-5 px-4 px-lg-5 bg-white">
      <div className="row align-items-center g-4">

        <div className="col-12 col-lg-3">
          <div className="d-flex align-items-center gap-2 mb-3">
            <span className="bg-dark" style={{ width: "30px", height: "2px" }}></span>
            <span className="text-dark">Our Trending Shoe</span>
          </div>

  <h2
  className=" text-capitalize m-0"
  style={{
    fontFamily: "Poppins, sans-serif",
    fontSize: "45px",
    width: "296px",
    height: "124px",
  }}
>
  Most Popular Products
</h2>

          <p className="text-secondary mt-3">
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit,
          </p>
    <button
  className="btn-dark border-0 bg-dark text-white mt-2"
  style={{
    width: "200px",
    height: "77px",
    fontFamily: "Poppins",
    fontWeight: 600,
    fontSize: "28px",
    lineHeight: "154%",
 
  }}
>
  Explore
</button>
        </div>

        <div className="col-12 col-lg-9">
          <div id="trendingCarousel" className="carousel slide">
            <div className="carousel-inner">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                >
                  <div className="row g-4 px-5">
                    {slide.map((product) => (
                      <div className="col-12 col-md-4" key={product.id}>
                        <ProductCard product={product} />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          <button
  className="carousel-control-prev"
  type="button"
  data-bs-target="#trendingCarousel"
  data-bs-slide="prev"
  style={{ width: "40px" }}
>
  <i className="bi bi-chevron-left text-dark fs-1"></i>
</button>

<button
  className="carousel-control-next"
  type="button"
  data-bs-target="#trendingCarousel"
  data-bs-slide="next"
  style={{ width: "40px" }}
>
  <i className="bi bi-chevron-right text-dark fs-1"></i>
</button>

            <div className="carousel-indicators position-relative mt-4">
              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#trendingCarousel"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active bg-dark" : "bg-dark"}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>

      </div>
      <PromoBanner products={products} />
      
    </section>
  );
}
