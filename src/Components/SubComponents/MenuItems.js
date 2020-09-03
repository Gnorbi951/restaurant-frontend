import React from "react";
import styled from "styled-components";
import cameraIcon from "../../images/camera.png"

const MenuItems = (props) => {
    console.log(props.items)
    return(
        <React.Fragment>

                    <div>
                        <table>
                            <thead>
                                <tr>
                                <Data>Picture</Data>
                                <Data>Name</Data>
                                <Data>Price</Data>
                                </tr>
                            </thead>
                            <tbody>
                            {props.items.map((item) => (
                                <tr key={item.id}>
                                <Data><a href={`${item.picture}`}><Logo src={cameraIcon} alt={"camera_icon"} /></a></Data>
                                <Data>{item.name}</Data>
                                <Data>{item.price}</Data>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>

        </React.Fragment>
    );
}

const Data = styled.td`
    border: solid 2px
`;

const Logo = styled.img`
    width: 4vw;
    padding-left: auto;
`;


export default MenuItems;
