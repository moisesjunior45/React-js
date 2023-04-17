import React from "react";

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

function Avatar(props) {
  return (
    <div>
      <img src={props.user.url} alt={props.user.name} />
      <br />
      <span>{props.user.name}</span>
    </div>
  );
}

function App() {
  
  let user = {
    url:"https://avatars.githubusercontent.com/u/84156546?s=400&u=43abd60f780d76a7d54e753c622f26158d6096ed&v=4",
    name:"Moisés Júnior"
  }
  return <>
    <Avatar user={user} />
  </>;
}



export default App;