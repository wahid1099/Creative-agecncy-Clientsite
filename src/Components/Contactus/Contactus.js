import React from 'react';
import {Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import  contactbg from '../../Images/Rectangle 29.png';
import '../Buttonstyle.css';
import Menu from "../NavBar/Menu";
import Footer from "../Footer/Footer";
const concactformbg={
    background: `url('${contactbg}')`,
    backgroundSize:'cover',
    height:'100%',
    backgroundRepeat:'no-repeat'
}
const fontstyle={
    color:'#111430',
    fontWeight:'600',
}

const Contactus = () => {
    return (



        <div style={concactformbg}>

            <Container className="pt-5">
                <Row>
                    <Col md={6} sm={12} data-aos="fade-right">
                        <h1 className="text-start pt-5" style={fontstyle}>
                            Let us handle your<br/> project, professionally.
                        </h1>
                        <h5 className="text-start text-black-50">With well written codes, we build amazing apps for all<br/> platforms, mobile and web apps in general.</h5>
                    </Col>
                    <Col md={6} sm={12} className="pt-5" data-aos="fade-left">
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                <Form.Control type="email" placeholder="Your email address" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                <Form.Control type="text" placeholder="Your name / company’s name" />
                            </Form.Group>
                            <FloatingLabel controlId="floatingTextarea2" label="Comments">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Leave a comment here"
                                    style={{ height: '250px' }}
                                />
                            </FloatingLabel>
                            <div className="mt-2 pb-5 text-start">
                                <button className="btnbg" >
                                    Send
                                </button>
                            </div>
                        </Form>

                    </Col>
                </Row>
            </Container>

        </div>

    );
};

export default Contactus;