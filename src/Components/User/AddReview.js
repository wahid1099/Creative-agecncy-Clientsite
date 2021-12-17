import React from 'react';
import {Col, Form} from "react-bootstrap";
import '../Buttonstyle.css';
const AddReview = () => {
    return (
        <div data-aos="zoom-in-up">
            <h2 className="mt-2 mb-5">Add A Review</h2>
            <Form>
                <Form.Group className="mb-3 w-50 ms-2" >

                    <Form.Control type="text" placeholder="Enter Name" className="p-2"/>

                </Form.Group>
                <Form.Group className="mb-3 w-50 ms-2" >

                    <Form.Control type="text" placeholder="Company’s name, Designation" className="p-2"/>

                </Form.Group>
                <Form.Group className="mb-3 w-50 ms-2" >

                    <Form.Control type="number" placeholder="Rating" className="p-2"/>

                </Form.Group>
                <Form.Group className="mb-3 w-50 ms-2" >

                    <Form.Control as="textarea" placeholder="Description" rows={3} />
                </Form.Group>
                <div className="mt-2 ps-2 pb-5 text-start">
                    <button className="btnbg" type="submit" >
                        Hire us
                    </button>
                </div>
            </Form>

        </div>
    );
};

export default AddReview;