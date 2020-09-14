import React, {useState} from "react";
import axios from "axios";
import Cookies from 'universal-cookie';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("No message");
    const cookies = new Cookies();

    function login() {
        axios.post(
            "/auth/login",
            {
                username,
                password
            },
            {
                withCredentials: true
            }
        )
            .then(res => {
                setMessage(res.data[0]);
                cookies.set('token', res.data[1], {path: '/'});
            })
            .catch(() => {
                setMessage("Something went wrong");
            });
    }

    return(
        <React.Fragment>
            <input
                type = "text"
                name = "username"
                value = {username}
                onChange = {e =>
                    setUsername(e.target.value)
                }
            />
            <input
                type = "password"
                name = "password"
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
                        <div> {message} </div>
        </React.Fragment>
    );
}

export default Login;