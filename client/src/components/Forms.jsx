import { useState, useEffect } from "react"
import axios from "axios"
import { baseURL, config } from "../services"
import { useParams } from "react-router-dom"
import { useHistory } from "react-router-dom"
import "./Forms.css"
import { Button, Form, FloatingLabel } from 'react-bootstrap'

function Forms(props) {
  const [image, setImage] = useState("")
  const [name, setName] = useState("")
  const [country, setCountry] = useState("")
  const [thingsToDo, setThingsToDo] = useState("")
  const [description, setDescription] = useState("")
  const [languages, setLanguages] = useState("")
  const [currency, setCurrency] = useState("")

  const params = useParams()
  const history = useHistory()
  let buttonName = ""
  
  useEffect(() => {
    if (params.id && props.places.length > 0) {
      const placeToEdit = props.places.find((place) => params.id === place.id)
      if (placeToEdit) {
        setImage(placeToEdit.fields.image)
        setName(placeToEdit.fields.name)
        setCountry(placeToEdit.fields.country)
        setThingsToDo(placeToEdit.fields.thingsToDo)
        setDescription(placeToEdit.fields.description)
        setLanguages(placeToEdit.fields.languages)
        setCurrency(placeToEdit.fields.currency)
      }
    }
  }, [params.id, props.places])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPlace = {
      image,
      name,
      country,
      thingsToDo,
      description,
      languages,
      currency
    }
    if (params.id) {
      await axios.put(`${baseURL}/${params.id}`, { fields: newPlace }, config)
    } else {
      await axios.post(baseURL, { fields: newPlace }, config)
    }
    props.setToggleFetch((prevToggleFetch) => !prevToggleFetch)
    history.push("/")
  }

  if (params.id) {
    buttonName = "Update"
  } else {
    buttonName = "Add"
  }

  return (
    <div className="form">
    <Form onSubmit={handleSubmit}>
      <Form.Text className="text-muted">
      Hint: https://i.imgur.com/example.jpg
      </Form.Text>
      <FloatingLabel
      controlId="floatingInput"
      label="Image"
      className="mb-3"
      >
      <Form.Control
      type="url"
      placeholder="Image"
      value={image}
      onChange={(e) => setImage(e.target.value)} />
      </FloatingLabel>
      <FloatingLabel
      controlId="floatingInput"
      label="Name"
      className="mb-3"
      >
      <Form.Control
      type="text"
      placeholder="Name"
      value={name}
      onChange={(e) => setName(e.target.value)} />
      </FloatingLabel>
      <FloatingLabel
      controlId="floatingInput"
      label="Country"
      className="mb-3"
      >
      <Form.Control
      type="text"
      placeholder="Country"
      value={country}
      onChange={(e) => setCountry(e.target.value)} />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea" label="Things to do" className="mb-3">
      <Form.Control
      as="textarea"
      placeholder="Things to do"
      value={thingsToDo}
      onChange={(e) => setThingsToDo(e.target.value)}
      style={{ height: '100px' }}
      />
      </FloatingLabel>
      <FloatingLabel controlId="floatingTextarea" label="Description" className="mb-3">
      <Form.Control
      as="textarea"
      placeholder="Description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      style={{ height: '100px' }}
      />
      </FloatingLabel>
      <FloatingLabel
      controlId="floatingInput"
      label="Languages"
      className="mb-3"
      >
      <Form.Control
      type="text"
      placeholder="Languages"
      value={languages}
      onChange={(e) => setLanguages(e.target.value)} />
      </FloatingLabel>
      <FloatingLabel
      controlId="floatingInput"
      label="Currency"
      className="mb-3"
      >
      <Form.Control
      type="text"
      placeholder="Currency"
      value={currency}
      onChange={(e) => setCurrency(e.target.value)} />
        </FloatingLabel>
      <div className="mb-2">
          <Button variant="primary" type="submit" size="lg">{buttonName}</Button>
      </div>
      </Form>
      </div>
    // <>
    // <form onSubmit={handleSubmit}>
     //<label htmlFor="image">Image </label>
    //<br />
    // <input
    //     value={image}
    //     onChange={(e) => setImage(e.target.value)}
    //     id="image"
    //     type="url"
    //     autoComplete="off"
    //     placeholder="Image url e.g. https://i.imgur.com/example.jpg"
    //     required
    //   />
    //   <br />
    //   <label htmlFor="name">Name </label>
    //   <br />
    //   <input
    //     value={name}
    //     onChange={(e) => setName(e.target.value)}
    //     type="text"
    //     autoComplete="off"
    //     id="name"
    //     placeholder="Name"
    //     required
    //   />
    //   <br /> 
    //   <label htmlFor="country">Country </label>
    //   <br />
    //   <input
    //     value={country}
    //     onChange={(e) => setCountry(e.target.value)}
    //     type="text"
    //     autoComplete="off"
    //     id="country"
    //     placeholder="Country"
    //     required
    //   />
    //   <br />
    //   <label htmlFor="thingsToDo">Things to do: </label>
    //   <br />
    //   <textarea
    //     value={thingsToDo}
    //     onChange={(e) => setThingsToDo(e.target.value)}
    //     id="thingsToDo"
    //     placeholder="Things to do"
    //     required
    //   />
    //   <br />
    //   <label htmlFor="description">Description: </label>
    //   <br />
    //   <textarea
    //     value={description}
    //     onChange={(e) => setDescription(e.target.value)}
    //     id="description"
    //     placeholder="Description"
    //     required
    //   />
    //   <br />
    //   <label htmlFor="languages">Languages </label>
    //   <br />
    //   <input
    //     value={languages}
    //     onChange={(e) => setLanguages(e.target.value)}
    //     type="text"
    //     autoComplete="off"
    //     id="languages"
    //     placeholder="Languages"
    //     required
    //   />
    //   <br />
    //   <label htmlFor="currency">Currency </label>
    //   <br />
    //   <input
    //     value={currency}
    //     onChange={(e) => setCurrency(e.target.value)}
    //     type="text"
    //     autoComplete="off"
    //     id="currency"
    //     placeholder="Currency"
    //     required
    //   />
    //   <br />
    //     <button type="submit">{buttonName}</button>
    //   </form>
    //   </>
  )
}

export default Forms 