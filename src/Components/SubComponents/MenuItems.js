import React from "react";

const MenuItems = (props) => {
    console.log(props.items)
    return(
        <React.Fragment>

                    <div>
                        <table>
                            <thead>
                                <tr>
                                <td>Picture</td>
                                <td>Name</td>
                                <td>Price</td>
                                </tr>
                            </thead>
                            <tbody>
                            {props.items.map((item) => (
                                <tr key={item.id}>
                                <td>{item.picture}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

        </React.Fragment>
    );
}

export default MenuItems;
