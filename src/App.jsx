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
function App() {
  return (
    <>
    
      <Hero />
      <Brands />
      <TrendingProducts />
\      <BestSelling />
      <CustomerReviews />
      <Footer />
    </>
  );
}

export default App;