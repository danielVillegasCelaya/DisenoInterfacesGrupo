import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav,Offcanvas ,Form, FormControl, Button } from 'react-bootstrap';
import { MenuNav } from '../data/MenuNav';
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
                  return <Nav.Link as={Link} to={item.path}>
                    {item.title}</Nav.Link>
                })}
                <Nav.Link href="https://www.afuegolento.com/">Recetas</Nav.Link>
              </Nav>
              <Form className="d-flex" id="formbuscar" >
                <FormControl 
                  ref={this.buscar}
                  type="search"
                  placeholder="Buscar"
                  className="me-2"
                  aria-label="Search"
                />
                <Button id="botonbuscar">Buscar</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar >
    );
  }
}

export default MenuNavBar;

