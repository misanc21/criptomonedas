import React from 'react';
import styled from '@emotion/styled'

import imagen from './cryptomonedas.png'

/*Styled components*/ 
const Contenedor = styled.div `
  max-width: 900px;
  margin:0 auto;

  @media(min-width:992px){
    display:grid;
    grid-template-columns: repeat(2, 1fr);
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
  return (
    <Contenedor>
      <div>
        <Imag src={imagen} alt="cryptos"/>
      </div>
      <div>
        <Heading>Cotizador de cryptomonedas</Heading>
      </div>
    </Contenedor>
  );
}

export default App;
