import React, { useEffect, useState } from 'react'
import './itemlistcontainer.css'
import ItemList from './ItemList'
import productospausa from './productospausa'



const promesa = new Promise((res, rej) => {
    setTimeout(() => {
        res(productospausa);
    }, 3000);
});



const ItemListContainer = () => {


const [productoslista, setProductos] = useState([]); 
const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        setLoading(true);
        promesa.then((response) => {
        setLoading(false);
        setProductos(response);
        });
    }, []);
    
    if (loading) {
        return (
            <div className='carga'>
                <h2 className='carga'>CARGANDO...</h2>
                <h2 className='carga'>CARGANDO...</h2>
                <h2 className='carga'>CARGANDO...</h2>
            </div>
        ) 
    }
    return (
        <>
            <ItemList key={productoslista.name} prop = {productoslista} />
        </>
    )
}



export default ItemListContainer