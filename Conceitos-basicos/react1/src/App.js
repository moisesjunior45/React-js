import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import SearchBox from './components/SearchBox';
import Modal from './components/Modal';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Categoria from './pages/Categoria.js';


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

/*const Site = styled.div`
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
`;*/

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

/*const Input = styled.input`
  width:400px;
  height:30px;
  font-size:16px;
  padding:10px;
  border:1px solid #000;
`;*/

/*function App() {

  const [ texto, setTexto ] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInput = (e) => {
    setTexto( e.target.value );
  };

  const handleButton = () => {
    alert(email + ' - ' + password);
  }

  return (
    <>
        <Input type="text" value={texto} onChange={handleInput}/>
       <p>{texto.length} Caracteres</p> 

      <Input placeholder="Digite um e-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input placeholder="Digite uma senha" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleButton}>Dizer</button>

    </>
  );
}*/

// Aula 11 - Condicional de exibição

/*const Input = styled.input`
  width:400px;
  height:30px;
  font-size:16px;
  padding:10px;
  border:1px solid #000;
`;

function App() {

  const [email, setEmail] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>

      <Input placeholder="Digite um e-mail" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />*/

{/*{isLogged === true &&
        <button>Sair</button>
      }

      {isLogged === false &&
        <button>Fazer Login</button>
      }*/}

{/* Outra forma de fazer utilizando Operador Ternário */ }
/*{isLogged ? <button>Sair</button> : <button>Fazer Login</button>}

{email.length > 0 &&
  <div>
    <p>{email.length} Caractere{email.length !== 1 ? 's' : ''}</p>
  </div>
}
</>
);
}*/

// Aula 13 - Ciclo de vida (useEffect)

/*function App() {

  const [contagem, setContagem] = useState(0);

  useEffect(() => {
    if (contagem == 0) {
      document.title = "Começou a brincadeira!";
    } else {
      document.title = "Contagem: " + contagem;
    }
    
  }, [contagem]);

  function aumentarAction() {
    setContagem(contagem + 1);
  }

  return (
    <>
      <h1>Contagem: {contagem}</h1>
      <button onClick={aumentarAction}>Aumentar Número</button>
    </>
  );
}*/

// Aula 14 e 15 - Separando e trocando dados entre componentes

/*function App() {

  const [searchText, setSearchText] = useState('');

  function handleSearchInput(novoTexto) {
    setSearchText(novoTexto);
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>
      <SearchBox
        frasePadrao="Faça sua busca..."
        onChangeText={handleSearchInput}
      />

      <SearchBox
        frasePadrao={searchText}

      />
      <hr />

      Texto procurado: {searchText}
    </>
  );
}*/

// Aula 16 - Exibindo Lista

/*function App() {

  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    setList([
      { title: 'Comprar o bolo', done: false },
      { title: 'Pegar o cachorro no Petshop', done: true },
      { title: 'Gravar a aula', done: false }
    ]);
  }, []);

  function handleSearchInput(novoTexto) {
    setSearchText(novoTexto);
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>
      <SearchBox
        frasePadrao="Faça sua busca..."
        onChangeText={handleSearchInput}
      />

      <hr />

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.done &&
              <del>{item.title}</del>
            }
            {!item.done &&
              item.title
            }
          </li>
        ))}
      </ul>


    </>
  );
}*/

// Aula 17 - Adicionando Novos Itens

/* App() {

  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    setList([
      { title: 'Comprar o bolo', done: false },
      { title: 'Pegar o cachorro no Petshop', done: true },
      { title: 'Gravar a aula', done: false }
    ]);
  }, []);

  function addAction(newItem) {
    let newList = [...list];
    newList.push({ title: newItem, done: false });
    setList(newList);
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>
      <SearchBox
        frasePadrao="Adicione um item"
        onEnter={addAction}
      />

      <hr />

      <ul>
        {list.map((item, index) => (
          <li key={index}>
            {item.done &&
              <del>{item.title}</del>
            }
            {!item.done &&
              item.title
            }
          </li>
        ))}
      </ul>


    </>
  );
}*/

// Aula 18 - Marcando como feito

/*function App() {

  const [searchText, setSearchText] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    setList([
      { title: 'Comprar o bolo', done: false },
      { title: 'Pegar o cachorro no Petshop', done: true },
      { title: 'Gravar a aula', done: false }
    ]);
  }, []);

  function addAction(newItem) {
    let newList = [...list];
    newList.push({ title: newItem, done: false });
    setList(newList);
  }

  function handleToggleDone(index) {
    let newList = [...list];
    newList[index].done = !newList[index].done;

    setList(newList);
  }

  return (
    <>
      <h1>Lista de Tarefas</h1>
      <SearchBox
        frasePadrao="Adicione um item"
        onEnter={addAction}
      />

      <hr />

      <ul>
        {list.map((item, index) => (
          <li key={index} onClick={() => handleToggleDone(index)}>
            {item.done &&
              <del>{item.title}</del>
            }
            {!item.done &&
              item.title
            }

          </li>
        ))}
      </ul>


    </>
  );
}*/

// Aula 19 - LocalStorage


/*function App() {

  const [name, setName] = useState(localStorage.getItem('name'));

  useEffect(() => {
    localStorage.setItem('name', name);
  }, [name]);

  return (
    <>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />
    </>
  );
}*/

// Aula 20 - Modal


/*function App() {

  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonClick = () => {
    setModalVisible(true);
  }

  return (
    <>
    <button onClick={handleButtonClick}>Abrir Modal</button>
    <Modal visible={modalVisible} setVisible={setModalVisible}>
      <h1>Testando 1,2,3...</h1>
    </Modal>
    </>
  );
}*/

// Aula 21 - Router - Básico 1

/*function App() {

  return (
    <BrowserRouter>
      <header>
        <h1>Meu site legal</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
          </ul>
        </nav>
      </header>
    </BrowserRouter>
  );
}*/


// Aula 22 - Router - Básico 2

/*function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Meu site legal</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route  exact path="/sobre">
          <Sobre />
        </Route>
      </Switch>

      <hr />
      <footer>
        Todos os direitos reservados...
      </footer>
    </BrowserRouter>
  );
}*/

// Aula 23 - Router - Parâmetros na URL

function App() {
  return (
    <BrowserRouter>
      <header>
        <h1>Meu site legal</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/sobre">Sobre</Link>
            </li>
            <li>
            <Link to="/categoria/esportes">Esportes</Link>
            </li>
            <li>
            <Link to="/categoria/noticias">Notícias</Link>
            </li>
            <li>
            <Link to="/categoria/viagem">Viagem</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route  exact path="/sobre">
          <Sobre />
        </Route>

        <Route path="/categoria/:cat">
          <Categoria />
        </Route>

      </Switch>

      <hr />
      <footer>
        Todos os direitos reservados...
      </footer>
    </BrowserRouter>
  )
}

export default App;