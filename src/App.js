import React from 'react'
import './App.css';
import AboutUs from './components/About Us/AboutUs';
import HeroSection from './components/HeroSection/HeroSection';
import Navbar from './components/Navbar/Navbar';
import Card from './components/MenuSection/Card';
import {menuItems} from './components/Data'
import MenuSection from './components/MenuSection/MenuSection';
import ChefCard from './components/Chefs/ChefCard';
import ChefsSection from './components/Chefs/ChefsSection';
import ContactSection from './components/Contact/ContactSection';
import MealsSection from './components/Special Meals/MealsSection';
import Footer from './components/Footer/Footer';

function App() {
  const menuItem = menuItems.map((item,key) => (
    <Card 
    title={item.title}
    img= {item.img}
    price= {item.price}
    desc={item.desc} />
  ))
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
