import { Component } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MenuPurchase from '../../../../services/menu.service'

class FoodDetails extends Component {

    constructor() {
        super()
        this.state = {
            food: undefined
        }
        this.foodService = new MenuPurchase()
    }

    loadFoodDetails() {
        const { food_id } = this.props.match.params

        this.foodService
            .foodDetails(food_id)
            .then(response => this.setState({ food: response.data }))
            .catch(err => console.log(err))

    }
    componentDidMount() {
        this.loadFoodDetails()
    }


    render() {

        return (

            <Container>

                {!this.state.food
                    ?
                    <h3>Cargando</h3>
                    :
                    <Row className="justify-content-around">
                        <Col md={6}>
                            <h1>{this.state.food.name}</h1>
                            <p>{this.state.food.description}</p>
                            <p>{this.state.food.ingredients}</p>

                            <hr></hr>

                            <p>Vegetarian: {this.state.food.vegetarian}</p>
                            <p>Plato: {this.state.food.type}</p>

                            <hr></hr>

                            <Link to="/menu" className="btn btn-dark">Volver al listado</Link>

                        </Col>

                        <Col md={4}>
                            <img src={this.state.food.image[0]} alt={this.state.food.title} style={{ width: '100%' }} />
                            <img src={this.state.food.image[1]} alt={this.state.food.title} style={{ width: '100%' }} />
                        </Col>
                    </Row>
                }

            </Container>
        )
    }
}


export default FoodDetails
