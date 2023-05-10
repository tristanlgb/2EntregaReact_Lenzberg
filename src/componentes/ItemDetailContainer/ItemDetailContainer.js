import React, { useEffect, useState } from 'react'

import { arrayProductos } from '../arrayproductos/data.js'
import ItemDetail from './ItemDetail'
import './ItemDetailContainer.css'
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [detail, setDetail] = useState([])

    const { itemId } = useParams()


    useEffect(() => {
        getDetailPromise      
        .then(data => setDetail(data)) 
        .catch(err =>   console.log(err) )
        
    },[])

    const getDetailPromise = new Promise((res,rej) => {
        setTimeout(() => {
          const productoFiltrado = arrayProductos.find(e => e.id == itemId)
          res(productoFiltrado)
        }, (2000));
    })
  


  return (
     
    
    <div className='itemdetail-container'>
    <ItemDetail   /* paso los detalles como props a ItemDetail */ item={detail} />  
    
    </div>
    
    
  )
}

export default ItemDetailContainer