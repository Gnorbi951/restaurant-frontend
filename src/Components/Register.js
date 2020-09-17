import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    function register() {
        axios.post(
            "/auth/signup",
            {
                username,
                password
            }).then(resp => {
                setMessage(resp.data);
                }
            );
    }

    return(
        <React.Fragment>
            <LoginContainer>
                <InputHead>Username:</InputHead>
                <Input
                    type = "text"
                    name = "username"
                    autoComplete={"off"}
                    placeholder={"Enter Username"}
                    value = {username}
                    onChange = {e =>
                        setUsername(e.target.value)
                    }
                />
                <InputHead>Password:</InputHead>
                <Input
                    type = "password"
                    name = "password"
                    placeholder={"Enter password"}
                    value = {password}
                    onChange = {e =>
                        setPassword(e.target.value)
                    }
                />
                <Button
                    type = "submit"
                    onClick = {register} >
                    Register
                </Button><br />
                <MessageContainer> {message} </MessageContainer>
            </LoginContainer>
        </React.Fragment>
    );
}
const LoginContainer = styled.div`
    width: 40%;
    padding: 2vw;
    margin: auto;
    @media (max-width: 600px) {
        width: 90%;
    }
`;

const InputHead = styled.div`
    font-size: 2vw;
    font-weight: bold;
    @media (max-width: 600px) {
        font-size: 5vw;
    }
`;

const Input = styled.input`
    width: 100%;
    font-size: 2vw;
    @media (max-width: 600px) {
        font-size: 5vw;
    }
    padding-top: 0.5vw;
    padding-bottom: 0.5vw;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
    border-radius: 5px;

`;

const Button = styled.button`
    background-color: #141414;
    color: #fcbf49;
    &:hover {
        transition: 350ms;
        color: #f77f00;
    }
    padding: 1vw;
    margin: 1.3vw 0;
    border: none;
    cursor: pointer;
    width: 50%;
    @media (max-width: 600px) {
        width: 30%;
        font-size: 5vw;
    }
    font-size: 2vw;
    font-weight: bold;
    border-radius: 5px;
`;

const LogoutButton = styled.button`
    width: auto;
    padding: 0.8vw;
    background-color: #141414;
    font-weight: bold;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    font-size: 1vw;
    color: #fcbf49;
    @media (max-width: 600px) {
        font-size: 2vw;
    }
    &:hover {
        transition: 350ms;
        color: #f77f00;
    }
`;

const MessageContainer = styled.div`
   font-size: 4vw;
   font-weight: bold;
   color: #141414;
`;

export default Register;