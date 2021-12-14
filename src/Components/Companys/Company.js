import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Company = () => {
    return (
        <div>
            <Container className="mt-5">
                <Row data-aos="fade-up"
                     data-aos-anchor-placement="top-bottom">
                    <Col md={2} sm={4} className="mt-4">
                        <img src="https://i.ibb.co/FYjFCWg/slack.png" className="img-fluid"/>
                    </Col>

                    <Col md={2} sm={4} className="ms-3 mt-4">
                        <img src="https://i.ibb.co/6vyy3VG/google.png" className="img-fluid"/>
                    </Col>

                    <Col md={2} sm={4} className="ms-3">
                        <img src="https://i.ibb.co/ygv4bWw/uber.png" className="img-fluid"/>
                    </Col>

                    <Col md={2} sm={4} className="ms-3">
                        <img src="https://i.ibb.co/C2cppLM/netflix.png" className="img-fluid"/>
                    </Col>
                    <Col md={2} sm={4} className="ms-3 mt-4">
                        <img src="https://i.ibb.co/zb9WQK7/airbnb.png" className="img-fluid"/>
                    </Col>


                </Row>
            </Container>
        </div>
    );
};

export default Company;