import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/main-logo.png'
import '../Hero/Hero.css'

const Header = () => {
  return (
    <Navbar className="custom-navbar" variant="dark" expand="lg">
      <Navbar.Brand href="#home" className="d-flex align-items-center">
        <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top  main-logo"
          alt="Hiking Life logo"
        />
        <span className="ml-6  main-heading">Hiking Life</span>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home" className="mx-3">Home</Nav.Link>
          <Nav.Link href="#class" className="mx-3">Class</Nav.Link>
          <Nav.Link href="#promo" className="mx-3">Promo</Nav.Link>
          <Nav.Link href="#online-class" className="mx-3">Online Class</Nav.Link>
          <Nav.Link href="#contact" className="mx-3">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
