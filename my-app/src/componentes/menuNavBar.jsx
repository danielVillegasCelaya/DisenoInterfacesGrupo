import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav,Offcanvas } from 'react-bootstrap';
import { MenuNav } from '../data/MenuNav';
import uuid from 'react-uuid';
import './StyleMenu.css';
import logo from '../img/logo.png'

class MenuNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.buscar=props.buscar;
  }

  render() {
    return (
      <Navbar bg="Dark" expand={false}>
        <Container fluid>
          <Navbar.Brand>
            <h2><img
              className="logo-image"
              src={logo}
              width="80px"
              alt="logo"
            />El Hogar Culinario</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar"/>
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title class="titulo" id="offcanvasNavbarLabel">
                <h3>Menus</h3>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className="lista"
                style={{ maxHeight: '150px' }}
                navbarScroll
              >
                {MenuNav.map((item) => {
                  return <Nav.Link key={uuid()} as={Link} to={item.path}>
                    {item.title}</Nav.Link>
                })}
                <Nav.Link href="https://www.afuegolento.com/">Recetas</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar >
    );
  }
}

export default MenuNavBar;

