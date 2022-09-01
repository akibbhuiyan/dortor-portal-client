import React from 'react';
import './Home.css'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import heroChair from '../../assets/images/chair.png'
import treatment from '../../assets/images/treatment.png'
import doctor from '../../assets/images/doctor-small.png'
import clock from '../../assets/icons/clock.svg'
import marker from '../../assets/icons/marker.svg'
import phone from '../../assets/icons/phone.svg'
import { Service, Comments } from '../../SeviceData';
import { Link } from 'react-router-dom'
import Footer from '../Footer/Footer';
const Home = () => {
    return (
        <div className='mt-3'>
            <Container>
                <div className="hero row" id='home'>
                    <div className="col-10 col-sm-10 col-md-6 col-lg-6">
                        <h1>Your New Smile Starts Here</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                        <Link to='/appointment'><Button variant="contain" className='getstarted'>Get Started</Button></Link>
                    </div>
                    <div className="col-10 col-sm-10 col-md-6 col-lg-6">
                        <img src={heroChair} alt="chair" className='chairpic' />
                    </div>
                </div>

                <div className="aboutus row">
                    <div className="col-10 col-sm-9 col-md-3 col-lg-3 cardgroup">
                        <img src={clock} alt="clock" />
                        <div className="details">
                            <h5>Opening Hour</h5>
                            <p>Lorem Ipsum is simply dummy text of the pri</p>
                        </div>
                    </div>
                    <div className="col-10 col-sm-9 col-md-3 col-lg-3 cardgroup">
                        <img src={marker} alt="clock" />
                        <div className="details">
                            <h5>Visit our Location</h5>
                            <p>Brooklyn, NY 10036, United States</p>
                        </div>
                    </div>
                    <div className="col-10 col-sm-9 col-md-3 col-lg-3 cardgroup">
                        <img src={phone} alt="clock" />
                        <div className="details">
                            <h5>Contact us now</h5>
                            <p>+000 123 456789</p>
                        </div>
                    </div>
                </div>
                <div className="service" id='services'>
                    <p className='main-title'>OUR SERVICES</p>
                    <h4 className='main-subtitle'>Services We Provide</h4>
                    <div className="row">
                        {
                            Service.map(card =>
                                <div className="col-10 col-sm-10 col-md-4 col-md-4 serviceCard" key={card.id}>
                                    <img src={card.img} alt={card.name} />
                                    <h3>{card.name}</h3>
                                    <p>{card.description}</p>
                                </div>)
                        }
                    </div>
                    <div className="hero row">
                        <div className="col-10 col-sm-10 col-md-6 col-lg-6">
                            <img src={treatment} alt="chair" className='treatment' />
                        </div>
                        <div className="col-10 col-sm-10 col-md-6 col-lg-6">
                            <h1>Exceptional Dental Care, on Your Terms</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <Link to='/appointment'><Button variant="contain" className='getstarted'>Get Started</Button></Link>
                        </div>

                    </div>
                </div>

            </Container>
            <div className="service" id='appointment'>
                <div className="appointment">
                    <Container className='row'>
                        <div className="col-10 col-sm-10 col-md-6 col-lg-6 doctor-img">
                            <img src={doctor} alt="chair" className='doctorImg' />
                        </div>
                        <div className="col-10 col-sm-10 col-md-6 col-lg-6 appointment-details">
                            <h3 className='main-title'>Appointment</h3>
                            <h1>Make an appointment Today</h1>
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                            <Link to='/appointment'><Button variant="contain" className='getstarted'>Get Started</Button></Link>
                        </div>
                    </Container>
                </div>
            </div>
            <Container>
                <div className="testimonial" id='review'>
                    <p className='main-title'>Testimonial</p>
                    <h4 className='main-subtitle'>What Our Patients Says</h4>
                    <div className="row">
                        {
                            Comments.map(card =>
                                <div className="col-10 col-sm-10 col-md-4 col-md-4 serviceCard testimonialCard" key={card.id}>
                                    <p>{card.comment}</p>
                                    <div className="person">
                                        <img src={card.img} alt={card.name} />
                                        <div className="person-details">
                                            <h4>{card.name}</h4>
                                            <p>{card.from}</p>
                                        </div>
                                    </div>
                                </div>)
                        }
                    </div>
                </div>
            </Container>
            <div className="service" id='contact'>
                <div className="appointment">
                    <Container className='contactSection'>
                        <p className='main-title'>Contact Us</p>
                        <h4 className='main-subtitle'>Stay connected with us</h4>
                        <form className='contact-form'>
                            <input type="email" name="email" placeholder='Email Address' /><br />
                            <input type="text" name="subject" placeholder='Subject' /><br />
                            <textarea name="message" placeholder='Your message' className='msgBox'></textarea> <br />
                            <Button variant="info">Submit</Button>
                        </form>
                    </Container>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;