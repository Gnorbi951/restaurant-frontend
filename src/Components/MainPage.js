import React, {useEffect, useState} from "react";
import background from '../images/restaurant_background.jpg'
import {Link} from "react-router-dom";
import styled from 'styled-components';


const MainPage = () => {

    return(
        <React.Fragment>
            <WelcomeImageContainer>
                <Title>Margheriti</Title>
                <SubTitle>The Best Restaurant in&nbsp;your&nbsp;area</SubTitle>
                <RestaurantImage src={background} alt={"background_image"} />
            </WelcomeImageContainer>
            <DishWrapper>
                <DishWrapperRightBox>
                    <RightBoxHead>Check out our finest dishes:</RightBoxHead>
                    <MenuButton to={"/menu"}>Click Here</MenuButton>
                </DishWrapperRightBox>
            </DishWrapper>
        </React.Fragment>
    )
}

const DishWrapper = styled.div`
    background: url("https://hips.hearstapps.com/del.h-cdn.co/assets/17/04/1024x512/landscape-1485748477-caprese-chicken.jpg");
    height: 30vw;
    max-height: 480px;
    width: 100%;
    background-size: cover;
    padding-left: 55vw;
    box-sizing: border-box;
    box-shadow: inset -55vw 0 60px 0px #D4D4D4;
`;

const DishWrapperRightBox = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 7vw;
`;

const RightBoxHead = styled.div`
    font-weight: bold;
    margin-left: auto;
    margin-right: auto;
    font: 2vw 'Merienda One', Helvetica, sans-serif;
`;

const MenuButton = styled(Link)`
    margin-top: 3vw;
    margin-left: auto;
    margin-right: auto;
    
    text-decoration: none;
    color: #fff;
    
    background: #141414;
    padding: 1.5vw;
    font-size: 1.7vw;
    border-radius: 5%;
`;

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