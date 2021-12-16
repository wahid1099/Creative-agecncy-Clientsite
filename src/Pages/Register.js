import React, {useState} from 'react';
import Menu from "../Components/NavBar/Menu";
import Footer from "../Components/Footer/Footer";
import {Button, Container, Form, Spinner,Alert} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import UseAuth from "../Hooks/UseAuth";


const Register = () => {
    const [logindata,setLogindata]=useState({});

    const navigate = useNavigate();

    //const history = useHistory();
    const { user, registerUser, isLoading, autherror } = UseAuth();

    const handleOnBlur=e=>{
        const field=e.target.name;
        const value=e.target.value;
        const newLoginData={...logindata};
        newLoginData[field]=value;
        setLogindata(newLoginData);

    }

    const handleLoginSubmit = e => {
        if (logindata.password !== logindata.password2) {
            alert('Your password did not match');
            return;
        }
        registerUser(logindata.email, logindata.password, logindata.name, navigate);
        e.preventDefault();
    }

    return (
        <div>
            <Menu></Menu>
            <Container>
                <h2>Register Today!!</h2>
                <Form onSubmit={handleLoginSubmit}>
                    <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                        <h5 className="text-start"> Your Full Name</h5>
                        <Form.Control type="text" placeholder="Enter Name"   name="name"  onBlur={handleOnBlur} />

                    </Form.Group>
                    <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                        <h5 className="text-start"> Email address</h5>
                        <Form.Control type="email" placeholder="Enter email"  name="email"  onBlur={handleOnBlur} />

                    </Form.Group>
                    <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                        <h5 className="text-start"> Password</h5>
                        <Form.Control type="password" placeholder="Enter Password"  name="password"  onBlur={handleOnBlur} />

                    </Form.Group>
                    <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                        <h5 className="text-start">Password</h5>
                        <Form.Control type="password" placeholder="Re-type Password"   name="password2"  onBlur={handleOnBlur}/>
                    </Form.Group>

                    {isLoading && <Spinner animation="border" />}
                    {user?.email && <Alert variant="success">User Created successfully!</Alert>}
                    {autherror && <Alert variant="danger">{autherror}</Alert>}
                    <Button variant="primary" type="submit" className="w-50 mb-3">
                        Register
                    </Button>
                    <Link to="/login"><h5>Already User! LogIn</h5></Link>



                </Form>
            </Container>

           <Footer></Footer>
        </div>
    );
};

export default Register;