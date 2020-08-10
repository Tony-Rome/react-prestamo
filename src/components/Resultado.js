import React from 'react';

const Resultado = (props) => 
     (
        <div className="u-full-width resultado">
            <h2>Resumen</h2>
            <p>Cantidad solicitada: ${props.cantidad}</p>
            <p>A pagar: ${props.plazo}</p>
            <p>Paso mensual: ${(props.total / props.plazo).toFixed(2)}</p>
            <p>Total a pagar : ${(props.total).toFixed(2)}</p>
        </div>
    );


export default Resultado;