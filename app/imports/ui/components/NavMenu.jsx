import React from 'react';
import { Image, Navbar, Col, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Cart } from 'react-bootstrap-icons';

const NavMenu = () => (
  <Container>
    <Navbar expand="lg">
      <Navbar.Brand href="#home"><Image src="/images/calvinsusielogo.webp" width={200} /></Navbar.Brand>
      <Col>
        <Image height="60px" src="/images/calvinsusiecar.webp" />
        <u id="form"> <br />Click here <br />for Pick-Up <br />Order Form </u>
      </Col>
      <Nav>
        <Nav.Link href="#" className="nav-item">Home</Nav.Link>
        <Nav.Link href="#" className="nav-item">Raw Food</Nav.Link>
        <Nav.Link href="#" className="nav-item">About</Nav.Link>
        <Nav.Link href="#" className="nav-item">Shop</Nav.Link>
        <Nav.Link href="#" className="nav-item">Blog</Nav.Link>
        <Nav.Link href="#" className="nav-item">Press</Nav.Link>
        <Nav.Link href="#" className="nav-item">Contact</Nav.Link>

        <Nav.Link href="#"><Cart /></Nav.Link>
        <NavDropdown />
      </Nav>
    </Navbar>
  </Container>
);

export default NavMenu;
