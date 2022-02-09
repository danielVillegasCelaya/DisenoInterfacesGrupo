import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Usuarios } from '../data/Usuarios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { user: '', password: '', id: undefined };
        this.login = this.login.bind(this);
        this.inputUser = React.createRef();
        this.inputPassword = React.createRef();
    }

    login() {
        let e = false;
        let i = 0;

        do {
            if (
                Usuarios[i].user == this.inputUser.current.value &&
                Usuarios[i].password == this.inputPassword.current.value
            ) {
                e = true;
            } else {
                i += 1;
            }
        } while (i < Usuarios.length && e == false);

        if (e == true) {
            this.setState({
                user: this.inputUser.current.value,
                password: this.inputPassword.current.value,
                id: i
            });
        } else {
            alert('No existe el usuario o la contreña no es la correcta.');
        }
    }

    componentDidMount() {
        this.setState({
            user: localStorage.getItem('user'),
            password: localStorage.getItem('password'),
            id: localStorage.getItem('id')
        });
    }

    componentWillUnmount() {
        localStorage.setItem('user', this.state.user);
        localStorage.setItem('password', this.state.password);
        localStorage.setItem('id', this.state.id);
    }

    render() {
        if (
            this.state.user != null &&
            this.state.user != 'null' &&
            this.state.user != '' &&
            this.state.password != null &&
            this.state.password != 'null' &&
            this.state.password != ''
        ) {

            return (
                <div className="main-site">
                    <Container>
                        <br />
                        <h1>Bienvenido {this.state.user}</h1>
                    </Container>
                </div>
            );
        } else {

            return (
                <div className="main-site">
                    <Container>
                        <br />
                        <h1>Inicio de sesion:</h1>
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Nombre de usuario o email: </Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Usuario"
                                    ref={this.inputUser}
                                />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Contraseña: </Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Contraseña"
                                    ref={this.inputPassword}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Recordarme" />
                            </Form.Group>
                            <Button variant="primary" type="button" onClick={this.login}>
                                Login
                            </Button>
                        </Form>
                    </Container>
                </div>
            );
        }
    }
}

export default Login;
