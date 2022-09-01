import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import './Header.css'
import { Link } from 'react-router-dom';
function Header() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/home">Doctors Portal</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                    <Nav className="ms-auto">
                        <Link to='/home' className='nav-link'>Home</Link>
                        <Nav.Link href="#services">About</Nav.Link>
                        <Link to={`/dashbord/${new Date().toLocaleDateString('en-CA')}`} className='nav-link'>Appointment</Link>

                        <Nav.Link href="#review">Reviews </Nav.Link>
                        <Nav.Link href="#contact">Contact Us</Nav.Link>
                        <Link to='/login'><Button variant="outline-success" className='main_btn'>Login</Button></Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;