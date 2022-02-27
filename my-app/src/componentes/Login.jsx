import React from 'react';
import { Container, Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap';
import { Usuarios } from '../data/Usuarios';
import './index.css';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { Usuario: null };
        this.users = Usuarios;
        this.login = this.login.bind(this);
        this.inputUser = React.createRef();
        this.inputPassword = React.createRef();
    }

    login() {

        let e = false;

        Usuarios.map((item) => {
            if (item.user.match(this.inputUser.current.value) && item.password.match(this.inputPassword.current.value)) {
                e = true;
                this.setState({ Usuario: item });
            }
        });

        if (e === true) {
            alert('Bienvenido');
        } else {
            alert('Usuario o contreña incorrectos.');
        }
    }


    componentDidMount() {

        if (localStorage.getItem('id') !== 'null'||
        localStorage.getItem('user') !== 'null'||
        localStorage.getItem('password') !== 'null'||
        localStorage.getItem('name') !== 'null'||
        localStorage.getItem('mail') !== 'null') {
            this.setState({
                Usuario: this.users[localStorage.getItem('id')],
                Usuario: this.users[localStorage.getItem('user')],
                Usuario: this.users[localStorage.getItem('password')],
                Usuario: this.users[localStorage.getItem('name')],
                Usuario: this.users[localStorage.getItem('mail')],
            });
        } else {
            this.setState({
                Usuario: null
            });
        }
    }

    componentWillUnmount() {
        if (this.state.Usuario !== null) {
            localStorage.setItem('id', this.state.Usuario.id);
            localStorage.setItem('user',this.state.Usuario.user);
            localStorage.setItem('password',this.state.Usuario.password);
            localStorage.setItem('name',this.state.Usuario.name);
            localStorage.setItem('mail',this.state.Usuario.mail);
        } else {
            localStorage.setItem('id', null);
            localStorage.setItem('user',null);
            localStorage.setItem('password',null);
            localStorage.setItem('name',null);
            localStorage.setItem('mail',null);
        }
    }



    render() {
        if (this.state.Usuario !== null) {
            return (
                <div className="bg">
                    <br />
                    <Container>
                        <Row>
                            <Col xs={8} className="p-3 m-auto  shadow rounded">
                                <h1>Bienvenido {this.state.Usuario.user}</h1>
                            </Col>
                        </Row>
                    </Container>
                </div>
            );
        } else {

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
                                            ref={this.inputUser} />
                                    </FloatingLabel>

                                    <FloatingLabel controlId="floatingPassword" label="Contraseña" className="mb-3">
                                        <Form.Control size='lg'
                                            type="password"
                                            placeholder="Contraseña"
                                            ref={this.inputPassword} />
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
}

export default Login;
