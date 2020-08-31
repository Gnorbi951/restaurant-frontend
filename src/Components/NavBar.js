import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
    return(
      <React.Fragment>
          <NavBarContainer>
            <NavBarLink to={'/'}>Home</NavBarLink>
          </NavBarContainer>

      </React.Fragment>
    );


}

const NavBarLink = styled(Link)`


`;

const NavBarContainer = styled.div`
    background-color: #003049;
`;

export default NavBar;