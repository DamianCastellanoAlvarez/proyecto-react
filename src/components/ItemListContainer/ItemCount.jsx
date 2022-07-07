import React,{useState} from "react";




const ItemCount = ({stock}) => {
    const [cuenta, setCuenta] = useState(1)

    const sumar = () =>{
        cuenta < stock && setCuenta(cuenta + 1)
            cuenta >= stock && alert('STOCK INSUFICIENTE')
    }

    const restar = () =>{
        setCuenta(Math.max (cuenta - 1, 1))
    }

    const onAdd = () => {
        alert(`Gracias por tu compra de ${cuenta} productos de PAUSA MARKET`)
    }


    return (
        <>
        <div className="agreg-prod">
            <button className='btm-menos' onClick={restar}>-</button>
            <p className="numero">{cuenta}</p>
            <button className='btm-mas' onClick={sumar}>+</button>
        </div>
        <button className="btn-comprar" onClick={onAdd}>Comprar</button>
        </>
    )
}

export default ItemCount