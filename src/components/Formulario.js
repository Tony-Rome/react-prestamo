import React, {useState, Fragment} from 'react'
import {calcularTotal} from '../Helpers';


const Formulario = (props) => {

    const [error, guardarError] = useState(false);

    const {guardarCantidad, cantidad, plazo, guardarPlazo, guardarTotal, guardarCargando} = props;
  
    const calcularPrestamo = (e) => {
        e.preventDefault();

        //validación
        if(cantidad === 0 || plazo === ''){
            guardarError(true);
            return;
        }
        //ejecutar
        guardarError(false);

        //habilita spinner
        guardarCargando(true);

        setTimeout( () => {
            const total = calcularTotal(cantidad, plazo);

            guardarTotal(total);
            guardarCargando(false);    
        },3000);

        //cotización
        

    }

    return (
    <Fragment>
        <form onSubmit={calcularPrestamo}>
            <div className="row">
                <div>
                    <label>Cantidad Prestamo</label>
                    <input 
                        className="u-full-width" 
                        type="number" 
                        placeholder="Ejemplo: 3000"
                        onChange={(e) => {
                            console.log(e.target.value);
                            guardarCantidad(parseInt(e.target.value))
                        }} 
                    />
                </div>
                <div>
                    <label>Plazo para Pagar</label>
                    <select 
                        className="u-full-width"
                        onChange={(e) => {
                            guardarPlazo(parseInt(e.target.value))
                        }} 
                    >
                        <option value="">Seleccionar</option>
                        <option value="3">3 meses</option>
                        <option value="6">6 meses</option>
                        <option value="12">12 meses</option>
                        <option value="24">24 meses</option>
                    </select>
                </div>
                <div>
                    <input 
                        type="submit" 
                        value="Calcular" 
                        className="button-primary u-full-width" 
                    />
                </div>
            </div>
        </form>

        { (error) ? <p className="error">Todos los campos son obligatorios</p> : null}
    </Fragment>
    );
}

export default Formulario;