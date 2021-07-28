import React from 'react';
import { NavbarBrand, Navbar, Nav, NavItem, NavLink } from 'reactstrap';
import logo from '../images/Logo.PNG';
//#ded101 url(bg_header.jpg) top center
const NavBar = () => {
  return (
   /*  <Container> */
      <Navbar style={{boxShadow: '5px 4px 8px #888888'}} className="NavBar" color="light" light expand="md">
        <NavbarBrand><img src={logo}/></NavbarBrand>
        <Nav navbar>
          <NavItem>
            <NavLink>INICIO</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>PRODUCTOS</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>SUCURSALES</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>UBICACIÓN</NavLink>
          </NavItem>
          <NavItem>
            <NavLink>CONTACTO</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    /* </Container> */
  );
}

export default NavBar;
