import React, { useState } from 'react';
import {
  Navbar, Nav, Form, Button,
} from 'react-bootstrap';
import PKLogo from '../../Assets/Images/pklogo.jpg';
import DonateModal from '../Views/Donate/DonateModal';

import './Header.css';

const Header = () => {
  const [visible, setVisible] = useState(false);

  let modal;
  if (visible) {
    modal = <DonateModal visible={visible} setVisible={setVisible} />;
  }

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
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="home">Home</Nav.Link>
            <Nav.Link href="about">About</Nav.Link>
            <Nav.Link href="contact">Contact</Nav.Link>
            <Nav.Link href="archives">Archives</Nav.Link>
            {/* <NavDropdown title="Archives" id="basic-nav-dropdown"> */}
            {/* <NavDropdown.Item href="pressreleases">Press Releases</NavDropdown.Item> */}
            {/* <NavDropdown.Item href="spiritawards">Spirit Awards</NavDropdown.Item> */}
            {/* <NavDropdown.Item href="photogallery">Photo Gallery</NavDropdown.Item> */}
            {/* <NavDropdown.Item href="videohighlights">Video Highlights</NavDropdown.Item> */}
            {/* </NavDropdown> */}
          </Nav>
          <Form inline>
            <Button variant="warning" onClick={() => setVisible(true)}>Learn how to Donate!</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
