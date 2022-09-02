// El componente App es el padre de:
// - Cabecera
// - Listado
// ESTADO: App debe manejar en su estado un número para contabilizar el total de elementos comprados.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Item.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos.
// import Cabecera from '../src/components';

import { useState } from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
import styles from './app.module.css';


function App() {
  const [cantProductos, setCantProductos] = useState(0);
  const appClassName = `App ${styles.app}`;

  function sumarProducto() {
    setCantProductos(cantProductos + 1);
  }
  
  return (
    <div className={appClassName}>
      <Cabecera cantProductos={cantProductos} />
      <Listado sumarProducto={sumarProducto}/>
    </div>
  );
}

export default App;
