import React, {useEffect} from "react";
import styled from "styled-components";
import cameraIcon from "../../images/camera.png"

const MenuItems = (props) => {

    useEffect(() => {
        setup()
    }, )
    function setup() {
        let images = document.getElementsByClassName("logo");
        for (let image of images) {
            let imageId = image.id.substr(4);
            let box = document.getElementById(`box${imageId}`);
            console.log(box)
        }
    }

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
                                <Data>
                                    <a id={`link${item.id}`} className={"logo"} href={`${item.picture}`}>
                                        <Logo src={cameraIcon} alt={"camera_icon"} />
                                    </a>
                                    <Box id={`box${item.id}`}>Some Text</Box>
                                </Data>
                                <Data>{item.name}</Data>
                                <Data>{item.price} Ft</Data>
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

const Box = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    border: solid 1px;
    background-color: #fff;
    padding: 5px;
`;


export default MenuItems;
