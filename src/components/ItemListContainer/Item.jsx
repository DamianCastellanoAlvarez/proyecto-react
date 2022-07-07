import React from "react";


function Item ({productos}) {
    return (
        <>   
            <h1>YERBA</h1>
            <p>Nombre:{productos.name}</p>
            <p>Precio:{productos.price}</p>
            <button>Detalles</button>
        </>
    )
}


export default Item;