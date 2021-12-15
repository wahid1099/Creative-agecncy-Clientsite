import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import { FaMapMarkerAlt,FaFacebookSquare,FaInstagram,FaLinkedin,FaYoutube } from "react-icons/fa";



const Footer = () => {
    const footerbg={
        backgroundColor: '#111430',
        color: '#fff',
        paddingTop: '40px',
        paddingBottom:'20px'
    }
    const iconstyle={
        width:'30px',
        height:'30px',
        marginRight:'5px'
    }

    return (

            <div style={footerbg}>
                <Container>
                    <Row>
                        <Col md={4} sm={6}>

                            <h6 className="text-start pt-4"><FaMapMarkerAlt/>

                                H#340 (4th Floor), Road #24,<br/>
                                New DOHS, Mohakhali, Dhaka, Bangladesh<br/>
                                Phone: 018XXXXXXXX<br/>
                                E-mail: info@company.com
                            </h6>
                        </Col>
                        <Col md={2} sm={6} className="text-start">
                            <h3>Company</h3>



                            <h6>About</h6>
                            <h6>Site Map</h6>
                            <h6>Support Center</h6>
                            <h6>Terms Conditions</h6>
                            <h6>Submit Listing</h6>
                        </Col>
                        <Col md={2} sm={6} className="text-start">
                            <h3> Quick Links</h3>

                            <h6> Quick Links</h6>
                            <h6>Rentals</h6>
                            <h6>Sales</h6>
                            <h6>Contact</h6>
                            <h6>Terms Conditions</h6>
                            <h6>Our blog</h6>
                        </Col>
                        <Col md={4} sm={6} className="text-start">
                            <h3>About us</h3>
                            <p > We are the top service provider
                                agency in Sydney, with agents 
                                available to answer any  <br/>
                                question 24/7. </p>
                            <div>

                                <FaFacebookSquare style={iconstyle}/>
                                <FaInstagram  style={iconstyle}/>
                                <FaLinkedin style={iconstyle}/>
                                <FaYoutube style={iconstyle}/>

                            </div>
                        </Col>
                    </Row>

                </Container>



            </div>
    );
};

export default Footer;