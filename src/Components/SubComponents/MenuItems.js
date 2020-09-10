import React, {useEffect} from "react";
import styled from "styled-components";
import cameraIcon from "../../images/camera.png"

const MenuItems = (props) => {

    useEffect(() => {
        setup();
    })
    function setup() {
        const links = document.getElementsByClassName("logo");
        for (let link of links) {
            let imageId = link.id.substr(4);
            let box = document.getElementById(`box${imageId}`);
            box.style.backgroundImage = `url(${link.href})`;
            box.style.width = "25vw";
            box.style.height = "20vw";

            link.onmouseover = function(e) {
                let mousePos = getMouseLocation(e);
                box.style.display = 'block';
                box.style.top = (mousePos[1]) + 'px';
                box.style.left = (mousePos[0]) + 'px';
            };
            link.onmousemove = function(e) {
                let mousePos = getMouseLocation(e);

                box.style.top = (mousePos[1]) + 'px';
                box.style.left = (mousePos[0]+20) + 'px';
            };
            link.onmouseout = function() {
                box.style.display = 'none';
            };
        }
    }
    function getMouseLocation(e) {
        if (!e){ e = Window.event;}
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
                    <TableWrapper>
                        <Table>
                            <thead>
                                <tr>
                                <TData>Picture</TData>
                                <TData> </TData>
                                <TData>Price</TData>
                                </tr>
                            </thead>
                            <tbody>
                            {props.items.map((item) => (
                                <TRow key={item.id}>
                                <TData>
                                    <a id={`link${item.id}`} className={"logo"} href={`${item.picture}`}>
                                        <Logo src={cameraIcon} alt={"camera_icon"} />
                                    </a>
                                    <Box id={`box${item.id}`}/>
                                </TData>
                                <TData>{item.name}</TData>
                                <TData>{item.price} Ft</TData>
                                </TRow>
                            ))}
                            </tbody>
                        </Table>
                    </TableWrapper>
        </React.Fragment>
    );
}

const TableWrapper = styled.div`
    margin: auto;
    width: 60vw;
    padding: 10px;
`;

const Table = styled.table`
    margin: auto;
    width: 100%;
    font-weight: bold;
    font-size: 1vw;
    @media (max-width: 600px) and (min-width: 401px) {
        font-size: 2vw;
    }
    @media (max-width: 400px) {
        font-size: 2.5vw;
    }
    border-spacing: 0px;
`;

const TData = styled.td`
    text-align: center;
`;

const TRow = styled.tr`
        &:nth-child(2n+1) {
        background-color: #b8b8b8;
    }
`;

const Logo = styled.img`
    width: 3vw;
    self-align: center;
    @media (max-width: 600px) and (min-width: 401px) {
        width: 5vw;
    }
    @media (max-width: 400px) {
        width: 8vw;
    }
    
`;

const Box = styled.div`
    position: absolute;
    display: none;
    top: 0px;
    left: 0px;
    border: solid 1px;
    background-size: cover;
    background-color: #fff;
    padding: 5px;
`;


export default MenuItems;
