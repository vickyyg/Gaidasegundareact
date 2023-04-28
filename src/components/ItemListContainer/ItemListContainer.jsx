import React from 'react'
import { useEffect, useState } from "react"
import { obtenerUnProducto, getProductosPorCategoria, getProductos } from "../../asyncmock"
import ItemList from "../ItemList/ItemList"
import { useParams, useSearchParams } from "react-router-dom"

const ItemDetailContainar = ({greeting}) => {
    const [productos, setProductos] = useState([]);

    const {idCategoria} = useParams();

     useEffect(() => {

        const funcionProductos = idCategoria ? getCategorias : getProductos;

        funcionProductos(idCategoria)
        .then(res => setProductos(res))
        .catch(error => console.log(error))
     }, [idCategoria])


    return(
        <>
            <h2 style={{ textAlign: "center"}}>{greeting}</h2>
            <ItemList productos={productos}/>
        </>
    )
}

export default ItemDetailContainar