import logo from "./logo.svg";
import "./App.css";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Button from "@material-ui/core/Button";
import "./index.css";
import axios from "axios";
import ShowCard from "./components/Card";

function App() {
  const [shows, setShows] = React.useState([]);
  function getShows() {
    axios
      .get("https://api.tvmaze.com/shows")
      .then(function (response) {
        // handle success
        console.log(response);
        setShows(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }
  useEffect(getShows, []);
  console.log("shows",shows)
  return (
    <div className="root">
    {shows.map((show)=><ShowCard name={show.name} date={show.premiered} description={show.summary} image={show.image.original}/> )}
    </div>
  );
}

export default App;
