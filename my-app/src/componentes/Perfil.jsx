import React from "react";
import { Card, Container, Row, Button} from 'react-bootstrap';
import { Usuarios } from '../data/Usuarios';

class Perfil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {user: '', email: '', pass: '', name: '',};
  }
  componentDidMount() {  // le da los valores de Usuarios a los estados mediante la id y localStorage
    if (localStorage.getItem('id') !== null) {
      this.setState({
        user: Usuarios[localStorage.getItem('id')].nombre,
        email: Usuarios[localStorage.getItem('id')].email,
        pass: Usuarios[localStorage.getItem('id')].pass,
        name: Usuarios[localStorage.getItem('id')].name,
      });
    }
  }
  limpiar() {  // limpiarmos el local storage para desloguearse
    localStorage.clear(this);
    alert('Te has deslogueado');
    //removeItem(this.id)
  }
  render() {
    if (localStorage.getItem('id') !== null) { // si la id no esta asignada , no se muestra la interfaz de los datos
      return (
        <div className="bg">
          <Container>
            <Row>
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
                  <Card.Text>
                    <p />
                  </Card.Text>
                  <Button
                    variant="primary"
                    type="button"
                    onClick={this.limpiar}
                  >
                    Logout
                  </Button>
                </Card.Body>
              </Card>
            </Row>
          </Container>
        </div>
      );
    }else{
      return (
        <div className="bg">
          Tienes que iniciar sesion si quieres ver los datos del usuario
          </div>
          );
    }
  }
  }
  export default Perfil;
