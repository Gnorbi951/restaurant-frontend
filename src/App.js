import React from 'react';
import axios from 'axios';
import {BrowserRouter as Router, Route} from "react-router-dom";
import MainPage from "./Components/MainPage";
import NavBar from "./Components/NavBar";
import Menu from "./Components/Menu";
import Order from "./Components/Order";
import Login from "./Components/Login";
import About from "./Components/About";
import {CartProvider} from "./Components/Context/CartContext";
import Cart from "./Components/Cart";
import Register from "./Components/Register";
import Cookies from 'universal-cookie';

function App() {

    const cookies = new Cookies();

    axios.interceptors.request.use(function(config) {
        if (config.url !== "/login" || config.url !== "/register") {
            config.headers.Authorization = cookies.get("token");
        }
        config.url = process.env.REACT_APP_AXIOS_URL + config.url;
        return config;
    });

  return (
    <React.Fragment>
        <Router>
            <NavBar />
            <Route exact path={"/"} component={MainPage} />
            <Route exact path={"/menu"} component={Menu} />
            <Route exact path={"/login"} component={Login} />
            <Route exact path={"/register"} component={Register} />
            <Route exact path={"/about"} component={About} />
            <CartProvider>
                <Route exact path={"/order_now"} component={Order}/>
                <Route exact path={"/cart"} component={Cart} />
            </CartProvider>
        </Router>
    </React.Fragment>
  );
}

export default App;
