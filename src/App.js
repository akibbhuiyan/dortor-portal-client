import React, { createContext } from 'react';
import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Routes, Route } from "react-router-dom";
import Appointment from './components/Appointment/Appointment';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashbord/Dashboard';

export const userContext = createContext()
function App() {
  const [userLoggedIn, setUserLoggedIn] = useState({});
  return (
    <userContext.Provider value={[userLoggedIn, setUserLoggedIn]} >
      <div className="App">
        <p>{userLoggedIn.email}</p>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashbord" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/dashbord/:date" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </userContext.Provider>

  );
}

export default App;
