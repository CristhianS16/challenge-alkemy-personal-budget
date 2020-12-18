import React from 'react'
import {Link} from "react-router-dom";
import {Navbar, Nav} from 'react-bootstrap';

const NavComponent = ({title}) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark" fixed="top">
          <Navbar.Brand>{title}</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link>
                <Link to="/" className="text-light text-decoration-none">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/operations" className="text-light text-decoration-none">Operations</Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
    )
}

export default NavComponent;
