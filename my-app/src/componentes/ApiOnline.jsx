//www.themealdb.com/api/json/v1/1/filter.php?a=Canadian
import React,{useState} from 'react';
import { Card, Container, Table, Row, Col, Spinner } from 'react-bootstrap';
import uuid from 'react-build';
class ApiOnline extends React.Component {
  constructor(props) {
    super(props);
    this.state = { selectedItem: 0, tableData: [] };
  }

  async componentDidMount() {
    const response = await fetch(
      'https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian'
    );
    const responseData = await response.json();
    console.log("Prueba",responseData.meals);
    this.setState({ tableData: responseData.meals, selectedItem: responseData.meals[0] });

  }

  recogerDetalles = (item) => {
    this.setState({ selectedItem: item });
  };

  render() {
      return (
        <div className="main-site">
          <h1>Comidas</h1>
          <Container>
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
                        <tr key={uuid()}
                         onClick={() => this.recogerDetalles(item)}>
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
          </Container>
        </div>
      );
    }
    
  
}

export default ApiOnline;