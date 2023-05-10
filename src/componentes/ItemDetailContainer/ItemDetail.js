import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import { arrayProductos } from "../arrayproductos/data.js";
import './ItemDetail.css'
/* import { useParams } from 'react-router-dom'; */
/* import React, { useEffect, useState } from 'react' */


const ItemDetail = (props) => {
    
    const {name,id, description,talle,price, img} = props.item
console.log(props);
   

    const onAdd = (count) => {
        alert(`Agregaste ${count} productos`);
      }; 
      
  return (
      
    <div className='detail-container'> 
    <div className='grid-container'> 
    <div className='image-container'>  <img  src={img} />  </div>
    <div className='data-container'> 
  
    <h1> {name} </h1>
   
    <div className='descripcion-container'> 
    <p> {description} </p>
    <p> {talle} </p>
    <p> {price} </p>
    
    </div>
    <div className='Itemcount-container'> 
    <ItemCount className='itemcount'  onAdd={onAdd} />
    </div>
    </div>
    </div>
    
    
    
    
    
     </div>

   
    
  )
}

export default ItemDetail

