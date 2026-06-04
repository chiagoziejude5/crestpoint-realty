import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import PropertyCategories from "./components/PropertyCategories";
import FeaturedProperties from "./components/FeaturedProperties";
import WhyChooseUs from "./components/WhyChooseUs";
import Statistics from "./components/Statistics";
import Testimonials from "./components/Testimonials";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <Navbar />
      <Hero />
      <SearchBar />
      <PropertyCategories />
      <FeaturedProperties />
      <WhyChooseUs />
      <Statistics />
      <Testimonials />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;