import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import "./Place.css"

function Place(props) {
  const { id } = useParams()

  const place = props.places.find(place => place.id === id)
  return !place ? (<h1>Loading...</h1>) : (
    <article>
      <img alt="tourist attraction pic" src={place.fields.image} width="100%"/>
      <h1>{place.fields.name}, {place.fields.country}</h1>
      <h3>Things to do</h3>
      <p>{place.fields.thingsToDo}</p>
      <h3>Description</h3>
      <p>{place.fields.description}</p>
      <h3>Languages</h3>
      <p>{place.fields.languages}</p>
      <h3>Currency</h3>
      <p>{place.fields.currency}</p>
      <Link to={`/edit/${place.id}`}>
        <button>Edit</button>
      </Link>
    </article>
  )
}

export default Place 