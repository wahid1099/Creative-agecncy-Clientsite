import React, {useEffect, useState} from 'react';
import {Button, Row, Spinner, Table} from "react-bootstrap";

const ManageOrders = () => {
    const[allorders,setAllorders]=useState([]);
    const[isLoading,setLoading]=useState(true);

    useEffect(()=>{
        fetch(`http://localhost:7000/allorders`)
            .then(res=>res.json())
            .then(data=>{
                setAllorders(data)
                setLoading(false)
            })
    },[]);
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
                    allorders.map(allorder=>(  <tr className="bg-white" key={allorder._id}>


                            <td>{allorder._id}</td>
                            <td>{allorder.username}</td>
                            <td>{allorder.useremail}</td>
                            <td>{allorder.name}</td>
                            <td>${allorder.price}</td>
                            <td>{allorder.phone}</td>
                            <td><img src={allorder.img} style={{height:'36px',width:'36px'}}/></td>
                            <td><Button variant="outline-danger">Cancel</Button></td>

                        </tr>
                    ))
                }


                </tbody>
            </Table>
        </div>
    );
};

export default ManageOrders;