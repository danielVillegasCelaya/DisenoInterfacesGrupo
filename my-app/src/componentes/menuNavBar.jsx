import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown,Form } from 'react-bootstrap';
import { menuNav } from '../data/menuNav';
import uuid from 'react-uuid';
class MenuNavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="light">
      <Container>
        <Navbar.Brand href="#home">
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            {menuNav.map((item) => {
              return (
                <Nav.Link key={uuid()} as={Link} to={item.path}>
                  {item.title}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
  }
}
export default MenuNavBar;
