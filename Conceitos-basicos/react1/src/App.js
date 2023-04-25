import React, { useState } from "react";
import styled from 'styled-components';

// AULA 1 E 2
// No React existem 2 formas de criar um componente, estas são:

// 1º
/*class App extends React.Component {
  render() {
    return <h1>Testando 1,2,3...</h1>;
  }
}*/

// 2º
/*function App() {
  return <h1>Testando 3,4,5</h1>;
}*/

// Utilizando função anônima
/*let App = () => {
  return <h1>Testando 6,7,8</h1>;
};*/

// Utilizando arrow function
// let App = () => <h1>Testando 9,10,11...</h1>;

// AULA 3 - Entendendo o JSX
/*function formatarNome(usuario) {
  return usuario.nome + ' ' + usuario.sobrenome;
}

function App() {
  let usuario = {
    nome: 'Moisés',
    sobrenome: 'Oliveira'
  };

  let imagem = 'https://www.google.com.br/google.jpg';

  return <>
    <div>Meu nome é {formatarNome(usuario)}</div>
    <img src={imagem} />
  </>;
}*/


// Aula 04 - Componentes e Props

/*function Avatar(props) {
  return (
    // Usando Css em React
    <div style={{ backgroundColor: 'blue', padding: 20, width: 150 }}>
      <img style={{ width: 50, height: 50 }} src={props.user.url} alt={props.user.name} />
      <br />
      <span>{props.user.name}</span>
    </div>
  );
}*/

/*function App() {
  
  let user = {
    url:"https://avatars.githubusercontent.com/u/84156546?s=400&u=43abd60f780d76a7d54e753c622f26158d6096ed&v=4",
    name:"Moisés Júnior"
  }
  return <>
    <Avatar user={user} />
  </>;
}*/

// Aula 06, 07 e 08 - Estilização com StyledComponents

const Site = styled.div`
  width:400px;
  height:400px;
  background-color:#00FF00;
`;

const Botao = styled.button`
  font-size:19px;
  padding:10px 15px;
  background-color: ${props => props.ativo === true ? '#0000FF' : '#FF0000'};
  color: ${props => props.ativo === true ? '#FFF' : '#000'};
  border:3px solid #FF0000;
  color:FF0000;
  background-color:#FFF;
  margin:5px;
  border-radius:5px;
`;

const Botaopequeno = styled(Botao)`
  padding: 5px 10px;
  font-size:16px;
`;

/*function App() {

  return (
    <Site>
      // {<Botao ativo={true}>Clique aqui</Botao>
      // <Botao ativo={false}>Clique aqui</Botao> }
      <Botao>Clique aqui</Botao>
      <Botaopequeno>Clique aqui</Botaopequeno>
    </Site>
  );
}*/


// Aula 09 - useState

/*function App() {

  const [contagem, setContagem] = useState(0);

  const BotaoAction = () => {
    setContagem(contagem + 1);
  }

  return (
    <>
      <div>{contagem} vezes</div>
      <button onClick={BotaoAction}>Clique para aumentar</button>
    </>
  )
}*/

// Aula 10 - Campo de input

const Input = styled.input`
  width:400px;
  height:30px;
  font-size:16px;
  padding:10px;
  border:1px solid #000;
`;

function App() {

  // const [ texto, setTexto ] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const handleInput = (e) => {
  //   setTexto( e.target.value );
  // };

  const handleButton = () => {
    alert(email + ' - ' + password);
  }

  return (
    <>
      {/* <Input type="text" value={texto} onChange={handleInput}/>
      <p>{texto.length} Caracteres</p>  */}

      <Input placeholder="Digite um e-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input placeholder="Digite uma senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleButton}>Dizer</button>

    </>
  );
}



export default App;