import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
    const[name, setName] = useState("");

    useEffect(() => {
        setName(localStorage.getItem("name"));
    }, [])

    return(
      <React.Fragment>
          <NavBarContainer>
            <NavBarLink to={'/'}>Home</NavBarLink>
            <NavBarLink to={'/menu'}>Menu</NavBarLink>
            <NavBarLink to={'/order_now'}>Order Now</NavBarLink>
            <NavBarLink to={'/'}>About</NavBarLink>
            <LoginIcon to={'/login'}>{name ? `Welcome ${name}` : "Login"}</LoginIcon>
          </NavBarContainer>

      </React.Fragment>
    );


}

const LoginIcon = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin: 0.5rem 1rem;
    font-size: 1.5vw;
    @media (max-width: 600px) {
        font-size: 3vw;
    }
    @media (max-width: 800px) and (min-width: 601px) {
        font-size: 2vw;
    }
    color: #fcbf49;
    font-weight: bold;
    margin-left: auto;
    &:hover {
    transition: 350ms;
    color: #f77f00;
  }
`;

const NavBarLink = styled(Link)`
    color: #fcbf49;
    text-decoration: none;
    margin: 0.5rem 1rem;
    font-weight: bold;
    font-size: 1.5vw;
    @media (max-width: 600px) {
        font-size: 3vw;
    }
    @media (max-width: 800px) and (min-width: 601px) {
        font-size: 2vw;
    }
    &:hover {
    transition: 350ms;
    color: #f77f00;
    justify-content: flex-start;
  }
`;

const NavBarContainer = styled.div`
    background-color: #141414;
    display: flex;
    width: 100%;
`;

export default NavBar;