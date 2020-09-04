import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled'
import axios from 'axios'

import useMoneda from '../hooks/useMoneda'
import useCriptomoneda from '../hooks/useCriptomoneda';

const Button = styled.button`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border:none;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3a ease;
    width: 100%;

    &:hover {
        background-color: #326aC0;
        cursor: pointer;
    }
`

const Formulario = () => {

    const [listaCripto, setListaCripto] = useState([])

    const monedasForm = [
        {codigo: 'USD', nombre:'Dolar estadounidense'},
        {codigo: 'MXN', nombre:'Peso Mexicano'},
        {codigo: 'EUR', nombre:'Euro'},
        {codigo: 'GBP', nombre:'Libra esterlina'}
    ]

    const [ moneda, SeleccionarMoneda] = useMoneda('Elige una moneda', '', monedasForm)
    const [criptomoneda, SelectCripto] = useCriptomoneda ('Elige criptomoneda','', listaCripto)

    const consultarApi = async () => {
        const resultado = await axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD')
        setListaCripto(resultado.data.Data)
    }

    useEffect(() => {
        consultarApi()
    }, [])

    return (
        <form>
            <SeleccionarMoneda />
            <SelectCripto />
            <Button type="submit"> Calcular</Button>
        </form>
)

}

export default Formulario;