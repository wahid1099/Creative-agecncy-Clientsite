import React, {useEffect, useState} from 'react';
import Menu from "../Components/NavBar/Menu";
import Footer from "../Components/Footer/Footer";
import {Container, Row, Spinner} from "react-bootstrap";
import Services from "../Components/ServicesComponent/Services";

const ServicePage = () => {
    const [allservices,setAllServices]=useState([]);
    const [isLoading,setLoading]=useState(true);
    useEffect(()=>{
        fetch('https://murmuring-tor-75574.herokuapp.com/services')
            .then(res=>res.json())
            .then(data=>{
                setAllServices(data)
                setLoading(false)
            })
    },[allservices])
    if(isLoading){
        return <Spinner animation="border" />
    }
    return (
        <div>
            <Menu></Menu>
            <h2 className="mt-5 mb-5">Our <span className="text-success">Services</span></h2>
            <Container className="mt-5 mb-5">
                <Row xs={1} md={3} className="g-4">

                    {
                        allservices.map(service=><Services
                            key={service._id}
                            service={service}
                        >

                        </Services>)
                    }

                </Row>

            </Container>
            <Footer></Footer>
            
        </div>
    );
};

export default ServicePage;