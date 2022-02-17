import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav,Offcanvas ,Form, FormControl, Button } from 'react-bootstrap';
import { MenuNav } from '../data/MenuNav';
import './style.css';

class MenuNavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar bg="Dark" expand={false}>
        <Container fluid>
          <Navbar.Brand><img "https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg2.freepng.es%2F20180505%2Fzae%2Fkisspng-kitchen-utensil-logo-rolling-pins-cook-5aed90335d04b5.390316611525518387381.jpg&imgrefurl=https%3A%2F%2Fwww.freepng.es%2Fpng-rv6zip%2F&tbnid=s8RbXwpiwQQi_M&vet=12ahUKEwiyzLf5pob2AhXV8LsIHTLkCecQMygZegUIARCXAg..i&docid=KXG5TvZRyYyu4M&w=900&h=780&q=logo%20cocina&ved=2ahUKEwiyzLf5pob2AhXV8LsIHTLkCecQMygZegUIARCXAg"

          />
            Proyecto DI
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">
                Menus
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                {MenuNav.map((item) => {
                  return <Nav.Link as={Link} to={item.path}>
                    {item.title}</Nav.Link>
                })}
                <Nav.Link href="https://www.afuegolento.com/">Recetas</Nav.Link>
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
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar >
    );
  }
}
export default MenuNavBar;
