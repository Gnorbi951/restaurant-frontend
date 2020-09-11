import React, {useState} from "react";
import axios from "axios";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("No message");

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
                setMessage(res.data);
                console.log(res);
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