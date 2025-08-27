import Navigation from './components/Navigation';
import HeroSlider from './components/HeroSlider';
import About from './components/About';
import Products from './components/Products';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section with Slider */}
      <HeroSlider />
      
      {/* About Section */}
      <About />
      
      {/* Products Section */}
      <Products />
      
      {/* Blog Section */}
      <Blog />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;