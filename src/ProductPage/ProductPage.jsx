import React, { useState } from 'react'
import { ProductsContext } from '../shared/ProductsContex';
import { Lista } from '../Lista/Lista';

export default function ProductPage() {
    const [number,setNumber]=useState(0)
    const[myArray,setMyArray]= useState([

        { id:1,name:"Lápiz",cantidad:20},
        {id:2,name:"Libreta",cantidad:30},
        { id:3,name:"Típex", cantidad:26},
    ]);
  return (
    <div >
    <h2 className='productos'>Productos</h2>
    <ProductsContext.Provider value={{number,setNumber,myArray,setMyArray}}>
        <div>
            <Lista></Lista>
        </div>
    </ProductsContext.Provider>
      
    </div>
  );
}

 
