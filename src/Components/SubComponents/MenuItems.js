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
            box.style.display = 'none';
            console.log(image.href);
            box.style.backgroundImage = `url(${image.href})`;
            image.onmouseover = function(e) {
                let mousePos = getMouseLocation(e);
                box.style.display = 'block';
                box.style.top = (mousePos[1]) + 'px';
                box.style.left = (mousePos[0]+20) + 'px';
            };
            image.onmousemove = function(e) {
                let mousePos = getMouseLocation(e);

                box.style.top = (mousePos[1]) + 'px';
                box.style.left = (mousePos[0]+20) + 'px';
            };
            image.onmouseout = function() {
                box.style.display = 'none';
            };
        }
    }
    function getMouseLocation(e) {
        if (!e){ let e = Window.event;}
        let posx;
        let posy;
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        }
        else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft    + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        return [posx, posy];
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
                                    <Box id={`box${item.id}`}></Box>
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
    width: 20vw;
    height: 20vw;
    background-size: cover;
    background-color: #fff;
    padding: 5px;
`;


export default MenuItems;
