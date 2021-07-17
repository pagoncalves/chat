import React from "react";
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,//erro é nulo
      isLoaded: false,
      items: []
    };
  }
  
  componentDidMount() {//depois que Loading...
    fetch( "http:127.0.0.1:3002" )//antes -https://snow-midi-avocado.glitch.me/messages"
      .then(res => res.json())//qndo recebe o resultado convert em json
      .then(//converte o resultado(result vira json) alterando o estado das variaveis
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.chat,
            result:result//guarda o json dentro result, para pegar toda a resposta linha 45 e 46
          });
        },
        // Nota: É importante lidar com os erros aqui
        // em vez de um bloco catch() para não recebermos
        // exceções de erros dos componentes.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  handleInput = (event) => {
    const name = event.target.name
    this.setState({ [name]: event.target.value })
  }

  handleEnviar = (event) => {
    this.setState((state) => { 


    })
  }

  render() {
    const { error, isLoaded, result } = this.state;//cria 3 variaveis constantes
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
      <div>Primeira mensagem : {result.chat[0].message} <br/> Id da segunda mensagem: {result.chat[1].id}
      <ul>
          {result.chat(item => (//imprimir o valor de todos os elemento .map(é um método), cada elemento da lista é um "item"
            <li key={item.id}>
              {item.message}
            </li>
          ))}
                </ul>
                <div>
                   <input name="msg" value={this.state.msg} >Digite sua mensagem: </input> 
                <button onClick={this.handleEnviar}>Enviar: </button>
                  </div>
               
</div>

      );
    
    }//cada item é um objeto, 
   
  }
}


export default App;
/*função json retorna objeto com os atirubtos que estavam no result json 

{"chave1": "valor1", "chave2": "valor2"} - isso é um json

result = res.json()- função

chave1 = result.chave1


---------------------
Json todo é um objeto
objeto principal é um chat(é a chave principal) 
o calor desta chave é a lista
result.chat 
cada item é um objeto é separado por virgula, 

pode endereçar o primeiro item : result.chat[0].message ou 

item = result.chat[0]
item.message

<div>{result.chat[0].message}</div>

item: result.chat[0].message

<div>{this.state.item}</div>


Outra forma de fazer linha 47, caso não use result: result
<ul>
          {items.map(item => (//imprimir o valor de todos os elemento .map(é um método), cada elemento da lista é um "item"
            <li key={item.id}>
              {item.message}
            </li>
          ))}
                </ul>
*/


/*
Variavel de ambiente ADMIN_KEY=cesar PORT=3002 npm start

Essas variaveis ficam no ambiente, não repcisa repetir no npm
export ADMIN_KEY=cesar
export PORT=3002
npm start
*/