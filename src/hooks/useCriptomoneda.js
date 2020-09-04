import React, {Fragment, useState} from 'react';
import styled from '@emotion/styled'

const Label = styled.label`
    font-family: 'bebas neue', cursive;
    color: #FFF;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`

const Select = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.0rem;
`

const useCriptomoneda = (label, stateInicial, lista) => {

    const [state, setState] = useState(stateInicial)

    const SelectCripto = () =>(
        <Fragment>
            <Label>{label}</Label>
            <Select
                onChange= {e => setState(e.target.value)}
                value = {state}
            >
                <option value =''>Elige una moneda</option>
                {
                    lista.map(moneda => (
                    <option key = {moneda.CoinInfo.Id} value ={moneda.CoinInfo.Name}> {moneda.CoinInfo.FullName}</option>
                        )
                    )
                }
            </Select>
        </Fragment>
    )

    return [state, SelectCripto, setState]
}

export default useCriptomoneda