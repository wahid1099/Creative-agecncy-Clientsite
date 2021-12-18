import React, {useEffect, useState} from 'react';
import Menu from "../NavBar/Menu";
import {useParams} from "react-router-dom";
import {Badge, Col, Container, Form, Row, Button, Spinner, Alert} from "react-bootstrap";
import UseAuth from "../../Hooks/UseAuth";

const PlaceOrder = () => {
    const [productdetails,setProductDetails]=useState({});
    const [isLoading,setLoading]=useState(true);
    const[success,setSucess]=useState(false);
    const {serviceId}=useParams();
    const[userdetails,setUserdetails]=useState('');
    const [orderplacing,setOrderPlaced]=useState(false);

    const {user}=UseAuth();
    useEffect(()=>{
        fetch(`https://murmuring-tor-75574.herokuapp.com/services/${serviceId}`)
            .then(res=>res.json())
            .then(data=>{
                setProductDetails(data)

                setLoading(false)
            })
    },[])
    const handleOnBlur=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newuserdata={...userdetails};
        newuserdata[field]=value;
        setUserdetails(newuserdata);

    }
    const useremail=user.email;
    const username=user.displayName;
    const comment=userdetails.comment;
    const phone=userdetails.phone;
    const adress=userdetails.adress;

  const{_id,name,img,price}=productdetails || {}

   let serviceid=_id;


    const serviceOrder={serviceid,useremail,username,phone,adress,name,img,price};
    console.log(serviceOrder);

    const handlebooking = e => {
        //booking a apartment
        setSucess(false);
        setOrderPlaced(true);
        fetch('https://murmuring-tor-75574.herokuapp.com/purchaseService', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSucess(true);
                    setOrderPlaced(false);
                    e.target.reset();
                }
            })


        e.preventDefault();
    }


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
                        <h4 className="mt-2 mb-2">Service Fee: ${productdetails.price}</h4>
                    </Col>
                    <Col md={6} sm={12} data-aos="fade-left">
                        <Form onSubmit={handlebooking}>
                            <Form.Group className="mb-2 mt-3" controlId="formBasicEmail">

                                <Form.Control type="email" placeholder="Enter email"  name="email" defaultValue={user.email} />

                            </Form.Group>

                            <Form.Group className="mb-2 mt-3" controlId="formBasicEmail">

                                <Form.Control type="text" placeholder="Enter Name"  name="name" defaultValue={user.displayName} />

                            </Form.Group>

                            <Form.Group className="mb-2 mt-3" controlId="formBasicEmail">

                                <Form.Control type="text" placeholder="Enter Phone"  name="phone"  onBlur={handleOnBlur}/>

                            </Form.Group>
                            <Form.Group className="mb-2 mt-3" controlId="formBasicEmail">

                                <Form.Control type="text" placeholder="Enter Adress"  name="adress"  onBlur={handleOnBlur} />

                            </Form.Group>
                               <h5>Total Fee: ${price}</h5>
                          <Button className="w-100 mt-2 " type="submit">Place Order</Button>
                        </Form>
                        {orderplacing  && <Spinner animation="border" />}
                        {success && <Alert variant="success">Order Placed Succesfully</Alert>}
                    </Col>
                </Row>
            </Container>

            
        </div>
    );
};

export default PlaceOrder;