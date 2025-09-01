import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import ServicePage from "./components/ServicePage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <ServicePage />
      <Contact />
      <Footer />
    </>
  );
}

export default App;

