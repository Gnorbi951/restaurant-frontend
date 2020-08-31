import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";

function App() {
    // TODO: Research for an if else to switch hosts whether I'm on localhost or on netlify
    const cloudHost = 'https://damp-atoll-23585.herokuapp.com';
    const localhost = 'http://localhost:8080'

    axios.interceptors.request.use(function(config) {
        config.url = localhost + config.url; // Setup request url base
        return config;
    });

  return (
    <React.Fragment>
        <Router>
            <Route exact path={"/"} component={MainPage} />
        </Router>
    </React.Fragment>
  );
}

export default App;
