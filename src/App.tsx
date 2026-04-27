import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-950 text-white">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
