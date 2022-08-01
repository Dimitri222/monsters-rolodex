import React from "react";

import "./card.css"

const Card = (props) => {
    return(
        <div className="cardComponent" >
            <img src={`https://robohash.org/${props.img}?set=set2`} alt="" />
            <h1>{props.name}</h1>
            <p>{props.email}</p>
        </div>
    )
}

export default Card;