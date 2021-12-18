import React, {useEffect, useState} from 'react';
import Services from "./Services";
import {Container, Row, Spinner} from "react-bootstrap";

const ServicesComponent = () => {
    const [services,setServices]=useState([]);
    const [isLoading,setLoading]=useState(true);
    useEffect(()=>{
        fetch('https://murmuring-tor-75574.herokuapp.com/services')
            .then(res=>res.json())
            .then(data=>{
                setServices(data)
                setLoading(false)
            })
    },[services])
    if(isLoading){
        return <Spinner animation="border" />
    }
    return (
        <div className="mt-5 mb-5">
<h2 className="mt-4 pb-5">Provide awesome <span className="text-success">services</span></h2>
<Container>
            <Row xs={1} md={3} className="g-4">

                {
                    services.slice(0,3).map(service=><Services
                        key={service._id}
                        service={service}
                    >

                    </Services>)
                }

            </Row>

</Container>

        </div>
    );
};

export default ServicesComponent;