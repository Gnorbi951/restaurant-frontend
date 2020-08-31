import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
    return(
      <React.Fragment>
          <NavBarContainer>
            <NavBarLink to={'/'}>Home</NavBarLink>
            <NavBarLink to={'/'}>Menu</NavBarLink>
            <NavBarLink to={'/'}>Order Now</NavBarLink>
            <NavBarLink to={'/'}>About</NavBarLink>
            <LoginIcon to={'/'}>Login</LoginIcon>
          </NavBarContainer>

      </React.Fragment>
    );


}

const LoginIcon = styled.div`
    color: #fff;
    text-decoration: none;
    margin: 0.5rem 1rem;
    font-weight: bold;
    margin-left: auto;
`;

const NavBarLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin: 0.5rem 1rem;
    font-weight: bold;
`;

const NavBarContainer = styled.div`
    background-color: #003049;
    display: flex;
    width: 100vw;
    flex-direction: row;
`;

export default NavBar;