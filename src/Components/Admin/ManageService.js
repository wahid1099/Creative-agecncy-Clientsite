import React, {useEffect, useState} from 'react';
import {Button, Spinner, Table,Alert} from "react-bootstrap";

const ManageService = () => {
    const [allservices,setAllservice]=useState([]);
    const[isLoading,setLoading]=useState(true);
    const [success, setSuccess] = useState(false);
    useEffect(()=>{
        fetch(`https://murmuring-tor-75574.herokuapp.com/services`)
            .then(res=>res.json())
            .then(data=>{
                setAllservice(data)
                setLoading(false)
            })
    },[allservices]);
    console.log(allservices);
    const handleDelete = (id) => {


        fetch(`https://murmuring-tor-75574.herokuapp.com/deleteService/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {

                    setSuccess(true);
                }
            });

    };
    if(isLoading){
        return <Spinner animation="border"/>
    }
    return (
        <div data-aos="zoom-in">
            <h2>Manage Services</h2>
            {success && <Alert variant="success" >Service delete!</Alert>}
            <Table  bordered className="bg-white">
                <thead>
                <tr className="bg-white-50">
                    <th>Service Id</th>
                    <th>Service Name</th>
                    <th>Service Image</th>
                    <th>Service Description</th>
                    <th>Service Price</th>
                    <th>Action</th>



                </tr>
                </thead>
                <tbody>
                {
                    allservices.map(allservice=>(  <tr className="bg-white" key={allservice._id}>


                            <td>{allservice._id}</td>
                            <td>{allservice.name}</td>
                            <td><img src={allservice.img} style={{height:'36px',width:'36px'}}/></td>

                            <td>{allservice.description}</td>

                            <td>${allservice.price}</td>

                            <td><Button variant="outline-danger" type="submit" onClick={()=>handleDelete(allservice._id)}>Delete</Button></td>

                        </tr>
                    ))
                }


                </tbody>
            </Table>
        </div>
    );
};

export default ManageService;