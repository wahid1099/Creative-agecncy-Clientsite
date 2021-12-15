import React from 'react';
import {Card, Col, Image, Row} from "react-bootstrap";
import '../Buttonstyle.css';
import {Link} from "react-router-dom";
const Services = (props) => {
    const{name,price,description,img,_id}=props.service;

    return (
        <div>
            <Link to={`/services/${_id}`} className="text-decoration-none text-black">


            <Col data-aos="zoom-out-up">
                <Card className="border-0 pb-5 card">
                    <Image variant="top" src={img} className="img-fluid w-25 mx-auto" />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            </Link>
        </div>
    );
};

export default Services;