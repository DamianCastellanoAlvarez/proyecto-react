import React from "react";


function Item ({productos}) {
    return (
        <div className="contenedor">   
            <p className="nombre">Nombre:{productos.name}</p>
            <p className="price">Precio:{productos.price}</p>
            <button className="btn-detalles">Detalles</button>
        </div>
    )
}


export default Item;