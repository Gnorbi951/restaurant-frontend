import React, {useEffect, useState} from "react";
import background from '../images/restaurant_background.jpg'
import styled from 'styled-components';


const MainPage = () => {

    return(
        <React.Fragment>
            <WelcomeImageContainer>
                <Title>Margheriti</Title>
                <h1>The Best Restaurant in your area</h1>
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
`;

const RestaurantImage = styled.img`
    width:100%;
    height: 100%;
    
`;

export default MainPage;