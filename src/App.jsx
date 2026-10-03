import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Brands from "./components/Brands/Brands";
import TrendingProducts from "./components/TrendingProducts/TrendingProducts";
import PromoBanner from "./components/PromoBanner/PromoBanner";
import BestSelling from "./components/BestSelling/BestSelling";
import CustomerReviews from "./components/CustomerReviews/CustomerReviews";
import Footer from "./components/Footer/Footer";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import ProductDashboard from "./components/dashboard/Dashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
   <BrowserRouter>
   <Routes>


        <Route path="/" element={<Home />} />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;