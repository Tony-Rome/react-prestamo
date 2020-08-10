import React, {Fragment, useState} from 'react'; //Fragment permite retornar multi hijos 
import Header from './components/Header'
import Formulario from './components/Formulario'
import Mensaje from './components/Mensaje'
import Resultado from './components/Resultado';
import Spinner from './components/Spinner';

function App() {

  //Todo fluye de padre a hijo NO  viceversa

    //Retornar dos variables: [valor del state, funcion para guardar/modificar valores del state]
    const [cantidad, guardarCantidad] = useState(0);
    const [plazo, guardarPlazo] = useState('');
    const [total, guardarTotal] = useState(0);
    const [cargando, guardarCargando] = useState(false);

    let componente;

    if(cargando){
      componente = <Spinner/>
    }

    else if(total === 0){
      componente = <Mensaje/>
    }else{
      componente = <Resultado
        total={total}
        plazo={plazo}
        cantidad={cantidad}
      />
    }

  return (

    <Fragment> 
      <Header
        titulo="Cotizador prestamos"
        descripcion="Utilizar formulario y obten cotización"
        cantidad={cantidad}
      />

      <div className="container">
        
      <Formulario
        cantidad={cantidad}
        guardarCantidad={guardarCantidad}
        plazo={plazo}
        guardarPlazo={guardarPlazo}
        guardarTotal={guardarTotal}
        guardarCargando={guardarCargando}
      /> 
        <div className="mensajes">
          {componente}
        </div>    
      </div>
    </Fragment>
  );
}

export default App;
