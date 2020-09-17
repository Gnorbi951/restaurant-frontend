import React from "react";
import styled from "styled-components";

const About = () => {

    return(
        <React.Fragment>
            <ContentWrapper>
                <p>This page is being developed by Norbert Gőcze</p><br />
                <p>Check out the github repositories here:</p>
                <a href={"https://github.com/Gnorbi951/restaurant-frontend"}>Frontend</a><br />
                <a href={"https://github.com/Gnorbi951/restaurant_backend"}>Backend</a><br />
                <br />
                <p>Feel free to contact me at gnorbi951@gmail.com</p>
            </ContentWrapper>
        </React.Fragment>
    );
}

const ContentWrapper = styled.div`
    padding: 3rem;
    font-size: 2rem;
`;

export default About;