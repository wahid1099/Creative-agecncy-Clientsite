import React from 'react';
import {Button, Container, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import '../Buttonstyle.css';
const Menu = () => {
    return (
        <Navbar collapseOnSelect expand="lg">
            <Container>
                <Navbar.Brand >
                    <Link to="/home" >
                    <img
                        src="https://i.ibb.co/pxXvgt0/logo.png"
                        width="150"
                        height="48"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="ms-auto">
                        <Nav.Link href="#deets" className="me-4 mt-2">Home</Nav.Link>
                        <Nav.Link  href="#memes" className="me-4 mt-2">
                          Our Portfolio
                        </Nav.Link>
                        <Nav.Link  href="#memes" className="me-4 mt-2">
                            Our Team
                        </Nav.Link>
                        <Nav.Link  href="#memes" className="me-4 mt-2">
                           Contact Us
                        </Nav.Link>
                        <Nav.Link  href="#memes" className="">
                            <button className="btnbg">
                                LogIn
                            </button>
                        </Nav.Link>

                    </Nav>
                    <Nav>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;