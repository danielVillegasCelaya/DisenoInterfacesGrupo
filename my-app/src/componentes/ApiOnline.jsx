//www.themealdb.com/api/json/v1/1/filter.php?a=Canadian
import React from 'react';
import { Card, Container, Table, Row, Col, Carousel } from 'react-bootstrap';
import { COMIDAS_BUSCAR_REGION, COMIDA_LISTA_INGREDIENTES, COMIDA_RANDOM } from '../data/ConstantesApi';
import SelectorRegion from './SelectorRegion';
import Carrousel from './Carrousel';

class ApiOnline extends React.Component {
  constructor(props) {
    super(props);
    this.state = { img: '', nombre: '', id: '', selectedItem: '', tableData: [], dataCarrusel: [] };
    this.selectRegion = React.createRef();
    this.cambiarPorRegion = this.cambiarPorRegion.bind(this);
    this.actualizarTabla = this.actualizarTabla.bind(this);
    this.recogerDetalles = this.recogerDetalles.bind(this);
  }

  async componentDidMount() {
    const response = await fetch(COMIDA_RANDOM);
    const responseData = await response.json();
    console.log("Prueba", responseData.meals);
    this.setState({ tableData: responseData.meals, selectedItem: responseData.meals[0] });

  }


  cambiarPorRegion = async (itemRegion) => {
    const response = await fetch(COMIDAS_BUSCAR_REGION + itemRegion);
    const responseData = await response.json();
    console.log("Prueba busqueda de comida ", responseData.meals);
    this.setState({
      tableData: responseData.meals,
    });
  }

  actualizarTabla = async () => {
    this.cambiarPorRegion(this.selectRegion.current.value);
  }

  recogerDetalles = (item) => {
    this.setState({selectedItem: item });
  };

  render() {
    return (
      <div className="abg">
        <Container>
          <h1>Comidas</h1>
          <SelectorRegion
            reference={this.selectRegion}
            onClickForm={this.actualizarTabla}
          />
          <Row>
            <Col lg={8} md={6}>
              <Table responsive striped hover>
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Id</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tableData.map((item) => {
                    return (
                      <tr onClick={() => this.recogerDetalles(item)}>
                        <td>{item.strMeal}</td>
                        <td>{item.idMeal}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
            <Col lg={4} md={6}>
              <Card style={{ width: '18rem' }}>
                <Card.Img
                  variant="top"
                  src={this.state.selectedItem.strMealThumb}
                />
                <Card.Body>
                  <Card.Title>{this.state.selectedItem.strMeal}</Card.Title>
                  <Card.Text>
                    Id: {this.state.selectedItem.idMeal}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <p></p>
          <Row>
            <Col lg={7} md={9} className="p-3 m-auto">
              <Carrousel />
            </Col>

          </Row>
        </Container>
      </div >
    );
  }


}

export default ApiOnline;