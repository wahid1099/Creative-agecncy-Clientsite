import React, {useState} from 'react';
import Menu from "../Components/NavBar/Menu";
import Footer from "../Components/Footer/Footer";
import { NavLink, useLocation,Link } from 'react-router-dom';
import UseAuth from "../Hooks/UseAuth";
import {Form, Button, Container, Alert, Spinner} from "react-bootstrap";
import '../../src/Components/Buttonstyle.css';
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
    const [logindata,setLogindata]=useState({});
    const {user, isLoading, autherror, registerUser, loginUser, signInwithGoogle, logout}=UseAuth();
    const location=useLocation();
    let navigate = useNavigate();
    console.log(navigate);




    //login

    const handleOnChange=(e)=>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = {...logindata};
        newLoginData[field] = value;
        console.log(field,value,newLoginData);

        setLogindata(newLoginData);

    }
    const  handleLoginSubmit=(e)=>{
        loginUser(logindata.email,logindata.password,location,navigate);
        e.preventDefault();
    }

    const handleGoogleSignIn=()=>{
        signInwithGoogle(location,navigate);
    }






    return (
        <div>
            <Menu></Menu>
            <h2 className="mt-5 mb-5">Log in To your Account</h2>

            {/* eslint-disable-next-line react/jsx-no-undef */}
            <Container className="mb-5">

                <Form onSubmit={handleLoginSubmit} className="mx-auto">
                    <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicEmail">
                        <h5 className="text-start"> Email address</h5>
                        <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleOnChange} />

                    </Form.Group>

                    <Form.Group className="mb-3 w-50 mx-auto" controlId="formBasicPassword">
                        <h5 className="text-start">Password</h5>
                        <Form.Control type="password" placeholder="Password" name="password" onChange={handleOnChange} />
                    </Form.Group>
                    {autherror && <Alert variant="danger">{autherror}</Alert>}
                    <Button variant="dark" type="submit" className="w-50">
                        LogIn
                    </Button>
                    {isLoading && <Spinner animation="border" />}
                </Form>
                <Button onClick={handleGoogleSignIn}  variant="outline-dark" className="mt-4 mb-3 w-50"><FcGoogle className="iconstyle"/> Continue with Google</Button>
                <h5>Don’t have an account?  <Link to="/register">Create an account </Link></h5>
            </Container>
            <br/><br/>



            <Footer></Footer>
            
        </div>
    );
};

export default LogIn;