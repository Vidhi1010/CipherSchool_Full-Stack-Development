import React from "react";

let Pizza = (props) => {
    return(
        <div className="pizza">
            <h1>{props.brand.toUpperCase()}</h1>
            <p>{props.description}</p>
        </div>
    )
}
export default Pizza;