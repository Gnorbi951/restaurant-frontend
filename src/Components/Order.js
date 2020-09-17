import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";
import {CartContext} from "./Context/CartContext";
import cartIcon from "../images/cart.webp"

const Order = () => {
    const [menu, setMenu] = useState([]);
    const [cart, setCart] = useContext(CartContext);
    const config = {
        // Send cookie token
        withCredentials: true
    };

    useEffect(() => {
        console.log(localStorage.getItem("name"))
        axios.get("/order/all", config)
            .then(resp => {
                setMenu(resp.data)
            })
    }, [])

    function addItem(e) {
        let orderObject = {id: e.target.id, quantity: 1};
        if (cart === undefined) {
            setCart([orderObject]);
        } else {
            let found = false;
            let index = 0;
            for (let item of cart) {
                if (item.id === e.target.id){
                    found = true;
                    break;
                }
                index++;
            }
            if (found) {
                cart[index].quantity++;
                setCart(cart);
            } else {
                cart.push(orderObject);
                setCart(cart);
            }
        }
    }

    if (localStorage.getItem("name") === null) {
        return(
            <React.Fragment>
                You must log in to order
            </React.Fragment>
        )
    } else {
        if (menu.length !== 0) {
            return(
                <React.Fragment>
                    <Main>
                        <h1>Place your order</h1>
                        <Cart href={"google.com"}><CartImg src={cartIcon} alt={"camera_icon"} /></Cart>
                        <Cards>
                            {menu.map((item) => (
                                <CardsItem key={item.id}>
                                    <Card>
                                        <CardImage src={`${item.picture}`}
                                                   alt={"Food Image"} />
                                    <CardContent>
                                        <CardTitle>{item.name}</CardTitle>
                                        {/*<CardText>Lorem ipsum</CardText>*/}
                                        <CardButton className={"order_Button"} id={item.id} onClick={addItem}>Add To Cart</CardButton>
                                    </CardContent>
                                    </Card>
                                </CardsItem>
                            ))}
                        </Cards>
                    </Main>
                    <div className="modal fade" id="cartModal" tabIndex="-1" role="dialog"
                         aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header border-bottom-0">
                                    <h5 className="modal-title" id="exampleModalLabel">
                                        Your Shopping Cart
                                    </h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <table className="table table-image">
                                        <thead>
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col">Product</th>
                                            <th scope="col">Price</th>
                                            <th scope="col">Qty</th>
                                            <th scope="col">Total</th>
                                            <th scope="col">Actions</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <td className="w-25">
                                                <img
                                                    src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/vans.png"
                                                    className="img-fluid img-thumbnail" alt="Sheep" />
                                            </td>
                                            <td>Vans Sk8-Hi MTE Shoes</td>
                                            <td>89$</td>
                                            <td className="qty"><input type="text" className="form-control" id="input1"
                                                                       value="2" /></td>
                                            <td>178$</td>
                                            <td>
                                                <a href="#" className="btn btn-danger btn-sm">
                                                    <i className="fa fa-times"></i>
                                                </a>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                    <div className="d-flex justify-content-end">
                                        <h5>Total: <span className="price text-success">89$</span></h5>
                                    </div>
                                </div>
                                <div className="modal-footer border-top-0 d-flex justify-content-between">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close
                                    </button>
                                    <button type="button" className="btn btn-success">Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </React.Fragment>
            );
        }
        return(
            <React.Fragment>
                Loading
            </React.Fragment>
        );
    }

}

const CartImg = styled.img`
    max-width: 50px;
    max-height: 50px;
`;

const Cart = styled.a`
    width: 80px;
    height: 80px;
    background: #009879;
    display: flex;
    border-radius: 50%;
    color: #fff;
    font-size: 30px;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    box-shadow: 2px 2px 5px rgba(0, 0, 0.25);
    position: fixed;
    right: 20px;
    bottom: 20px;
`;

const Main = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`;

const Cards = styled.li`
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const CardsItem = styled.div`
    display: flex;
    padding: 1rem;
    @media (min-width: 40rem) {
        width: 50%;
    }
    @media (min-width: 56rem) {
        width: 30%;
    }
`;

const Card = styled.div`
    background-color: #D4D4D4;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

const CardImage = styled.img`
    height: 200px!important;
    width: 100%!important;
    // vertical-align: middle;
    object-fit: cover;
`;

const CardContent = styled.div`
    padding: 20px;
    height: 130px;
    background: linear-gradient(to bottom left, #959392 40%, #7f7d7c 100%);
`;

const CardTitle = styled.h2`
    color: #ffffff;
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 1px;
    margin: 0px;
`;

const CardText = styled.p`
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.5;
    margin-bottom: 1.25rem;    
    font-weight: 400;
`;

const CardButton = styled.button`
   color: #ffffff;
  padding: 0.8rem;
  font-size: 14px;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: 400;
  display: block;
  width: 100%;
  cursor: pointer;
  margin-top: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
  &:hover {
    transition: 350ms;
    color: #f77f00; 
  }
`;

export default Order;