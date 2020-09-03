import React, {useEffect, useState} from "react";
import axios from 'axios';

const MenuItems = (props) => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios.get(`/category/${props.currentCategory}`)
            .then(resp => console.log(resp))
    }, [])
    return(
        <React.Fragment>
            Under construction
        </React.Fragment>
    );
}

export default MenuItems;