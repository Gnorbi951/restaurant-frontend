import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
    return(
      <React.Fragment>
          <NavBarContainer>
            <NavBarLink to={'/'}>Home</NavBarLink>
            <NavBarLink to={'/menu'}>Menu</NavBarLink>
            <NavBarLink to={'/'}>Order&nbsp;Now</NavBarLink>
            <NavBarLink to={'/'}>About</NavBarLink>
            <LoginIcon to={'/'}>Login</LoginIcon>
          </NavBarContainer>

      </React.Fragment>
    );


}

const LoginIcon = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin: 0.5rem 1rem;
    font-size: 140%;
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
    font-size: 140%;
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