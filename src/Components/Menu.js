import React, {useEffect, useState} from "react";
import axios from 'axios';
import Category from "./SubComponents/Category";
import styled from 'styled-components';
const Menu = () => {
    const [categories, setCategories] = useState();

    useEffect(() => {
        axios.get('/category/all')
            .then(resp => setCategories(resp.data));
    },[])

    return(
        <React.Fragment>
            <Header>Menu</Header>
            {categories? <Category categoryList={categories} />: <h1>Loading</h1>}
        </React.Fragment>

    );
}

const Header = styled.div`
    font-family: 'Leckerli One', Helvetica, sans-serif;
    font-size: 8vw;
    margin-top: 4vw;
    display: block;
    text-align: center;
`;

export default Menu;