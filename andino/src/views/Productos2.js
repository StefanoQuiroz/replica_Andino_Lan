import React from 'react';
import Product from '../components/Product';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import { Row, Col, Container, Nav } from 'reactstrap';
import cocaCola from '../images/gaseosa-1.PNG';
import logoCoca from '../images/log-1.PNG';

import cocaZero from '../images/gaseosa-2.PNG';
import logoZero from '../images/log-2.PNG';

import inca from '../images/gaseosa-3.PNG';
import logoInca from '../images/log-3.PNG';

import { IoIosArrowBack  } from "react-icons/io";
import { useHistory } from 'react-router-dom';


const Productos = () => {

  const history = useHistory();
  const anterior = () =>{
    history.push('/productos/page/1');
  };

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
        </Row>

        <Row className="pagination">
          <Col>
              <button className="btnNext btnDosNext" onClick={e => anterior(e)}>
                <IoIosArrowBack/>anterior</button>
          </Col>
          <Col>
              <span className="numeros numDos">2 of 2</span>
          </Col>
        </Row>
      </Container>
      <Footer/>
    </div>
  );
};

export default Productos;


