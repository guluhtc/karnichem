import React from 'react';
import HeroSlider from '../components/HeroSlider';
import About from '../components/About';
import Products from '../components/Products';
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