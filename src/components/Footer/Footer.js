import React from 'react';
import Container from 'react-bootstrap/Container';

const Footer = () => {
    return (
        <>
            <div className="footerbg">
                <Container>
                    <div className="footer row">
                        <div className="col-10 col-sm-10 col-md-4 col-lg-4">
                            <ul className='footer-content'>
                                <h4>Services</h4>
                                <li>Emergency Checkup</li>
                                <li>Monthly Checkup</li>
                                <li>Weekly Checkup</li>
                                <li>Deep Checkup</li>
                            </ul>
                        </div>
                        <div className="col-10 col-sm-10 col-md-4 col-lg-4">
                            <ul className='footer-content'>
                                <h4>ORAL HEALTH</h4>
                                <li>Fluoride Treatment</li>
                                <li>Cavity Filling</li>
                                <li>Teath Whitening</li>
                            </ul>
                        </div>
                        <div className="col-10 col-sm-10 col-md-4 col-lg-4">
                            <ul className='footer-content'>
                                <h4>OUR ADDRESS</h4>
                                <li>New York - 101010 Hudson</li>
                            </ul>
                        </div>
                    </div>
                    <h6 className='copyRight'>Copyright 2022 All Rights Reserved</h6>
                </Container>
            </div>
        </>
    );
};

export default Footer;