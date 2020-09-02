import React, {useEffect, useState} from "react";
import background from '../images/restaurant_background.jpg'
import styled from 'styled-components';


const MainPage = () => {

    return(
        <React.Fragment>
            <WelcomeImageContainer>
                <Title>Margheriti</Title>
                <SubTitle>The Best Restaurant in&nbsp;your&nbsp;area</SubTitle>
                <RestaurantImage src={background} alt={"background_image"} />
            </WelcomeImageContainer>
        </React.Fragment>
    )
}

const WelcomeImageContainer = styled.div`
    position: relative;
    text-align: center;
    width: 100%;
    height: 100%;
`;

const Title = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font: 10vw 'Great Vibes', Helvetica, sans-serif;
    text-shadow: 1px 1px 2px #000; /* h-shadow v-shadow blur-radius color */
`;

const SubTitle = styled.div`
    position: absolute;
    top: 80%;
    left: 50%;
    transform: translate(-50%, -80%);
    font: 2vw 'Merienda One', Helvetica, sans-serif;
    text-shadow: 1px 1px 2px #000;
    color: white;
`;

const RestaurantImage = styled.img`
    width:100%;
    max-height: 888px
    
`;

export default MainPage;