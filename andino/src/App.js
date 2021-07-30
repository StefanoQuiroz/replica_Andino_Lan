import React from 'react';
import './App.css';
import HeroSection from './components/HeroSection';
import Products from './components/Products';

import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <Products/>
      <NavBar/>           
    </div>
  );
}

export default App;
