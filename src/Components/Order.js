import React, {useEffect, useState} from "react";
import axios from "axios";
import styled from "styled-components";

const Order = () => {
    const [menu, setMenu] = useState([]);
    const config = {
        // Send cookie token
        withCredentials: true
    };

    useEffect(() => {
        console.log(localStorage.getItem("name"))
        axios.get("/order/all", config)
            .then(resp => {
                console.log(resp.data)
                setMenu(resp.data)
            })
    }, [])

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
                        <h1>Replace me with something</h1>
                        <Cards>
                            {menu.map((item) => (
                                <CardsItem key={item.id}>
                                    <Card>
                                        <CardImage src={`${item.picture}`}
                                                   alt={"Food Image"} />
                                    <CardContent>
                                        <CardTitle>{item.name}</CardTitle>
                                        <CardText>Lorem ipsum</CardText>
                                        <CardButton>Order Now</CardButton>
                                    </CardContent>
                                    </Card>
                                </CardsItem>
                            ))}
                        </Cards>
                    </Main>
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
    background-color: white;
    border-radius: 0.25rem;
    box-shadow: 0 20px 40px -14px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

const CardImage = styled.img`
    height: auto;
    max-width: 100%;
    vertical-align: middle;
`;

const CardContent = styled.div`
    padding: 1rem;
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
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: transparent;
`;

export default Order;