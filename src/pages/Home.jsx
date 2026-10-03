import Brands from "../components/Brands/Brands";
import CustomerReview from "../components/CustomerReviews/CustomerReviews";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import TrendingProducts from "../components/TrendingProducts/TrendingProducts";

 export function Home() {
  return (
    <>
   
      <Hero />
      <Brands />
      <TrendingProducts />
  
      <CustomerReview />
      <Footer />
    </>
  );
}