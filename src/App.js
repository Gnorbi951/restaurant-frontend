import React from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from "react-router-dom";
import MainPage from "./Components/MainPage";
import NavBar from "./Components/NavBar";
import Menu from "./Components/Menu";
import Order from "./Components/Order";

function App() {

    axios.interceptors.request.use(function(config) {
        config.url = process.env.REACT_APP_AXIOS_URL + config.url; // Setup request url base
        return config;
    });

  return (
    <React.Fragment>
        <Router>
            <NavBar />
            <Route exact path={"/"} component={MainPage} />
            <Route exact path={"/menu"} component={Menu} />
            <Route exact path={"/order_now"} component={Order}/>
        </Router>
    </React.Fragment>
  );
}

export default App;
