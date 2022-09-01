import React, { useContext, useState } from 'react';
import heroChair from '../../assets/images/chair.png'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import './Appointment.css'
import { MedicalService, months, slot } from '../../SeviceData';
import Button from 'react-bootstrap/Button';
import Footer from '../Footer/Footer';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { ImCross } from "react-icons/im";
import { useForm } from "react-hook-form";
import { userContext } from '../../App';
import { useNavigate } from "react-router-dom";

const Appointment = () => {

    const [date, setDate] = useState(new Date())
    const onChange = date => {
        setDate(date)
    }
    const onlyDate = `${date.getMonth()}-${date.getDate()}-${date.getFullYear()}`
    const [title, settitle] = useState()
    const [services, setServices] = useState([])
    const handleClick = (service) => {
        const serviceMatched = slot.filter(services => services.catagory === service);
        settitle(service)
        setServices(serviceMatched)
    }

    const [open, setOpen] = React.useState(false);
    const [userLoggedIn, setUserLoggedIn] = useContext(userContext)
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const { register, handleSubmit, formState: { errors } } = useForm();
    let navigate = useNavigate();

    const onSubmit = data => {
        const newUserInfo = { ...userLoggedIn, ...data, }
        fetch('https://glacial-ocean-49539.herokuapp.com/appointment', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUserInfo)
        })
            .then(res => res.json())
            .then(data => {

                console.log(data);
            })
        setOpen(false);
        navigate(`/dashbord/${onlyDate}`, { replace: true });

    }
    return (
        <div>
            <div className="container">
                <div className="hero row" id='home'>
                    <div className="col-10 col-sm-10 col-md-6 col-lg-6">
                        <Calendar onChange={onChange} value={date} />
                    </div>
                    <div className="col-10 col-sm-10 col-md-6 col-lg-6">
                        <img src={heroChair} alt="chair" className='chairpic' />
                    </div>
                </div>
                <div className="availableservice">
                    <h4 className='main-title'>Available Services on {onlyDate}</h4>
                    <p>Please select a service.</p>
                    <div className="mediacttreatment">
                        {
                            MedicalService.map(service => <div className='service-app' onClick={() => handleClick(service)}><h2>{service}</h2></div>)
                        }
                    </div>
                    {
                        title && <h4 className='main-title'>Available slots for {title}</h4>
                    }
                    <div className="mediacttreatment">
                        {
                            services && services.map(service => <div className='service-app' key={service.id}>
                                <h2>{service.name}</h2>
                                <p>{service.time}</p>
                                <Button variant="info" className='mainBtn' onClick={handleClickOpen}>Book Appointment</Button>
                                <Dialog open={open} >
                                    <button className="icon" onClick={handleClose}><ImCross /></button>
                                    <DialogTitle style={{ 'marginLeft': '30px' }}>{service.name}</DialogTitle>
                                    <DialogContent>
                                        <form onSubmit={handleSubmit(onSubmit)} className='popupForm'>
                                            <input type='text' name="date" value={onlyDate} disabled required />
                                            <input type='text' name="time" value={service.time} disabled required />

                                            <input type='hidden' {...register("date", { required: true })} name="date" value={onlyDate} required />
                                            <input type='hidden' {...register("time", { required: true })} name="time" value={service.time} required />
                                            <input type='hidden' {...register("servicename", { required: true })} name="servicename" value={service.name} required />
                                            <input type="text" {...register("name", { required: true })} name="name" placeholder='Full Name' required />
                                            <input type="number" {...register("phone", { required: true })} name="phone" placeholder='Phone Number' required />
                                            <input type="email" {...register("email", { required: true })} name="email" placeholder='Email' />
                                            <input type="submit" value="Submit" />
                                        </form>
                                    </DialogContent>
                                </Dialog>
                            </div>)
                        }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Appointment;