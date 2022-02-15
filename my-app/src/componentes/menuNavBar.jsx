import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown, Form, FormControl,Button } from 'react-bootstrap';
import Inicio from '../componentes/Inicio';
import { MenuNav } from '../data/MenuNav';

class MenuNavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar bg="Dark" expand="lg">
        <Container fluid>
          <Navbar.Brand>Navbar scroll</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="">Home<Inicio/></Nav.Link>
              <Nav.Link href="https://www.afuegolento.com/">Recetas</Nav.Link>
              <NavDropdown title="Menu" id="navbarScrollingDropdown">
                {MenuNav.map((item) => {
                  return <Nav.Link as={Link} to={item.path}>
                    {item.title}</Nav.Link>
                })}
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      </Navbar >
    );
  }
}
export default MenuNavBar;
