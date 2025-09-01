import React from 'react';
import HeroSlider from '../components/HeroSlider';
import About from '../components/About';
import Products from '../components/Products';
import Clientele from '../components/Clientele';
import Blog from '../components/Blog';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section with Slider */}
      <HeroSlider />
      
      {/* About Section */}
      <About />
      
      {/* Products Section */}
      <Products />
      
      {/* Clientele Section */}
      <Clientele />
      
      {/* Blog Section */}
      <Blog />
      
      {/* Testimonials Section */}
      <Testimonials />
      
      {/* Contact Section */}
      <Contact />
    </div>
  );
};

export default HomePage;