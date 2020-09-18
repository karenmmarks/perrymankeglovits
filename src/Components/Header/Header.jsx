import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import PKLogo from '../../Assets/Images/pklogo.jpg';

import './Header.css';
class Header extends Component {

    render() {
        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home" width= "100px">
                 <img src={PKLogo} height="100px" alt="Perryman Keglovits Logo" className="p-1"></img>    
                <span className="d-flex float-right text-info font-weight-bold">Perryman <br></br> & Keglovits <br></br>Foundation</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">About</Nav.Link>
                        <Nav.Link href="#link">Contact</Nav.Link>
                        <NavDropdown title="Archives" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Press Releases</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Spirit Awards</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Photo Gallery</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Video Highlights</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                </Form> */}
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default Header;