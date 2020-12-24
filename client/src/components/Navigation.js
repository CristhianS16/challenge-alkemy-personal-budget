import React from 'react'
import {Link} from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';

const Navigation = ({title}) => {
    return (
        <Navbar animation="false" collapseOnSelect expand="lg" bg="primary" variant="dark" fixed="top">
          <Navbar.Brand>{title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse animation="false" id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to ="/operations">Operations</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation;
