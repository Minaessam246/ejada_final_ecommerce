import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import ProductForm from "./productForm";


const emptyProduct = {
  name: "",
  category: "",
  price: "",
  populer: false,
  product_details: "",
  image: "",
};

export default function ProductDashboard() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(emptyProduct);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(false)

  const getProducts = async () => {
    try {
      const res = await axios.get("https://6a955e28fa33b37f821a91e9.mockapi.io/product");
      setProducts(res.data);
    } catch {
      toast.error("Failed to load products");
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const change = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

 const image = (e) => {
  const file = e.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  reader.onload = (event) => {
    setForm({
      ...form,
      image: event.target.result,
    });
  };

  reader.readAsDataURL(file);
};

  const addProduct = () => {
    setForm(emptyProduct);
    setEditing(true);
  };


  const editProduct = (product) => {
    setForm(product);
    setEditing(true);
  };

const closeForm = () => {
    setForm(emptyProduct);
    setEditing(false);
  };
  const save = async (e) => {
  e.preventDefault();
  setLoading(true);

  try {
    if (form.id) {
      await axios.put(`${"https://6a955e28fa33b37f821a91e9.mockapi.io/product"}/${form.id}`, form);
      toast.success("Product updated");
    } else {
      await axios.post("https://6a955e28fa33b37f821a91e9.mockapi.io/product", form);
      toast.success("Product added");
    }

    closeForm();
    getProducts();
  } catch (err) {
    toast.error(
      err.response.data
    );
  } finally {
    setLoading(false);
  }
};


const deleteProduct = (id) => {
  toast.custom((t) => (
    <div className="bg-white p-3 rounded shadow">
      <p>Are you sure you want to delete this product?</p>

      <button
        className="btn btn-danger btn-sm me-2"
        onClick={async () => {
          
setLoading(true)
          try {
          
            await axios.delete(`${"https://6a955e28fa33b37f821a91e9.mockapi.io/product"}/${id}`);
            toast.dismiss(t.id);
            toast.success("Product deleted");
            getProducts();
          } catch(err) {
            console.log(err);
            
            toast.error("Delete failed");
          } finally {
            setLoading(false);
          }
        }}
        disabled={loading}
      >
        {loading ? <span className="loader"></span> : "Yes, Delete"}
      </button>

      <button
        className="btn btn-secondary btn-sm"
        onClick={() => toast.dismiss(t.id)}
        disabled={loading}
      >
        Cancel
      </button>
    </div>
  ));
};


  return (
    <div className="container mt-4">

      <Toaster />
      <div className="d-flex justify-content-between mb-3">
        <h2>Product Dashboard</h2>

      </div>

      {editing && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50 d-flex justify-content-center align-items-center"
          style={{ zIndex: 1050 }}
        >
          <div className="bg-white rounded p-4 shadow w-75">

           <ProductForm
  form={form}
  change={change}
  image={image}
  submit={save}
  cancel={closeForm}
  loading={loading}
/>


          </div>
        </div>
      )}

     
      <table className="table align-middle table-borderless  ">

        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th className="d-none d-md-table-cell ">Category</th>
            <th>Price</th>
            <th>Popular</th>
            <th className="d-none d-md-table-cell ">Details</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>

          {products.map((product) => (
            <tr  key={product.id}>

              <td>
                {product.image && (
                  <img
                    src={product.image}
                    alt={product.name}
                    width="60"
                    height="60"
                    style={{ objectFit: "cover" }}
                  />
                )}
              </td>

              <td>{product.name}</td>

              <td  className="d-none d-md-table-cell">{product.category}</td>

              <td>{product.price}</td>

              <td>
                {product.populer ? "Yes" : "No"}
              </td>

              <td className="d-none d-md-table-cell">{product.product_details}</td>

              <td className="">
    <button
                  className="btn btn-sm btn-warning  "
                  onClick={() => editProduct(product)}
                >
                  Edit
                </button>

     

               
              </td>
                    <td>     <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
                </td> 

            </tr>
          ))}

        </tbody>

      </table>

 
   <div className="d-flex justify-content-between align-items-center">
   <Link to="/" className="btn btn-dark">
        Back to Home
      </Link>
   <button
          className="btn btn-success"
          onClick={addProduct}
        >
          + Add Product
        </button>

   </div>
    </div>
  );
}
