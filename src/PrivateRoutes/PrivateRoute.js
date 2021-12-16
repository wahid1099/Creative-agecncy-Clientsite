import React from 'react';
import UseAuth from "../Hooks/UseAuth";
import {Navigate, useLocation} from "react-router-dom";
import {Spinner} from "react-bootstrap";

const PrivateRoute = ({children,...rest}) => {
    const { user, isLoading } = UseAuth();
    let location = useLocation();
    if (isLoading) { return <Spinner /> }


    if (user.email) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;