import React from 'react';
import HeroSection from '../components/HeroSection';
import Products from '../components/Products';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Inicio = () => {
    return (
        <div>
            <NavBar/>  
            <HeroSection/>
            <Products/>
            <Footer/>
        </div>
    );
}

export default Inicio;
