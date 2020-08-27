import React from 'react';
import styled from 'styled-components'
import axios from 'axios'
import CreateUsers from './components/CreateUsers'
import UserList from './components/UserList'

const BotaoMudarDePag = styled.button`
  cursor: pointer;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  outline: none;
  border: none;
  margin: 10px 10px;
  background-color: ghostwhite;
  box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.35);
  transition: box-shadow 1s, background-color 2s ease-out;
  font-family: monospace;
  font-size: 15px;

  :hover {
    box-shadow: 10px 0px 10px 1px rgba(0, 0, 0, 0.35);
    background-color: blueviolet;
    color:white;
  }
`


class App extends React.Component {
  state = {
    pagina: "CreateUsers"
  }

  mudarPagina = () => {
    this.state.pagina === "CreateUsers" ? 
    this.setState({pagina: "UserList"}) : 
    this.setState({pagina: "CreateUsers"})
  }

  render(){
    const currentpage = () => {
      if (this.state.pagina === "CreateUsers"){
        return <CreateUsers />
      } else if (this.state.pagina === "UserList"){
        return <UserList/>
      }
    }
    
    return (
     <div>
       <BotaoMudarDePag onClick={this.mudarPagina}>Mudar Página</BotaoMudarDePag>
       {currentpage()}
     </div>
    )
  }
}

export default App;
