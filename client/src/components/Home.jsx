import { Link } from "react-router-dom"
import "./Home.css"

function Home(props) {
  const { places } = props
  return (
    <main>
      {places.map((place) => (
        <>
          <Link to={`/places/${place.id}`}>
            <div className="place">
              <img className="img-place" alt="tourist attraction pic" src={place.fields.image} width="100%" />
              <h2 className="txt-place">{place.fields.name},<br />
                {place.fields.country}</h2>
            </div>
          </Link>
        </>
      ))}
    </main>
  )
}

export default Home