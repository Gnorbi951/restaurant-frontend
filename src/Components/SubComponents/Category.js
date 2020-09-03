import React from "react";
import MenuItemsHandler from "./MenuItemsHandler";

const Category = (props) => {
    return(
        <React.Fragment>
            <div>
            {props.categoryList.map((category) => (
                <div key={category.id}>
                <h1 key={category.id}>{category.name}</h1>
                <MenuItemsHandler currentCategory={category.id}/>
                </div>
            ))}
            </div>
        </React.Fragment>
    );
}

export default Category;
