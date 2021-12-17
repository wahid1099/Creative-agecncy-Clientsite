import React from 'react';
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import { BsFillCartCheckFill } from "react-icons/bs";
import { FaMoneyBill } from "react-icons/fa";
import { BiLike } from "react-icons/bi";
import UseAuth from "../../Hooks/UseAuth";
import {Link, Outlet} from "react-router-dom";


const dashboardbg={
    background:'#F4F7FC',
           height:'100%',
    width:'100%',
    paddingBottom:'500px'
}
const DashBoard = () => {
    const {user}=UseAuth();
    return (
        <div>
            <Row>
                <Col md={3} className="text-start ps-4 mt-4">

                <img src="https://i.ibb.co/pxXvgt0/logo.png" alt="logo"  width="150"
                     height="48"/>
                    <Nav  className="flex-column mt-3">
                       <Link to="/dashboard/myorders" className="text-decoration-none text-black ps-3 pt-2"><BsFillCartCheckFill/> My Orders</Link>
                        <Link to="/dashboard/addreview" className="text-decoration-none text-black ps-3 pt-2"><BiLike/> Add Review</Link>
                        <Link to="/dashboard/payment" className="text-decoration-none text-black ps-3 pt-2"><FaMoneyBill/> Payment</Link>



                    </Nav>
                </Col>
                <Col md={9} >
                    <Navbar>
                        <Container >
                            <h5 className="text-start">Hello {user.displayName}</h5>
                            <Navbar.Toggle />
                            <Navbar.Collapse className="justify-content-end">
                                <Navbar.Text>
                                    <Link to="/" className="text-decoration-none text-black-50">Home</Link>
                                </Navbar.Text>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    <Row style={dashboardbg}>
                        <Col md={12}>
                       <h2> Welcome to Dashboard</h2>
                            <Outlet></Outlet>

                        </Col>
                    </Row>


                </Col>
            </Row>

        </div>
    );
};

export default DashBoard;