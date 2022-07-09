import React, { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
const [detail, setDetail] = useState([]);
const [error, setError] = useState(false);
const [loading, setLoading] = useState (true);

useEffect(() =>{
const getDetail = async () =>{
try {const response = await fetch();
    const data = await response.json();
    setDetail(data);}
catch (err) {
    setError(true);
    }
finally {
    setLoading(false);
    }
}
getDetail();
},[]);

if (loading) {
    <p>CARGANDO...</p>
} return (
    <>
    <p>ERROR...</p>   
    <ItemDetail detail={detail} />
    </>
) 

} 






export default ItemDetailContainer