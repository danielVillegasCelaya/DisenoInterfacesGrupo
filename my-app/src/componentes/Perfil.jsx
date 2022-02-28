import React from "react";
import { Card, Container, Row, Button, Col, CardGroup, Form, FloatingLabel, } from 'react-bootstrap';
import { Usuarios } from '../data/Usuarios';

class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = { user: '', email: '', pass: '', name: '', editar: false };
    this.logout = this.logout.bind(this);
    this.changeEditar = this.changeEditar.bind(this);
    this.guardarCambios = this.guardarCambios.bind(this);

    this.inputUser = React.createRef();
    this.inputPassword = React.createRef();
    this.inputEmail = React.createRef();
    this.inputNombre = React.createRef();

  }
  componentDidMount() {
    if (localStorage.getItem('id') !== 'null') {
      this.setState({
        id: localStorage.getItem('id'),
        user: localStorage.getItem('user'),
        email: localStorage.getItem('email'),
        pass: localStorage.getItem('pass'),
        name: localStorage.getItem('name'),
      });
    }
  }

  logout() {
    localStorage.removeItem('id');
    localStorage.removeItem('user');
    localStorage.removeItem('pass');
    localStorage.removeItem('name');
    localStorage.removeItem('email');
    window.location.reload();
  }

  changeEditar() {
    this.setState({ editar: !this.state.editar })
  }

  guardarCambios() {
    localStorage.setItem('user', this.inputUser.current.value);
    localStorage.setItem('pass', this.inputPassword.current.value);
    localStorage.setItem('name', this.inputNombre.current.value);
    localStorage.setItem('email', this.inputEmail.current.value);

    this.setState({
      id: localStorage.getItem('id'),
      user: localStorage.getItem('user'),
      email: localStorage.getItem('email'),
      pass: localStorage.getItem('pass'),
      name: localStorage.getItem('name'),
    });
  }

  render() {
    if (localStorage.getItem('id') !== 'null' && localStorage.getItem('id') !== null) {
      if (this.state.editar == false) {
        return (

          <div className="bg">
            <br />
            <Container>
              <Row>
                <Col xs={3} className="p-3 m-auto">
                  <Card style={{ width: '25rem' }}>
                    <Card.Body>
                      <Card.Title>
                        Usuario: {this.state.user}
                        <p />
                        Email: {this.state.email}
                        <p />
                        Pass: {this.state.pass}
                        <p />
                        Nombre: {this.state.name}
                      </Card.Title>
                      <br />
                      <Button
                        size='lg'
                        variant="primary"
                        type="button"
                        onClick={this.logout}
                      >
                        Logout
                      </Button>

                      <Button
                        size='lg'
                        variant="secondary"
                        type="button"
                        onClick={this.changeEditar}
                      >
                        Editar
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Container>
          </div>
        )

      } else {
        return (
          <div className="bg">
            <br />
            <Container>
              <Row>
                <Col xs={6} className="p-3 m-auto">
                  <CardGroup>
                    <Card style={{ width: '25rem' }}>
                      <Card.Body>
                        <Card.Title>
                          Usuario: {this.state.user}
                          <p />
                          Email: {this.state.email}
                          <p />
                          Pass: {this.state.pass}
                          <p />
                          Nombre: {this.state.name}
                        </Card.Title>
                        <br />
                        <div>
                          <Button
                            size='lg'
                            variant="primary"
                            type="button"
                            onClick={this.logout}
                          >
                            Logout
                          </Button>

                          <Button
                            size='lg'
                            variant="secondary"
                            type="button"
                            onClick={this.changeEditar}
                          >
                            Dejar de Editar
                          </Button>
                        </div>


                      </Card.Body>
                    </Card>

                    <Card style={{ width: '25rem' }}>
                      <Card.Body>
                        <Form>
                          <Form.Label>Usuario:</Form.Label>
                          <Form.Control size='lg'
                            type="text"    
                            defaultValue={this.state.user}
                            ref={this.inputUser} />

                          <Form.Label>Email:</Form.Label>
                          <Form.Control size='lg'
                            type="email"
                            defaultValue={this.state.email}
                            ref={this.inputEmail} />

                          <Form.Label>Contraseña:</Form.Label>
                          <Form.Control size='lg'
                            type="password"
                            defaultValue={this.state.pass}
                            ref={this.inputPassword} />

                          <Form.Label>Nombre:</Form.Label>
                          <Form.Control size='lg'
                            type="text"
                            defaultValue={this.state.name}
                            ref={this.inputNombre} />
                        </Form>
                        <br />
                        <div className="d-grid gap-2">
                          <Button size='lg' variant="primary" type="button" onClick={this.guardarCambios}>
                            Guardar Cambios
                          </Button>
                        </div>
                      </Card.Body>
                    </Card>
                  </CardGroup>
                </Col>
              </Row>
            </Container>
          </div>
        );
      }
    } else {
      return (
        <div className="bg">
                    <br />
                    <Container>
                        <Row>
                            <Col xs={4} className="p-3 m-auto  shadow rounded">
                                <h1>Inicie sesion primero</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
      );
    }
  }
}
export default Perfil;

