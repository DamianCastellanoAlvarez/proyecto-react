import React from "react";
import Item from "./Item";



function ItemList ({ hierbas }) {
    return (
    <>
        {hierbas.map((productos) => {
            <Item key={productos.name} productos={productos}/>
        })}
    </>
)           
}



export default ItemList
