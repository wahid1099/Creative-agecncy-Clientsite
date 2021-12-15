import React, {useEffect, useState} from 'react';
import Menu from "../NavBar/Menu";
import {useParams} from "react-router-dom";
import {Badge, Col, Container, Form, Row, Button, Spinner, Alert} from "react-bootstrap";

const PlaceOrder = () => {
    const [productdetails,setProductDetails]=useState({});
    const [isLoading,setLoading]=useState(true);
    const[success,setSucess]=useState(true);
    const {serviceId}=useParams();

    useEffect(()=>{
        fetch(`http://localhost:7000/services/${serviceId}`)
            .then(res=>res.json())
            .then(data=>{
                setProductDetails(data)

                setLoading(false)
            })
    },[])
    if(isLoading){
        return <Spinner animation="border" />
    }
    return (
        <div>
            <Menu></Menu>
            <h2 className="mt-5 mb-5">Place Order</h2>
       <hr/>
            <Container>
                <Row>
                    <Col md={6} sm={12} className="text-start"  data-aos="fade-right">
                        <img src={productdetails.img} className="img-fluid mx-auto"/>
                        <h4 className="mt-2 mb-2">Service Name: {productdetails.name}</h4>
                        <h4 className="mt-2 mb-2">Service Details: {productdetails.description}</h4>
                        <h4 className="mt-2 mb-2">Service Fee: {productdetails.price}</h4>
                    </Col>
                    <Col md={6} sm={12} data-aos="fade-left">
                        <Form>
                            <Form.Group className="mb-2 mt-3" controlId="formBasicEmail">

                                <Form.Control type="email" placeholder="Enter email"  name="email"  />

                            </Form.Group>

                            <Form.Group className="mb-2 mt-3" controlId="formBasicEmail">

                                <Form.Control type="text" placeholder="Enter Name"  name="name"  />

                            </Form.Group>

                            <Form.Group className="mb-2 mt-3" controlId="formBasicEmail">

                                <Form.Control type="text" placeholder="Enter Phone"  name="phone"  />

                            </Form.Group>
                            <Form.Group className="mb-2 mt-3" controlId="formBasicEmail">

                                <Form.Control type="text" placeholder="Enter Adress"  name="adress"  />

                            </Form.Group>

                          <Button className="w-100 mt-2 ">Place Order</Button>
                        </Form>
                        {success && <Alert variant="success">Order Placed Succesfully</Alert>}
                    </Col>
                </Row>
            </Container>

            
        </div>
    );
};

export default PlaceOrder;