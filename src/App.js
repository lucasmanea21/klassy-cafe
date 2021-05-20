import React from 'react'
import './App.css';
import AboutUs from './components/About Us/AboutUs';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import MenuSection from './components/MenuSection/MenuSection';
import ChefsSection from './components/Chefs/ChefsSection';
import ContactSection from './components/Contact/ContactSection';
import MealsSection from './components/Special Meals/MealsSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <AboutUs />
    <MenuSection />
    <ChefsSection />
    <ContactSection />
    <MealsSection />
    <Footer />
    </>
  );
}

export default App;
