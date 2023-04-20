
import { useState } from 'react';
import './App.css';


import { ProductsContext } from './shared/ProductsContex';

import Cabecera from './Cabecera/Cabecera';

import ProductPage from './ProductPage/ProductPage';

function App() {
  const [myArray, setMyArray]=useState(["fresa","sandia","melon"])

  return (
    <div className="App">
      <header className="App-header">
     
      <ProductsContext.Provider value={{myArray,setMyArray}}>
      <Cabecera></Cabecera>
      <ProductPage></ProductPage>
     </ProductsContext.Provider>
      </header>
    </div>
  );
}

export default App;
