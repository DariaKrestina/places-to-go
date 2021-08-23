import axios from 'axios'
import { useEffect, useState } from 'react'
import Place from '../components/Place'

function Home(props) {
  const { places } = props
  return (
    places.map((place) => (
    <>
        <img alt='tourist attraction pic' src={place.fields.image} />
        <h2>{place.fields.name}, {place.fields.country}</h2>
    </>
  ))
  )
}

export default Home