import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import Cookies from 'universal-cookie';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("No message");
    const cookies = new Cookies();
    const [isLoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        if (cookies.get("token")) {
            setLoggedIn(true);
        }
    })

    function login() {
        axios.post(
            "/auth/login",
            {
                username,
                password
            },
            {
                //withCredentials: true
            }
        )
            .then(res => {
                localStorage.setItem("name", res.data[0]);
                cookies.set('token', res.data[1], {path: '/'});
                setMessage(`Logged in as ${res.data[0]}`)
                setLoggedIn(true);
            })
            .catch(() => {
                setMessage("Something went wrong");
            });
    }
    function logout() {
        cookies.remove('token', { path: '/' });
        localStorage.removeItem("name");
        window.location.href = '/login';
    }

    return(
        <React.Fragment>
            <input
                type = "text"
                name = "username"
                autoComplete={"off"}
                placeholder={"Username"}
                value = {username}
                onChange = {e =>
                    setUsername(e.target.value)
                }
            />
            <input
                type = "password"
                name = "password"
                placeholder={"password"}
                value = {password}
                onChange = {e =>
                    setPassword(e.target.value)
                }
            />
            <button
                type = "submit"
                onClick = {login} >
                Login
                </button>
            {isLoggedIn ? (<button
                type="submit"
                onClick= {logout} >
                Logout
            </button>) : ("")}
                        <div> {message} </div>
        </React.Fragment>
    );
}

export default Login;