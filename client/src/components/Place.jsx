import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import "./Place.css"
import { Container, Col, Row, Button } from "react-bootstrap"

function Place(props) {
  const { id } = useParams()

  const place = props.places.find(place => place.id === id)
  return !place ? (<h1>Loading...</h1>) : (
    <article>
      <Container>
        <Row>
          <Col><img alt="tourist attraction pic" src={place.fields.image} width="100%"/></Col>
          <Col>
            <div className="country-name">
              <h1>{place.fields.name}</h1>
              <h4>{place.fields.country}</h4>
            </div>
            <h3>Languages</h3>
            <p>{place.fields.languages}</p>
            <h3>Currency</h3>
            <p>{place.fields.currency}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>Description</h3>
            <p>{place.fields.description}</p>
            <h3>Things to do</h3>
            <p>{place.fields.thingsToDo}</p>
            <Link to={`/edit/${place.id}`}>
              <div className="d-grid gap-2">
                <Button variant="info">Edit</Button>
              </div>
            </Link> 
          </Col>
        </Row>
      </Container>
    </article>
  )
}

export default Place 