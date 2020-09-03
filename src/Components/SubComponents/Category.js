import React from "react";

const Category = (props) => {
    console.log(props.categoryList);
    return(
        <React.Fragment>
            {props.categoryList.map((category) => (
                <h1 key={category.id}>{category.name}</h1>
            ))}
        </React.Fragment>
    );
}

export default Category;
