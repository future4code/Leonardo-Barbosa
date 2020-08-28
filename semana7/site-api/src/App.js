import React from 'react';
import axios from 'axios';
import styled from 'styled-components'
import { baseUrl } from '../src/baseUrl'

const Header = styled.h3`
text-align: center;
`

class App extends React.Component {
    state = {
      city: '',
      date: '',
      temp: '',
      humidity: '',
      climate:'',
      wind: '',
    }
  


  componentDidMount = () =>{
      this.getInformation()
  }

  getInformation = () => {
    axios.get(baseUrl)

    .then((response) => {
      
      this.setState({city:response.data.results.city, 
      date:response.data.results.date,
      temp:response.data.results.temp,
      humidity:response.data.results.humidity,
      climate:response.data.results.description,
      wind:response.data.results.wind_speedy})
    }).catch((error) => {
      console.log(error)
    })
  }

   
  render(){
    return (
      <div className="App">
        <Header>Clima da sua Região</Header>
        <div>
          <hr />
          <p>Cidade: {this.state.city}</p>
          <p>Data: {this.state.date}</p>
          <p>Temperatura: {this.state.temp}°</p>
          <p>Umidade: {this.state.humidity}</p>
          <p>Clima: {this.state.climate}</p>
          <p>Velocidade do Vento: {this.state.wind}</p>
          <button onClick={this.getInformation}>Atualizar</button>
        </div>
      </div>
    );
  }
}

export default App;
