import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import Products from './components/Products';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>  
      <HeroSection/>
      <Products/>
      <Footer/>
    </div>
  );
}

export default App;
