import React from "react";
import MenuItems from "./MenuItems";

const Category = (props) => {
    return(
        <React.Fragment>
            <div>
            {props.categoryList.map((category) => (
                <div>
                <h1 key={category.id}>{category.name}</h1>
                <MenuItems currentCategory={category.id} />
                </div>
            ))}
            </div>
        </React.Fragment>
    );
}

export default Category;
