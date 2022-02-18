import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav,Offcanvas ,Form, FormControl, Button } from 'react-bootstrap';
import { MenuNav } from '../data/MenuNav';
import './StyleMenu.css';

class MenuNavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar bg="Dark" expand={false}>
        <Container fluid>
          <Navbar.Brand>
            <h2><img
              className="logo-image"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png"
              width="50px"
              alt="logo"
            />Proyecto DI</h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Menus
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className="me-auto my-2 my-lg-0"
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

