import React from 'react';
import { NavbarBrand, Container, Navbar, Nav, NavItem, NavLink, Col } from 'reactstrap';
import logo from '../images/Logo.PNG';
import '../sass/styles.scss';
//#ded101 url(bg_header.jpg) top center
//Hice una modificación
const NavBar = () => {
  return (

      <Navbar className="NavBar" light expand="md">
        <Container className="Container">
          <Col className="Col1" sm={3}>
            <NavbarBrand className="NavBarBrand"><img className="logo" src={logo}/></NavbarBrand>
          </Col>
          <Col  className="Col2" sm={9}>
            <Nav className="Nav">
              <NavItem className="NavItem">
                <NavLink className="NavLink">INICIO</NavLink>
              </NavItem>
              <NavItem className="NavItem">
                <NavLink className="NavLink">PRODUCTOS</NavLink>
              </NavItem>
              <NavItem className="NavItem">
                <NavLink className="NavLink">SUCURSALES</NavLink>
              </NavItem>
              <NavItem className="NavItem">
                <NavLink className="NavLink">UBICACIÓN</NavLink>
              </NavItem>
              <NavItem className="NavItem">
                <NavLink className="NavLink">CONTACTO</NavLink>
              </NavItem>
            </Nav>
          </Col>
        </Container>
      </Navbar>

  );
}

export default NavBar;
