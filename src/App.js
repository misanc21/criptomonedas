import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled'
import axios from 'axios'

import imagen from './cryptomonedas.png'

import Formulario from './components/Formulario'
import Cotizacion from './components/Cotizacion'
import Spinner from './components/Spinner'

/*Styled components*/ 
const Contenedor = styled.div `
  max-width: 900px;
  margin:0 auto;

  @media(min-width:692px){
    display:grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 2rem;
  }
`

const Imag = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`

const Heading = styled.h1`
  font-family: 'bebas neue', cursive;
  color: #FFF;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top:80px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    display:block;
    background-color: #66a2fe;
  }
`

function App() {
  /*States */
  const [moneda, setMoneda] = useState('')
  const [cripto, setCripto] = useState('')
  const [resultado, setResultado] = useState([])
  const [cargando, setCargando] = useState (false)
  
  useEffect(() => {
    if (!moneda) return

    const cotizarCriptomoneda = async () => {
      const res = await axios.get(`https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`)

      setCargando(true)
      setTimeout(() => {
        setCargando(false)
        setResultado(res.data.DISPLAY[cripto][moneda])
      }, 2000);
    }
    cotizarCriptomoneda();
  }, [moneda, cripto])

  return (
    <Contenedor>
      <div>
        <Imag src={imagen} alt="cryptos"/>
      </div>
      <div>
        <Heading>Cotizador de cryptomonedas</Heading>
        <Formulario
          setMoneda = {setMoneda}
          setCripto = {setCripto}
        />
      </div>
      <div> 
        {
          cargando ? <Spinner/> : <Cotizacion resultado = {resultado}/>
        }
      </div>
    </Contenedor>
  );
}

export default App;
