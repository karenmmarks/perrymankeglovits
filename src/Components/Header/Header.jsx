/* eslint-disable import/extensions */
import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import PKLogo from '../../Assets/Images/pklogo.jpg';
import './Header.css';

const Header = () => (
  <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/home" width="100px">
        <p>
          {' '}
          <img src={PKLogo} height="100px" alt="Perryman Keglovits Logo" className="p-1" />

          <span className="d-flex float-right text-pk font-weight-bold">
            Perryman
            <br />
            & Keglovits
            <br />
            Foundation
          </span>
        </p>
      </Navbar.Brand>
      <Navbar.Toggle
        className="float-right"
        aria-controls="basic-navbar-nav"
      />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link href="home">Home</Nav.Link>
          <Nav.Link href="about">About</Nav.Link>
          <Nav.Link href="archives">Archives</Nav.Link>
          <Button variant="warning" href="donate">Donate</Button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </>
);

export default Header;
