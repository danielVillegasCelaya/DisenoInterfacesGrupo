import React from 'react';
import uuid from 'react-uuid';
import { Container, Row, Col, ListGroupItem,Button,Card } from 'react-bootstrap';

class Favoritos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            favouritesList: [],
        };
        this.removeFavourite = this.removeFavourite.bind(this);
    }

    /**
     * Elimina un elemento de la lista de favoritos
     * @param {*} strMeal
     */
    removeFavourite = (strMeal) => {
        let favouritesDelete = this.state.favouritesList;
        let index = favouritesDelete.findIndex(
            (item) => item.strMeal == strMeal
        );
        // Si el elemento está en la lista de favoritos, devolvemos la lista original filtrada 
        // quitando el elemento seleccionado
        index !== -1
            ? (favouritesDelete = favouritesDelete.filter((item) => {
                return item.strMeal !== strMeal;
            }))
            : console.log('No está en favoritos');
        this.setState({ favouritesList: favouritesDelete });
    };

    /**
     * Al cargar la página, se recupera de localStorage la lista de favoritos
     */
    componentDidMount() {
        let favourites = JSON.parse(localStorage.getItem('favourites'));
        favourites =
            favourites !== null && favourites !== undefined && favourites !== ''
                ? favourites
                : [];
        this.setState({ favouritesList: favourites });
    }

    /**
     * Al eliminar el componente, se copia la lista de favoritos al localStorage
     */
    componentWillUnmount() {
        localStorage.setItem('favourites', JSON.stringify(this.state.favouritesList));
    }

    render() {
        return (
            <div>
                <h1>Favoritos</h1>
                <Container>
                    <Row>
                        {this.state.favouritesList.map((item) => {
                            return (
                                <Col key={uuid()} lg={4} md={6}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img
                                            variant="top"
                                            src={item.strMealThumb}
                                        />
                                        <Card.Body>
                                            <Card.Title>{item.strMeal}</Card.Title>
                                            <Card.Text>
                                                Id: {item.idMeal}
                                            </Card.Text>
                                        </Card.Body>
                                        <ListGroupItem>
                                            <Button type="button" onClick={() => this.removeFavourite(item.strMeal)} >Eliminar favorito</Button>
                                        </ListGroupItem>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Favoritos;