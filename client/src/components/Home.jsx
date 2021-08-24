import { Link } from "react-router-dom"

function Home(props) {
  const { places } = props
  return (
    places.map((place) => (
      <>
        <Link to={`/places/${place.id}`}>
          <img alt="tourist attraction pic" src={place.fields.image} />
          <h2>{place.fields.name}, {place.fields.country}</h2>
        </Link>
    </>
  ))
  )
}

export default Home