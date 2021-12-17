import React from 'react';
import UseAuth from "../Hooks/UseAuth";
import {Navigate, useLocation} from "react-router-dom";
import {Spinner} from "react-bootstrap";

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = UseAuth();
    const location = useLocation();
    if (isLoading) { return <Spinner /> }
    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;

};

export default AdminRoute;