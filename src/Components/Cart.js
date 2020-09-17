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
                <ShoppingCart>
                    <Title>
                        Shopping Bag
                    </Title>
                    <Item>
                        <div className="buttons">
                            <CartButton>X</CartButton>
                        </div>

                        <div className="image">
                            <img src="item-1.png" alt=""/>
                        </div>

                        <div className="description">
                            <span>Order Item</span>
                        </div>

                        <div className="quantity">
                            <CartButton className="plus-btn" type="button" name="button">
                                +
                            </CartButton>
                            <input type="text" name="name" value="1" />
                                <CartButton className="minus-btn" type="button" name="button">
                                    -
                                </CartButton>
                        </div>
                        <div className="total-price">$549</div>
                    </Item>
                </ShoppingCart>
            </CartContainer>
        </React.Fragment>
    )
}

const Quantity = styled.div`
  border: none;
  text-align: center;
  width: 32px;
  font-size: 16px;
  color: #43484D;
  font-weight: 300;
`;

const CartButton = styled.button`
    position: relative;
    padding: 5px;
    margin-right: 30px;
    margin-left 30px;
`;

const Item = styled.div`
    padding: 20px 30px;
    height: 120px;
    display: flex;
`;

const Title = styled.div`
    height: 60px;
    border-bottom: 1px solid #E1E8EE;
    padding: 20px 30px;
    color: #5E6977;
    font-size: 18px;
    font-weight: 400;
`;

const ShoppingCart = styled.div`
    width: 750px;
    height: 423px;
    margin: 80px auto;
    background: #FFFFFF;
    box-shadow: 1px 2px 3px 0px rgba(0,0,0,0.10);
    border-radius: 6px;
    
    display: flex;
    flex-direction: column;
`;

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