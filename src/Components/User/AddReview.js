import React, {useState} from 'react';
import {Alert, Col, Form, Spinner} from "react-bootstrap";
import '../Buttonstyle.css';
import UseAuth from "../../Hooks/UseAuth";
const AddReview = () => {
    const {user}=UseAuth();
    const [addingReview,setReviewadded]=useState(false);
    const[userdetails,setUserdetails]=useState('');
    const[success,setSucess]=useState(false);


    const useremail=user.email;
    const username=user.displayName;
    const description=userdetails.description;
    const raing=userdetails.rating;
    const companyName=userdetails.companyName;


    const handleOnBlur=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newuserdata={...userdetails};
        newuserdata[field]=value;
        setUserdetails(newuserdata);

    }
    const addReview={useremail,username,companyName,description,raing};
    console.log(addReview);


    const handleAddReview = e => {
        //booking a apartment
        setSucess(false);
        setReviewadded(true);
        fetch('https://murmuring-tor-75574.herokuapp.com/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSucess(true);
                    setReviewadded(false);
                    e.target.reset();
                }
            })


        e.preventDefault();
    }



    return (
        <div data-aos="zoom-in-up">
            <h2 className="mt-2 mb-5">Add A Review</h2>
            <Form onSubmit={handleAddReview}>
                <Form.Group className="mb-3 w-50 ms-2" >

                    <Form.Control type="text" placeholder="Enter Name" className="p-2" defaultValue={username}/>

                </Form.Group>
                <Form.Group className="mb-3 w-50 ms-2" >

                    <Form.Control type="text" placeholder="Company’s name, Designation" className="p-2" name="companyName"
                    onBlur={handleOnBlur}/>

                </Form.Group>
                <Form.Group className="mb-3 w-50 ms-2" >

                    <Form.Control type="number" placeholder="Rating" className="p-2" name="rating"
                                  onBlur={handleOnBlur}/>

                </Form.Group>
                <Form.Group className="mb-3 w-50 ms-2" >

                    <Form.Control as="textarea" placeholder="Description" rows={3} name="description"
                                  onBlur={handleOnBlur}/>
                </Form.Group>
                {addingReview  && <Spinner animation="border" />}
                {success && <Alert variant="success">Review Added Succesfully</Alert>}
                <div className="mt-2 ps-2 pb-5 text-start">
                    <button className="btnbg" type="submit" >
                     Add Review
                    </button>
                </div>
            </Form>

        </div>
    );
};

export default AddReview;