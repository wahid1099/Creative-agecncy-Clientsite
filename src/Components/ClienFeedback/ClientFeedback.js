import React from 'react';
import {Card, Col, Container, Image, Row} from "react-bootstrap";

const ClientFeedback = () => {
    return (
        <div className="mt-5 mb-5">
            <h2 className="pt-3 pb-3">Clients <span className="text-success">Feedback</span></h2>
            <Container>
            <Row xs={1} md={3} className="g-4"  data-aos="fade-up"
                 data-aos-anchor-placement="bottom-bottom">

                    <Col>
                        <Card>
                            <div className="d-flex p-3">
                                <Image  src="https://i.ibb.co/k6XKhnN/customer-1.png" roundedCircle  style={{width:'64px',height:'64px'}}/>
                                <div className="ps-3 text-start">
                                    <h5>Nash Patrik</h5>
                                    <h5>CEO, Manpol</h5>
                                </div>
                            </div>

                            <Card.Body>

                                <Card.Text>
                                    <p className="text-start">
                                        With Thrive’s help, we were able to increase the functionality of our website dramatically while cutting our costs. Our website is much more easy to use, has tons of more features than before and is incredibly easy to maintain. We could not be more happy with our new website! Thanks Thrive!
                                    </p>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                <Col>
                    <Card>
                        <div className="d-flex p-3">
                            <Image  src="https://i.ibb.co/27dqXs7/customer-2.png"   style={{width:'64px',height:'64px'}}/>
                            <div className="ps-3 text-start">
                                <h5>Miriam Barron</h5>
                                <h5>CEO, Manpol</h5>
                            </div>
                        </div>

                        <Card.Body>

                            <Card.Text>
                                <p className="text-start">
                                    With Thrive’s help, we were able to increase the functionality of our website dramatically while cutting our costs. Our website is much more easy to use, has tons of more features than before and is incredibly easy to maintain. We could not be more happy with our new website! Thanks Thrive!
                                </p>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

                <Col>
                    <Card>
                        <div className="d-flex p-3">
                            <Image  src="https://i.ibb.co/nMbB6nL/customer-3.png" roundedCircle  style={{width:'64px',height:'64px'}}/>
                            <div className="ps-3 text-start">
                                <h5>Bria Malone</h5>
                                <h5>CEO, Manpol</h5>
                            </div>
                        </div>

                        <Card.Body>

                            <Card.Text>
                                <p className="text-start">
                                    With Thrive’s help, we were able to increase the functionality of our website dramatically while cutting our costs. Our website is much more easy to use, has tons of more features than before and is incredibly easy to maintain. We could not be more happy with our new website! Thanks Thrive!
                                </p>

                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>

            </Row>
            </Container>
        </div>
    );
};

export default ClientFeedback;