import React, { useEffect, useState } from "react";
import axios from "axios";



export default function CustomerReview() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios
      .get("https://6a955e28fa33b37f821a91e9.mockapi.io/customer")
      .then((res) => setCustomers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section className="py-5 px-4 px-lg-5 bg-white brand-scroll"  >
      <h2 className="text-center fw-bold mb-5">
        <span className="text-secondary me-2">—</span>
        Customer Review
        <span className="text-secondary ms-2">—</span>
      </h2>

      <div
        className="d-flex gap-4 pb-3 container brand-scroll "
        style={{
          overflowX: "auto",
  
        }}
      >
        {customers.map((customer) => (
          <div
            key={customer.id}
            className="bg-light col-md-6  col-12 rounded-4 p-4 d-flex gap-3 "
       
          >
            <img
              src={customer.image}
              alt={customer.name}
              className="rounded-3"
              style={{ width: "110px", height: "150px", objectFit: "cover" }}
            />

            <div>
              <h5 className="fw-bold mb-1">{customer.name}</h5>

              <div className="text-warning mb-2">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-half"></i>
              </div>

              <p className="text-secondary mb-0">
                Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed
                Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna
                Aliqua.
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
