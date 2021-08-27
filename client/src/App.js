import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Place from "./components/Place";
import Forms from "./components/Forms";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseURL, config } from "./services";
import axios from "axios";

function App() {
  const [places, setPlaces] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const fetchPlaces = async () => {
      const resp = await axios.get(baseURL, config);
      setPlaces(resp.data.records);
    };
    fetchPlaces();
  }, [toggleFetch]);

  return (
    <>
      <Nav />
      <Route path="/" exact>
        <Home places={places} />
      </Route>
      <Route path="/places/:id">
        <Place places={places} />
      </Route>
      <Route path="/new">
        <Forms setToggleFetch={setToggleFetch} />
      </Route>
      <Route path="/edit/:id">
        <Forms places={places} setToggleFetch={setToggleFetch} />
      </Route>
      <Footer />
    </>
  );
}

export default App;
