import React, {useEffect, useState} from "react";
import axios from 'axios';
import MenuItems from "./MenuItems";

const MenuItemsHandler = (props) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get(`/menu/get-by-category/${props.currentCategory}`)
            .then(resp => setItems(resp.data));
    }, [props.currentCategory])
    return(
        <React.Fragment>
                {items ? <MenuItems items={items} /> : <h1>Loading</h1>}
        </React.Fragment>
    );
}

export default MenuItemsHandler;