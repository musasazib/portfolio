import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div>
                <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
                    <Container className="nav-link">
                        <Navbar.Brand as={Link} to="/home#home"><img
                            // src={logo}
                            height="35 "
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        /></Navbar.Brand>
                        <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                            <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/package">Package</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                        </Navbar.Collapse>
                        <Nav className="me-auto"></Nav>
                    </Container>
                </Navbar>
            </div>
            <div>

            </div>
        </div>
    );
};

export default Header;