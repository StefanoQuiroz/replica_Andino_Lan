import React from 'react';
import { NavbarBrand, Container, Navbar, Nav, NavItem, NavLink,Row, Col } from 'reactstrap';
import logo from '../images/Logo.PNG';
import '../sass/styles.scss';
import {Link} from 'react-router-dom';
//#ded101 url(bg_header.jpg) top center
//Hice una modificación
const NavBar = () => {
  return (
    <>
      <Navbar className="NavBar" light expand="md">
        <Container className="Container">
          <Col className="Col1" sm={3}>
            <NavbarBrand className="NavBarBrand"><img className="logo" src={logo}/></NavbarBrand>
          </Col>
          <Col  className="Col2" sm={9}>
            <Nav className="Nav">
              <NavItem className="NavItem">
                <NavLink className="NavLink">
                  <Link to = {"/"}>INICIO</Link>
                </NavLink>
              </NavItem>
              <NavItem className="NavItem">
                <NavLink className="NavLink">
                  <Link to = {"/productos/page/1"}>PRODUCTOS</Link>
                </NavLink>
              </NavItem>
              <NavItem className="NavItem">
                <NavLink className="NavLink">
                  <Link to = {"/sucursales"}>SUCURSALES</Link>
                </NavLink>
              </NavItem>
              <NavItem className="NavItem">
                <NavLink className="NavLink">
                  <Link to = {"/ubicacion"}>UBICACIÓN</Link>
                </NavLink>
              </NavItem>
              <NavItem className="NavItem">
                <NavLink className="NavLink">
                  <Link to = {"/contacto"}>CONTACTO</Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Container>
      </Navbar>
      <Container>
        <Row style={{width:"98.5%", marginTop:"7.2rem"}}>
          <p className="breadCrumb">Inicio</p>
        </Row>
      </Container>
    </>


  );
}

export default NavBar;
