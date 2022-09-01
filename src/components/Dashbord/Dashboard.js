import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { userContext } from '../../App';
import './Dashboard.css'
const Dashboard = () => {
    const { date } = useParams();
    const [appointment, setAppointment] = useState([])
    const [userLoggedIn, setUserLoggedIn] = useContext(userContext)
    console.log(userLoggedIn.email);
    useEffect(() => {
        fetch(`https://glacial-ocean-49539.herokuapp.com/dashboard?email=${userLoggedIn.email}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => setAppointment(data))
    }, [userLoggedIn])

    return (
        <div className="container">
            <div className='row'>
                <div className="col-md-3 col-lg-3 dashbord-left">
                    <p>My Appointment</p>
                </div>
                <div className="col-11 col-sm-11 col-md-9 col-lg-9 dashbord-right">
                    <div className="dashbord-title">
                        <p>My Appointment</p>
                        <button>{date}</button>
                    </div>
                    <table className="css-serial dashbord-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Services</th>
                                <th>Time</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                appointment.map(ap =>
                                    <tr>
                                        <td></td>
                                        <td>{ap.name}</td>
                                        <td>{ap.servicename}</td>
                                        <td>{ap.date}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    );
};

export default Dashboard;