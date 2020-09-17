import React, {useContext} from "react";
import styled from "styled-components";
import {CartContext} from "./Context/CartContext";
import {Link} from "react-router-dom";


const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    console.log(cart);

    return(
        <React.Fragment>
            <CartContainer>
            <BackButton to={"/order_now"}>Back</BackButton>
            </CartContainer>
        </React.Fragment>
    )
}

const CartContainer = styled.div`
    margin-top: 3vw;
    padding: 1vw;
`;

const BackButton = styled(Link)`
    margin-top: 200px;
    width: auto;
    padding: 1vw;
    background-color: #141414;
    font-weight: bold;
    cursor: pointer;
    border: none;
    border-radius: 3px;
    font-size: 2rem;
    color: #fcbf49;
    @media (max-width: 600px) {
        font-size: 1rem;
    }
    &:hover {
        transition: 350ms;
        color: #f77f00;
    }
    text-decoration: none;
`;

export default Cart