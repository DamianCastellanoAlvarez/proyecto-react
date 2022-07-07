import React, { useEffect, useState } from 'react'
import './itemlistcontainer.css'
import ItemList from './ItemList'

const itemlistcontainer = () => {

    const promesa = new Promise((res, rej) => {
        setTimeout(() => {
            res(itemlistcontainer);
        }, 3000);
    });

const [productos, setProductos] = useState([]);    
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
            <>
                <h2>CARGANDO...</h2>
            </>
        ) 
    }
    return (
        <>
            <ItemList productos = {productos} />
        </>
    )



}

    

export default itemlistcontainer