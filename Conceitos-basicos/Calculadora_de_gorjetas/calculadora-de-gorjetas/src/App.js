import React, { useState } from 'react';
import styled from 'styled-components';

const Titulo = styled.h1``;

const Input = styled.input`
  width:400px;
  height:30px;
  font-size:16px;
  padding:10px;
  border:1px solid #000;
`;

function App() {
  const [conta, setConta] = useState(0);
  const [porcentagemConta, setPorcentagemConta] = useState(10);

  return (
    <>
      <Titulo>Calculadora de Gorjeta</Titulo>

      <p>Quanto deu a conta?</p>
      <Input type="number" value={conta} onChange={(e) => setConta(Number(e.target.value))} />

      <p>Qual a porcentagem de gorjeta?</p>
      <Input type="number" value={porcentagemConta} onChange={(e) => setPorcentagemConta(Number(e.target.value))} />

      <hr />

      {conta > 0 &&
        <>
          <p>Sub-total: R$ {conta}</p>
          <p>Gorjeta ({porcentagemConta}%): R$ {(porcentagemConta / 100) * conta}</p>
          <h3>Total: R$ {conta + ((porcentagemConta / 100) * conta)}</h3>
        </>
      }

    </>
  );
}

export default App;
