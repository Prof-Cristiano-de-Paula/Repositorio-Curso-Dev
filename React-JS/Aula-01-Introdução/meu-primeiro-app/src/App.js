import './App.css'
import HelloWorld from './components/HelloWorld.js'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'
import Evento from './components/Evento'
import Form from './components/Form'
import Condicional from './components/Condicional'
import NovaLista from './components/NovaLista'

function App() {

  const nome='Cristiano de Paula'
  const novoNome = nome.toLocaleUpperCase()

  const url = "https://via.placeholder.com/150"

  const meusItens = ['React','Vue','Angular'] 

  function soma(a, b){
    return a + b;
  }

  return (
    <div className="App">
      <h1>Olá React!</h1>
      <p>Meu primeiro App</p>
      <p>Meu nome é: {novoNome}</p>
      <HelloWorld />
      <Frase />
      <Evento numero='1'/>
      <Evento numero='2'/>
      <Form />
      <p>Resultado da soma: { soma(3, 2) }</p>
      <img src={url} alt="Minha Imagem"/>
      <SayMyName nome="José da Silva" />
      <SayMyName nome={nome} />
      <Pessoa nome="Cristiano" idade="18" profissao="Professor"  foto="https://via.placeholder.com/75" />
      <List />
      <NovaLista itens={ meusItens} />
      <h1>Reinderização Condicional</h1>
      <Condicional />

    </div>
  );
}

export default App;
