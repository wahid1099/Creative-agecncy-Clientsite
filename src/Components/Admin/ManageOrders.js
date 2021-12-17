import React, {useEffect, useState} from 'react';
import {Alert, Button, Modal, Row, Spinner, Table} from "react-bootstrap";
import AllorderComponent from "./AllorderComponent";

const ManageOrders = () => {
    const[allorders,setAllorders]=useState([]);
    const[isLoading,setLoading]=useState(true);
    const [success, setSuccess] = useState(false);


    useEffect(()=>{
        fetch(`http://localhost:7000/allorders`)
            .then(res=>res.json())
            .then(data=>{
                setAllorders(data)
                setLoading(false)
            })
    },[allorders]);
    if(isLoading){
        return <Spinner animation="border"/>
    }


    return (
        <div  data-aos="zoom-in">
            <h2>Manage Orders</h2>


            <Table  bordered className="bg-white">
                <thead>
                <tr className="bg-white-50">
                    <th>Order Id</th>
                    <th>Customer</th>
                    <th>Email Id</th>

                    <th>Service</th>
                    <th>Price</th>
                    <th>Phone</th>
                    <th>Image</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    allorders?.map(allorder=>(<AllorderComponent
                        key={allorder._id}
                        allorder={allorder}>

                        </AllorderComponent>



                    ))

                }


                </tbody>
            </Table>
        </div>
    );
};

export default ManageOrders;