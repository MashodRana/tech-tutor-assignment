import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import './Header.css';


const Header = () => {

    const navlinkStyles = {
        textDecoration: 'none',
        color: 'orange',
        backgroundColor: '#efebe7'
    }
    return (
        <div>
            <Navbar className="custom-header" expand="lg">
                <Container>
                    <Navbar.Brand href="#home"> <span className="brand">Tech Tutor</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavLink to='/home' activeStyle={navlinkStyles}>Home</NavLink>
                            <NavLink to='/courses' activeStyle={navlinkStyles}>Courses</NavLink>
                            <NavLink to='/articles' activeStyle={navlinkStyles}>Articles</NavLink>
                            <NavLink to='/about' activeStyle={navlinkStyles}>About</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;