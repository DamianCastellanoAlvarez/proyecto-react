import React from "react";
import Item from "./Item";


function ItemList ({ prop }) {
    return (
    <div>
        {prop.map((productos) => {
            return <Item productos={productos}/>
    })}
    </div>
)           
}

export default ItemList
