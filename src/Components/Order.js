import React, {useEffect, useState} from "react";
import axios from "axios";

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
        return(
            <React.Fragment>
                Order
            </React.Fragment>
        );
    }

}

export default Order;