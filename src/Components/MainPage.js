import React, {useEffect, useState} from "react";
import axios from "axios";


const MainPage = () => {
    const [message, setMessage] = useState();

    useEffect(() => {
        axios.get("https://damp-atoll-23585.herokuapp.com/test")
            .then(response => {
                setMessage(response)
                console.log(response)
            })
    }, [])

    return(
        <React.Fragment>
            <h1>The server responded:</h1>
            {message ? <p>{message.data.message}</p> : <p>Loading</p>}
        </React.Fragment>
    )
}

export default MainPage;