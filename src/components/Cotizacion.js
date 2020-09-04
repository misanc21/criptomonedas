import React from 'react';
import styled from '@emotion/styled'

const Resultado = styled.div `
    background-color: #66a2fe;
    color: #0d2235;
    border: none;
    border-radius: 10px;
    font-family: 'bebas neue', cursiva;
    padding: 20px 1rem;
    margin-top: 5rem;
`

const Info = styled.p`
    font-size: 20px;

    span {
        font-weight: bold;
    }
`

const Precio = styled.p `
    font-size: 30px;

    span {
        font-weight: bold;
    }
`


const Cotizacion = ({resultado}) => {
    if(Object.keys(resultado).length === 0) return null;
    return ( 
        <Resultado>
            <Precio>El precio es <span>{resultado.PRICE}</span></Precio>
            <Info>Precio mas alto del dia <span>{resultado.HIGHDAY}</span></Info>
            <Info>Precio mas bajo del dia <span>{resultado.LOWDAY}</span></Info>
            <Info>El precio es <span>{resultado.CHANGEPCT24HOUR}</span></Info>
            <Info>Ultima actualizacion <span>{resultado.LASTUPDATE}</span></Info>
        </Resultado>
    );
}
 
export default Cotizacion;