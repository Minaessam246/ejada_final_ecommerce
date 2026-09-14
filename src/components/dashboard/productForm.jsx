import React from "react";

export default function ProductForm({
  form,
  editId,
  change,
  image,
  submit,
  cancel,
}) {
  return (
    <form onSubmit={submit} className="row g-2 p-2 bg-md-transparent d-flex justify-content-center flex-column align-items-center">
      <div className="col-md-3 w-75">
        <input
          className="form-control "
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={change}
          required
        />
      </div>

      <div className="col-md-2 w-75">
        <input
          className="form-control"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={change}
        />
      </div>

      <div className="col-md-2 w-75">
        <input
          className="form-control"
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={change}
          required
        />
      </div>

      <div className="col-md-3 w-75">
        <input
          className="form-control"
          type="file"
          accept="image/*"
          onChange={image}
        />

        {form.image && (
          <img
            src={form.image}
            alt="preview"
            className="mt-2"
            width="70"
            height="70"
            style={{ objectFit: "cover" }}
          />
        )}
      </div>

      <div className="col-md-2 w-75 ">
        <label className="form-check mt-2">
          <input
            className="form-check-input"
            type="checkbox"
            name="populer"
            checked={form.populer}
            onChange={change}
          />{" "}
          Popular
        </label>
      </div>

      <div className="col-md-10 w-75">
        <textarea
          className="form-control"
          name="product_details"
          placeholder="Product details"
          value={form.product_details}
          onChange={change}
        />
      </div>

      <div className="col-md-2">
        <button className="btn btn-primary me-2">
          {editId ? "Update" : "Add"}
        </button>

        <button
          type="button"
          className="btn btn-secondary"
          onClick={cancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
