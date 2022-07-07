import React from 'react';
import carrito from '../../assets/carrito.svg';
import '../CartWidget/cartWidget.css'


const cartWidget = () => {
    return(
        <div className="carrito">
            <li>
                <a href='./carrito.js'><img src={carrito} alt="carrito" /></a>
            </li>
        </div>
    )
}


export default cartWidget