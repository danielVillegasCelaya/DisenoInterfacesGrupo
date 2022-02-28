import React from 'react';
import { Container, Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap';
import { Usuarios } from '../data/Usuarios';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {user: '', password: '',id: '' };
        this.login = this.login.bind(this);
        this.inputuser = React.createRef();
        this.inputpass = React.createRef();
        this.inputcheck = React.createRef();
      }
      login() {
        this.setState({
          user: this.inputuser.current.value,
          password: this.inputpass.current.value,
        });
      }
      componentWillUnmount() {
          {Usuarios.map((item) => {
              if (
                item.nombre === this.state.user &&
                item.pass === this.state.password
              ) {
                localStorage.setItem('id', item.id);
              }
            });
            alert('Te has logueado correctamente: ' + this.state.user);
          }
        
      }
      componentDidMount() {
        this.setState({
          id: localStorage.getItem('id'),
        });
      }
    
      render() {
          return (
            <div className="bg">
            <br />
            <Container>
                <Row>
                    <Col xs={3} className="p-3 m-auto  shadow rounded">
                        <Form>
                            <FloatingLabel controlId="floatingInput" label="Usuario" className="mb-3">
                                <Form.Control size='lg'
                                    type="email"
                                    placeholder="Usuario"
                                    ref={this.inputuser} />
                            </FloatingLabel>

                            <FloatingLabel controlId="floatingPassword" label="Contraseña" className="mb-3">
                                <Form.Control size='lg'
                                    type="password"
                                    placeholder="Contraseña"
                                    ref={this.inputpass} />
                            </FloatingLabel>
                        </Form>
                        <div className="d-grid gap-2">
                            <Button size='lg' variant="primary" type="button" onClick={this.login}>
                                Iniciar Sesion
                            </Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
          );
        }
      }


export default Login;
