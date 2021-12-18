import React, {useState} from 'react';
import {Form, Button, Alert, Spinner} from "react-bootstrap";
import { BsFillCloudUploadFill } from "react-icons/bs";


const AddService = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);
    const [addingservice,setAdddedService]=useState(false);
    const handleSubmit = e => {
        setAdddedService(true);
        setSuccess(false);
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('img', image);
        formData.append('price', price);



        fetch('https://murmuring-tor-75574.herokuapp.com/addservice', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true);
                    setAdddedService(false);
                    console.log('Service  added successfully')
                    e.target.reset();
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });

    }


        return (
        <div data-aos="zoom-in">
            <h2>Add Service</h2>
            {success && <Alert variant='success'>Service Added Succesfully!</Alert> }
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">

                    <Form.Control type="text" placeholder="Enter Service Name" name="service"  onChange={e => setName(e.target.value)}
                    />

                </Form.Group>

                <Form.Group className="mb-3 w-50 mx-auto" >

                    <Form.Control type="text" placeholder="Enter Service Price" name="price"  onChange={e => setPrice(e.target.value)}/>

                </Form.Group>

                <Form.Group className="mb-3 w-50 mx-auto" >

                    <Form.Control type="text" placeholder="Enter Image Link" name="image"  onChange={e => setImage(e.target.value)}/>

                </Form.Group>


                <Form.Group className="mb-3 w-50 mx-auto" >



                    <Form.Control type="text" placeholder="Enter Service Description" name="desccription"  onChange={e => setDescription(e.target.value)}
                    />
                </Form.Group>

                {addingservice  && <Spinner animation="border" />}
                <Button variant="primary" type="submit" className="w-50">
                    Add Service
                </Button>
            </Form>

        </div>
    );
};

export default AddService;