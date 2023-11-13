import React, { useState } from 'react'
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from 'react-redux';
import { NavLink , Link } from 'react-router-dom';
export default function AppNav() {
    const cart = useSelector(state => state.cart)
    return (
    <Navbar  expand="lg" className="bg-body-tertiary fixed-top">
        <Container>
            <Link to="/" className='navbar-brand'>CartApp</Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <NavLink className="link" to="/" style={{textDecoration:"none",marginInline:'10px'}}>Products</NavLink>
                    <NavLink className="link" to="cart" style={{textDecoration:"none"}}>
                        Cart-{cart.length ? cart.length : '0'}
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}
