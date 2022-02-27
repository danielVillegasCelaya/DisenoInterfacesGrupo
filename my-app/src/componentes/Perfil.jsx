import React from "react";
import { Button, Container } from 'react-bootstrap';
import { Usuarios } from '../data/Usuarios';
import './index.css';

class Perfil extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        id:'',
        user:'',
        password:'',
        name:'',
        mail:'',
      };
    }
  
    logout() {
      localStorage.clear();
    }
  
    componentDidMount() {
      this.setState({id:localStorage.getItem('id')});
      this.recogerUsuario();
    }
  
    recogerUsuario(){
        
    }

    render() {
      if (this.state.id === '') {
        return (
          <div className="main-site">
            <h1> Tienes que iniciar sesión</h1>
          </div>
        );
      } else {
        return (
          <Container>
            <h1>Perfil</h1>
            <h2>Nombre de usuario{Usuarios[this.state.usuario].user}</h2>
            <h2>Nombre {Usuarios[this.state.usuario].name}</h2>
            <h2>Contraseña {Usuarios[this.state.usuario].password}</h2>
            <h2>Email {Usuarios[this.state.usuario].mail}</h2>
            <br />
            <Button
              variant="primary"
              type="button"
              onClick={this.logout.bind(this)}
            >
              Logout
            </Button>
            </Container>
        );
      }
    }
  }
  export default Perfil;
