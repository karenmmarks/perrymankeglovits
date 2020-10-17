/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import PKLogo from '../../Assets/Images/pklogo.jpg';
import DonateModal from '../Views/Donate/DonateModal.jsx';

import './Header.css';

const Header = () => {
  const [visible, setVisible] = useState(false);

  let modal;
  if (visible) modal = <DonateModal visible={visible} setVisible={setVisible} />;

  return (
    <>
      {modal}
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/home" width="100px">
          <img src={PKLogo} height="100px" alt="Perryman Keglovits Logo" className="p-1" />
          <span className="d-flex float-right text-info font-weight-bold">
            Perryman
            <br />
            & Keglovits
            <br />
            Foundation
          </span>
        </Navbar.Brand>
        <Navbar.Toggle
          className="float-right"
          aria-controls="basic-navbar-nav"
        />
        <Button variant="warning" onClick={() => setVisible(true)}>
          Learn how to Donate!
        </Button>
        <Navbar.Collapse>
          <Nav>
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            <Nav.Link href="archives">Archives</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
