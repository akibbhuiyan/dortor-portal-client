import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { userContext } from '../../App';

const PrivateRoute = ({ children }) => {

    const [userLoggedIn, setUserLoggedIn] = useContext(userContext)

    return (userLoggedIn.email ? children : <Navigate to="/login" />)

}

export default PrivateRoute;