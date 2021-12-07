import React from 'react';
import './Header.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="background">
            <div>
                <Navbar collapseOnSelect expand="lg" >
                    <Container className="nav-link">
                        <Navbar.Brand as={Link} to="/home#home"><img
                            // src={logo}
                            height="35 "
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        /></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={Link} to="/home#home">Resume</Nav.Link>
                            <Nav.Link as={Link} to="/package">Projects</Nav.Link>
                            <Nav.Link as={Link} to="/about">Reviews</Nav.Link>
                            <Nav.Link as={Link} to="/about">Contact</Nav.Link>
                        </Navbar.Collapse>
                        <Nav className="me-auto"></Nav>
                    </Container>
                </Navbar>
            </div>
            <div>
                <div className="container">
                    <div className="row profile-padding">
                        <div className="col-12 col-md-4">
                            <img src="https://i.ibb.co/9NBVjky/68.jpg" alt="" className="img-fluid rounded img-size" />
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="profile-details">
                                <h1 className="pt-3">Abu Saleh Md. Musa Sazib</h1>
                                <h3>I'm A Self Believer</h3>
                                <br />
                                <h5>Age: 24</h5>
                                <h5>Email: musasazib@gmailcom</h5>
                                <h5>Address: Dhaka, Bangladesh</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;