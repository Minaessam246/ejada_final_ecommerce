import React from "react";
import Navbar from "./../Navbar/Navbar";

export default function Hero() {
  return (
  <section
  className="position-relative"
  style={{ minHeight: "120vh" }}
>
    
    <div className="position-absolute top-0 end-0 start-0  z-1">
        <Navbar />
</div>

      <div className="row g-0 h-100 align-items-center">
        <div className="col-12 col-lg-5 px-4 px-lg-5 py-5">
         <h1
  className="text-dark fw-semibold text-capitalize"
  style={{
    fontFamily: "Poppins, sans-serif",
    fontSize: "98px",
    lineHeight: "112%",
    maxWidth: "487px",
  }}
>
  Find Your Sole Mate With Us
</h1>


      <p
  className="text-secondary fw-normal text-capitalize mt-4"
  style={{
   
    fontSize: "28px",
  }}
>
  Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod.
</p>

     <button
  className="btn bg-black text-white border-0 rounded-0 fw-semibold mt-4"
  style={{
    width: "243px",
    height: "87px",
    fontSize: "28px",
    boxShadow: "0 15px 25px rgba(0,0,0,0.5)",
  }}
>
  Shop Now
</button>
        </div>

        <div
          className="col-12 col-lg-7 position-relative overflow-hidden "
          style={{
    minHeight: "120vh",
    background: "linear-gradient(90deg, #E4E4E4 0%, #FAFAFA 100%)",
  }}
        >
     
          <div
            className="position-absolute fw-bold"
            style={{
              top: "100%",
              left: "4%",
              fontSize: "12rem",
              lineHeight: 0.85,
              color: "white",
              zIndex: 0,
          
              transform: "translateY(-50%) rotate(-90deg)",
              transformOrigin: "left center",
            }}
          >
            ULTIMATE
          </div>

          <img
            src="/f779419cefdc8cfbf46ce1101ecac55f611f9b36.png"
            className="position-absolute top-50 start-50 translate-middle" 
            style={{
              width: "85%",
              objectFit: "contain",
              zIndex: 1,
            }}
          />

          <div
            className="position-absolute text-center bg-transparent w-100  bg-black d-flex flex-column justify-content-end  align-items-center"
            style={{
              bottom: "8%",
              
              
            }}
          >
             <h4 className="fw-bold text-dark ">
              Trendy StepUp Pro
            </h4>

            <p className="fs-5 text-secondary ">
              ₹ 3999.00
            </p>
   
          </div>
        </div>
      </div>
    </section>
  );
}