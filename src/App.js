import React from 'react';
import axios from 'axios';
import './App.css';
import MainPage from "./Components/MainPage";

function App() {
    const cloudhost = 'https://damp-atoll-23585.herokuapp.com';
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
