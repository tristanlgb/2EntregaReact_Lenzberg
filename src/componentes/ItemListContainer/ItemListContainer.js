import React, { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount.js";
import "../ItemListContainer/ItemListContainer.css";
import { arrayProductos } from "../arrayproductos/data.js";
import ItemList from "../ItemList/ItemList.js";
import { useParams } from "react-router";

// contenedor de catalogo, recibe datos que van a renderizar los componentes hijos y se los pasa como props
const ItemListContainer = () => {

  const { id } = useParams()

  // useState para introducir en el estado productos, lo que consuma del arrayProductos
  const [productos, setProductos] = useState([]);
  // creo el variable con clase promise con un setTimeout de 2 segundos que devuelve array de productos en el parametro resolve
  useEffect(() => {
    getsProductsPromise // en setProductos pasamos la data del array al state despues que se resuelve la promesa
      .then((arrayp) => setProductos(arrayp)) // en arrayp obtenemos la respuesta de lo que ingresamos en el res, y lo que ingresamos en res es el arrayProductos
      .catch((err) => console.log(err));

    // utilizo useEffect para ejecutar gets products a fin de simular que consumimos datos de base de datos
    // con array vacio para que se ejecute en onMount
  }, [id]);

  

  const getsProductsPromise = new Promise((res, rej) => {
    setTimeout(() => {
      if(id){
        const productosFiltrados = arrayProductos.filter(e => e.category === id)
        res(productosFiltrados);
      }  
      res(arrayProductos)
      
    }, 2000);
  });

  return (
    <>
      <div className="container">
        <h1 style={{ textAlign: "center" }}> PRODUCTOS DESTACADOS </h1>
        <ItemList // pasamos los productos como props a ItemList
          items={productos}
        />
      </div>
    </>
  );
};

export default ItemListContainer;
