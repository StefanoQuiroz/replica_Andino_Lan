import React, {useState} from 'react';
import Product from '../components/Product';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { Row, Col, Container, Nav} from 'reactstrap';


import cocaCola from '../images/gaseosa-1.PNG';
import logoCoca from '../images/log-1.PNG';

import cocaZero from '../images/gaseosa-2.PNG';
import logoZero from '../images/log-2.PNG';

import inca from '../images/gaseosa-3.PNG';
import logoInca from '../images/log-3.PNG';

import incaZero from '../images/gaseosa-4.PNG';
import logoIncaZero from '../images/log-4.PNG';


export default function Sucursales() {
  return (
    <div>
      <NavBar/>
      <Container className="products-container">
        <Row  style={{marginBottom:"2rem"}}>
           <h1 className="title">SUCURSALES</h1>
           <Col sm = {12}>
         
              <p style={{marginBottom:"-0.25rem"}}>Av. Confederación Nro. 600 Sicuani – Canchis – Cusco</p>
              <p style={{marginBottom:"-0.25rem"}}>La Cantuta S/N Urubamba – Urubamba – Cusco</p>
              <p style={{marginBottom:"-0.25rem"}}>Av. Imperio de los Incas Nro. 205 Machupicchu – Urubamba – Cusco</p>
          
           </Col>
        </Row>
        <Row>
          <h1 className="title">NUESTROS PRODUCTOS</h1>
        </Row>

        <Row>
          <Col sm={3} className="col">
            <Product
              texto="Para los consumidores de todo el mundo. El sabor universal de Coca-Cola es frescura para el cuerpo, mente y espíritu."
              bebida={cocaCola}
              logo={logoCoca}
            />
          </Col>
          <Col sm={3} className="col">
            <Product
              texto="Todo el placer de Coca-Cola, Zero azúcar, es posible. Para aquellos que quieren disfrutar del mismo sabor de Coca-Cola pero Zero azúcar."
              bebida={cocaZero}
              logo={logoZero}
            />
          </Col>
          <Col sm={3} className="col">
            <Product
              texto="Inca Kola. Una de las marcas icónicas de orgullo nacional para los peruanos y peruanas de todas las edades."
              bebida={inca}
              logo={logoInca}
            />
          </Col>
          <Col sm={3} className="col">
            <Product
              texto="Es la marca que mantiene las credenciales de peruanidad de Inca Kola pero con zero calorías. Creativa, moderna y con un sabor delicioso."
              bebida={incaZero}
              logo={logoIncaZero}
            />
          </Col>
        </Row>

      </Container>
      <Footer/>
    </div>
  )
}
