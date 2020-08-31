import React from 'react';
import axios from 'axios';
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
    <div className="App">
      <h1>Restaurant app </h1>
        <MainPage/>
    </div>
  );
}

export default App;
