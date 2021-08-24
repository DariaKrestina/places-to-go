import { useState, useEffect } from "react"
import axios from "axios"
import { baseURL, config } from "../services"
import { useParams } from "react-router-dom"

function Form(props) {
  const [image, setImage] = useState("")
  const [name, setName] = useState("")
  const [country, setCountry] = useState("")
  const [thingsToDo, setThingsToDo] = useState("")
  const [description, setDescription] = useState("")
  const [languages, setLanguages] = useState("")
  const [currency, setCurrency] = useState("")
  
  const newPlace = {
    image,
    name,
    country,
    thingsToDo,
    description,
    languages,
    currency
  }



  return (
    <form>
      <input type="url" placeholder="e.g. https://i.imgur.com/example.jpg" />
      <br />
      <input type="text" />
      <br />
      <input type="text" />
      <br />
      <textarea />
      <br />
      <textarea />
      <br />
      <input type="text" />
      <br />
      <input type="text" />
      <br />
      <input type="submit"/>
    </form>
  )
}

export default Form 