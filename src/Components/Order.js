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
                                    hello
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
`;

export default Order;