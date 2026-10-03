import React from "react";


export default function PromoBanner({ products }) {
  return (
    <section className="py-5  bg-white ">
      <div
        className="position-relative overflow-visible rounded-4"
        style={{ backgroundColor: "#f97b7b", minHeight: "460px" }}
      >
 <div
  className="position-absolute fw-bold text-white"
  style={{
    bottom: "-19%",
    left: "0",
    fontFamily:"inter",
    width: "100%",
    fontWeight: "bolder",
    letterSpacing: "4px",
    fontSize: "28rem",
    lineHeight: 1,
    opacity: 0.15,
    pointerEvents: "none",
    overflow: "hidden",
  }}
>
  StepUP
</div>

        <button
          className="btn position-absolute top-50 start-0 translate-middle-y text-white fs-2 border-0 d-none d-md-flex"
          style={{ zIndex: 3 }}
        >
          <i className="bi bi-chevron-left"></i>
        </button>
        <button
          className="btn position-absolute top-50 end-0 translate-middle-y text-white fs-2 border-0 d-none d-md-flex"
          style={{ zIndex: 3 }}
        >
          <i className="bi bi-chevron-right"></i>
        </button>

        <div className="row  align-items-center  justify-content-between " style={{ zIndex: 2 ,height: "500px", }}>
        <div className="col-12 col-lg-5 position-relative h-100 d-none d-xl-flex">
  <img
    src="/WhatsApp Image 2026-09-05 at 4.38.54 PM-Photoroom.png"
    className="position-absolute"
    style={{
      height: "650px",
      width: "auto",
      top: "-150px",
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 2,
    }}
  />
</div>

          <div className="col-11 col-xl-4 m-auto text-white  p-4 p-lg-5" >
            <h2 className="fw-bold display-5">Are you ready to lead the way</h2>

            <p className="mt-3" style={{ maxWidth: "420px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.
            </p>

         <button
  className=" btn-light border-0 fw-bold my-3"
  style={{
    width: "219px",
    height: "66px",
    fontFamily: "Inter",
    fontWeight: 700,
    fontSize: "28px",
    color: "#f97b7b",
  
  }}
>
  Explore
</button>

<div className="text-center" style={{ width: "280px" }}>
  <div
    className="d-flex gap-3 overflow-x-scroll brand-scroll"
    style={{ scrollSnapType: "x mandatory" }}
  >
    {products?.map((product) => (
      <div
        key={product.id}
        className="bg-white rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
        style={{ width: "80px", height: "80px" }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-100 h-100 rounded-3"
          style={{ objectFit: "contain" }}
        />
      </div>
    ))}
  </div>

  <div className="d-flex gap-2 mt-2 justify-content-center">
    {products.slice(0, 3).map((_, index) => (
      <span
        key={index}
        className="rounded-pill bg-white"
        style={{
          height: "6px",
          width: index === 1 ? "20px" : "6px",
        }}
      ></span>
    ))}
  </div>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}
