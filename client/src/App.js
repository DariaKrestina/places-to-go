import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Place from "./components/Place";
import Form from "./components/Form";
import Footer from "./components/Footer";
import { Link, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURL, config } from "./services";
import axios from "axios";

function App() {
  const [places, setPlaces] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchPlaces = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data.records);
      setPlaces(resp.data.records);
    };
    fetchPlaces();
  }, [toggleFetch]);

  return (
    <>
      <Nav />
      <Route path="/" exact>
        <Home places={places}/>
      </Route>
      <Route path="/places/:id">
        <Place />
      </Route>
      <Route path="/new">
        <Form />
      </Route>
      <Route path="/edit/:id">
        <Form />
      </Route>
      <Footer />
    </>
  );
}

export default App;
