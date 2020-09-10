import React from "react";
import MenuItemsHandler from "./MenuItemsHandler";
import styled from "styled-components";

const Category = (props) => {
    return(
        <React.Fragment>
            <ContentWrapper>
            {props.categoryList.map((category) => (
                <div className={"CategoryWrapper"} key={category.id}>
                <CategoryTitle key={category.id}>{category.name}</CategoryTitle>
                <MenuItemsHandler currentCategory={category.id}/>
                </div>
            ))}
            </ContentWrapper>
        </React.Fragment>
    );
}

const ContentWrapper = styled.div`
    margin-bottom: 20vw;
`;

const CategoryTitle = styled.h1`
    font-family: 'Leckerli One', Helvetica, sans-serif;
    text-align: center;
    font-size: 3vw;
`;

export default Category;
