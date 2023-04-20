import React, { useContext, useState } from 'react';

import { ProductsContext } from '../shared/ProductsContex';
import Modal from '../Modal/Modal';

export const Lista = () => {
    const { myArray, setMyArray } = useContext(ProductsContext);
    const [texto,setTexto] = useState("")
    
    const [modal, setModal] = useState( false ); 
    const Toggle = () => setModal(!modal);


    const addProducto = () => {
        let id = Date.now()
        let name = prompt('Añade  lo que quieras');
        let cantidad = prompt('Añade la cantidad');
        const copyArray = myArray.slice();
        copyArray.push({ id: id, name: name, cantidad: cantidad });
        setMyArray(copyArray);
    };

    const editar = (texto) => {
        let id = Date.now()
        let name = prompt("Modifica nuevo");
        let cantidad = prompt("Modifica la cantidad");
        const textoo = myArray.filter((list) => texto !== list.id);
        textoo.push({ id: id, name: name, cantidad: cantidad })
        setMyArray(textoo)
    };

    const eliminar = (texto) => {
        const filtrar = myArray.filter((list) => texto !== list.id);
        setMyArray([...filtrar]);
    };

    return (
        <div className='nu'>
        <div className='contendores1'>
            {myArray.map((list, index) => (
                <div className ='contendores' key={index}>
                <div className='divimagen'>
                    <img className="img1" src="./assets/pen29.png" alt={list.id} onClick={() => editar(list.id)} />
                    <img className="img1" src="./assets/delete30.png" alt={list.id} onClick={() => eliminar(list.id)} />
                    
                    </div>
                        <h3 className="textitos" >{list.name}</h3>
                        <p className="textitos1" >cantidad:{list.cantidad}</p>
                        <div className="App">
    
    <button className="clickme" onClick={() => Toggle()}>
      Comentarios
    </button>

    <Modal show={modal} title= "My Modal" close={Toggle} /> 
    
  </div>
                   
                </div>
            ))}
            <div className='add' onClick={addProducto}>
                <img className="X" src="./assets/add30.png" alt="" />
            </div>
          
        </div>
        </div>
    );
};
