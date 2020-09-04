import React from 'react';
import styled from '@emotion/styled'

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
return (
    <form>
        <Button type="submit"> Calcular</Button>
    </form>
)

}

export default Formulario;