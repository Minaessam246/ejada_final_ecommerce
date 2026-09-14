import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import ProductForm from "./productForm";


const empty = {
  name: "",
  category: "",
  price: "",
  populer: false,
  product_details: "",
  image: "",
};

export default function ProductDashboard() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(empty);
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);

  const getProducts = async () => {
    try {
      setProducts((await axios.get("https://6a955e28fa33b37f821a91e9.mockapi.io/product")).data);
    } catch {
      toast.error("Failed to load");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const change = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({ ...form, [name]: type === "checkbox" ? checked : value });
  };

  const image = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();

    reader.onload = (e) => {
      const img = new Image();

      img.onload = () => {
        const canvas = document.createElement("canvas");
        const scale = Math.min(600 / img.width, 600 / img.height, 1);

        canvas.width = img.width * scale;
        canvas.height = img.height * scale;

        canvas
          .getContext("2d")
          .drawImage(img, 0, 0, canvas.width, canvas.height);

        setForm({
          ...form,
          image: canvas.toDataURL("image/jpeg", 0.7),
        });
      };

      img.src = e.target.result;
    };

    reader.readAsDataURL(file);
  };

  const save = async (e) => {
    e.preventDefault();

    try {
      editId
        ? await axios.put(`${"https://6a955e28fa33b37f821a91e9.mockapi.io/product"}/${editId}`, form)
        : await axios.post("https://6a955e28fa33b37f821a91e9.mockapi.io/product", form);

      toast.success(editId ? "Updated" : "Added");
      closeForm();
      getProducts();
    } catch (err) {
      toast.error(err.response?.status === 413 ? "Image too large" : "Error");
    }
  };

  const edit = (product) => {
    setForm(product);
    setEditId(product.id);
    setShowForm(true);
  };

  const remove = async (id) => {
    try {
      await axios.delete(`${"https://6a955e28fa33b37f821a91e9.mockapi.io/product"}/${id}`);
      toast.success("Deleted");
      getProducts();
    } catch {
      toast.error("Delete failed");
    }
  };

  const openForm = () => {
    setForm(empty);
    setEditId(null);
    setShowForm(true);
  };

  const closeForm = () => {
    setForm(empty);
    setEditId(null);
    setShowForm(false);
  };

  return (
    <div className="container mt-4">
      <Toaster />

      <div className="d-flex justify-content-between mb-3">
        <h2>Product Dashboard</h2>

      
      </div>

  {showForm && (
  <div
    className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center"
    style={{ zIndex: 1050 }}
  >
    <div className="bg-white rounded p-4 shadow w-75">
      <ProductForm
        form={form}
        editId={editId}
        change={change}
        image={image}
        submit={save}
        cancel={closeForm}
      />
    </div>
  </div>
)}


      <table className="table  align-middle">
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Popular</th>
            <th>Details</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {products.map((p) => (
            <tr key={p.id}>
              <td>
                {p.image && (
                  <img
                    src={p.image}
                    alt={p.name}
                    width="60"
                    height="60"
                    style={{ objectFit: "cover" }}
                  />
                )}
              </td>

              <td>{p.name}</td>
              <td >{p.category}</td>
              <td>{p.price}</td>
              <td >{p.populer ? "Yes" : "No"}</td>
              <td>{p.product_details}</td>

              <td className="col-2 ">
                <button
                  className="btn btn-sm btn-warning m-2"
                  onClick={() => edit(p)}
                >
                  Edit
                </button>

                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => remove(p.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
  <div className="d-flex justify-content-between my-2  align-items-center">
       <Link to="/" className="btn btn-dark">
        Back to Home
      </Link>
<button className="btn btn-success" onClick={openForm}>
          + Add Product
        </button>
   
  </div>
    </div>
  );
}