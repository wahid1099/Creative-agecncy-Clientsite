import React, {useEffect, useState} from 'react';
import UseAuth from "../../Hooks/UseAuth";
import {Button, Card, Col, Row, Spinner} from "react-bootstrap";

const MyOrders = () => {
    const[userorders,setUserorders]=useState([]);
    const[isLoading,setIsloading]=useState(true);
    const [success,setSucess]=useState(false);
    useEffect(()=>{
        fetch(`https://murmuring-tor-75574.herokuapp.com/userorders?email=${user.email}`)
            .then(res=>res.json())
            .then(data=>{
                setUserorders(data)
                setIsloading(false)

            })

    },[success]);
     const{user}=UseAuth();


    if(isLoading){
        return <Spinner animation="border" />;
    }

    return (
        <>
            <h2 className="pt-3 pb-3">Order History</h2>

                    <Row xs={1} md={3} className="g-4"  data-aos="zoom-in">
                        {
                            userorders.map(orders=>(
                                <Col>
                                    <Card>
                                       <div>
                                           <Card.Img variant="top" src={orders.img} className="img-fluid w-25 me-5 ps-3 pt-2"/>
                                           <Button variant='outline-danger' className="ms-5">Pending</Button>
                                       </div>
                                        <Card.Body>
                                            <Card.Title>{orders.name}</Card.Title>
                                            <Card.Text>
                                            <h5> Total:${orders.price}</h5>
                                               <p>  Phone:{orders.phone}</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>



                            ))
                        }




            </Row>
            
        </>
    );
};

export default MyOrders;