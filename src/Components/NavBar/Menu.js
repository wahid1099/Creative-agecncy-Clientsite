import React from 'react';
import {Button, Container, Dropdown, Nav, Navbar, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import '../Buttonstyle.css';
import UseAuth from "../../Hooks/UseAuth";
import {AiOutlineLogout, FaUserAlt} from "react-icons/all";
const Menu = () => {
    const { user, logout ,admin} = UseAuth();


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
                        <Nav.Link  className="me-4 mt-2">
                            <Link to="/" className="text-decoration-none text-black-50">Home</Link>

                            </Nav.Link>
                        <Nav.Link   className="me-4 mt-2">
                            <Link to="/services" className="text-decoration-none text-black-50">Our Services</Link>

                        </Nav.Link>
                        <Nav.Link  href="#memes" className="me-4 mt-2">
                            Our Team
                        </Nav.Link>
                        <Nav.Link  href="#memes" className="me-4 mt-2">
                           Contact Us
                        </Nav.Link>




                        {user.accessToken ?
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic" className="mt-2">
                                    <FaUserAlt className="ms-2 me-2" />
                                </Dropdown.Toggle>

                                <Dropdown.Menu >
                                    {user?.accessToken  &&  <span className="text-primary ms-3"><strong>Hello {user.displayName } </strong> </span>  }

                                    {user?.accessToken  &&     <Dropdown.Item as={Link} to="/dashboard">DashBoard</Dropdown.Item>}

                                    <Nav.Link href="#deets"  className="text-black" as={Link} to="/login"><Button variant="danger" onClick={logout}><AiOutlineLogout/> Log Out</Button></Nav.Link>
                                </Dropdown.Menu>

                            </Dropdown> :

                            <Nav.Link>
                                <Link to="/login"  className="text-decoration-none text-black-50">
                                    <button className="btnbg">
                                        LogIn
                                    </button>
                                </Link>

                            </Nav.Link>

                        }





                    </Nav>
                    <Nav>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Menu;