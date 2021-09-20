import React, {useState} from 'react';
import Product from '../components/Product';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { Row, Col, Container, Nav} from 'reactstrap';
import ReactPaginate  from 'react-paginate' ;
import { IoIosArrowForward } from "react-icons/io";

import cocaCola from '../images/gaseosa-1.PNG';
import logoCoca from '../images/log-1.PNG';

import cocaZero from '../images/gaseosa-2.PNG';
import logoZero from '../images/log-2.PNG';

import inca from '../images/gaseosa-3.PNG';
import logoInca from '../images/log-3.PNG';

import incaZero from '../images/gaseosa-4.PNG';
import logoIncaZero from '../images/log-4.PNG';

import fanta from '../images/gaseosa-5.PNG';
import logoFanta from '../images/log-5.PNG';

import sprite from '../images/gaseosa-6.PNG';
import logoSprite from '../images/log-6.PNG';

import agua from '../images/gaseosa-7.PNG';
import logoAgua from '../images/log-7.PNG';

import powerade from '../images/gaseosa-8.PNG';
import logoPower from '../images/log-8.PNG';
import { useHistory } from 'react-router-dom';

const Productos = () => {

  const history = useHistory();
  const siguiente = (e) =>{
      history.push('/productos/page/2')
  }

  return (
    <div>
      <NavBar/>
      <Container className="products-container">
        <Row>
          <h1 className="title">PRODUCTOS</h1>
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

        <Row>
          <Col sm={3} className="col">
            <Product
              texto="Fanta es la marca que contagia diversión, y su delicioso sabor a frutas es irresistible."
              bebida={fanta}
              logo={logoFanta}
            />
          </Col>
          <Col sm={3} className="col">
            <Product
              texto="Sprite se expresa con la frescura que caracteriza su sabor. Una marca honesta e irreverente que es la preferida de los adolescentes por su refrescancia y su auténtica personalidad."
              bebida={sprite}
              logo={logoSprite}
            />
          </Col>
          <Col sm={3} className="col">
            <Product
              texto="Es el agua que te da el balance perfecto entre vitalidad y bienestar. La frescura y pureza de San Luis te permite encontrar el equilibrio que tu cuerpo y tu mente necesitan, mejorando las experiencias de vida diaria."
              bebida={agua}
              logo={logoAgua}
            />
          </Col>
          <Col sm={3} className="col">
            <Product
              texto="Powerade ION4 es la bebida rehidratante que posee los electrolitos necesarios y te ofrece la energía extra que necesita tu cuerpo en cada deporte."
              bebida={powerade}
              logo={logoPower}
            />
          </Col>
        </Row>
        <Row className="pagination">
          <Col>
              <span className="numeros numUno">1 of 2</span>
          </Col>
          <Col>
              <button className="btnNext btnOneNext" onClick={e => siguiente(e)}>
                  siguiente <IoIosArrowForward/></button>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
};

export default Productos;


