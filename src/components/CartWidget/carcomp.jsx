import React from 'react';
import carrito from '../../assets/carrito.svg';
import '../CartWidget/carcomp.css'


const carcomp = () => {
    return(
        <div>
            <li>
                <a href='./carrito.js'><img className="carrito" src={carrito} alt="carrito" /></a>
            </li>
        </div>
    )
}


export default carcomp