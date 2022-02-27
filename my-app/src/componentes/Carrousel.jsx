import React from 'react';
import { Card, Container, Table, Row, Col, Carousel } from 'react-bootstrap';
import { COMIDA_LISTA_INGREDIENTES } from '../data/ConstantesApi';
import './StyleMenu.css';
class Carrousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { dataCarrusel: [] };
  }

  async componentDidMount() {

    const response = await fetch(COMIDA_LISTA_INGREDIENTES);
    const responseData = await response.json();
    console.log("Prueba busqueda de ingredientes ", responseData.meals);
    this.setState({
      dataCarrusel: responseData.results,
    });

  }

  render() {
    return (
      <Container>
        <h3>Recetas famosas</h3>
        <Row>
          <Carousel class="carousel">
            {this.state.dataCarrusel.map((item) => {
              return (
                <Carousel.Item>
                  <img class="imgc"
                    className="d-block w-100"
                    src={item.image}
                  />
                  <Carousel.Caption>
                    <h4>{item.title}</h4>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </Row>
      </Container>
    );
  }
}

export default Carrousel;