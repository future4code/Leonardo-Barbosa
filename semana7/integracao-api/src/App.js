import React from 'react';
import styled from 'styled-components'
import axios from 'axios'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  width: 20%;
  margin: 0 auto;
  padding: 30px;
  align-items: center;
  margin-top:50px;

  div {
    margin-top: 10px;
    
  }
`

const BotaoSalvar = styled.button`
  margin: 0 auto;
  background-color: blueviolet;
  color: white;
  border: none;
  position: relative;
  padding: 0.5em 1em;
  outline: none;
  cursor: pointer;
  margin-top:10px;
`
const BotaoDeletar = styled.span`
  color: red;
  cursor: pointer;
`

const ListaUser = styled.form`
  border: 2px solid black;
  width: 20%;
  margin: 0 auto;
  padding: 30px;
  align-items: center;
  margin-top:10px;

`

const Lista = styled.li`
  display: flex;
  min-width: 60px;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 10px 0;
`

class App extends React.Component {

  state = {
    name:"",
    email:"",
    usuarios:[]
  }


  getUsers = () => {
    const request = axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        {
            headers:{
                Authorization: "leonardo-oliveira-jackson"
            }
        }
    )

    request
        .then((resposta) => {
            this.setState({usuarios: resposta.data})
        })
        .catch((erro) => {
            console.log(erro)
        })
  }
  

  addUser = () =>{
    const body = {
      name: this.state.name,
      email: this.state.email
    }

    const request = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body,
      {
        headers: {
          Authorization: "leonardo-oliveira-jackson"
        }
      }
    )

    request 
      .then((resposta) =>{
        this.getUsers()
        alert("Salvo com Sucesso")
        this.setState({name:""})
        this.setState({email:""})
      })
      .catch((erro) => {
        alert("Verificar Nome ou E-mail")
      })
  }

  removeUser = () =>{
    const request = axios.delete(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/02ab59d3-910e-440a-a6ae-3d4b73b11b96",
      {
        headers:{
            Authorization: "leonardo-oliveira-jackson"
        }
      }
    )
    
    request
      .then((resposta) => {
        
        alert("Deletado com Sucesso")
      })
      .catch((erro) => {
        alert("Tente novamente")
      })


  }

  componentDidMount(){
      this.getUsers()
  }


  render(){
    const onChangeInputName = (e) => {
      this.setState({name: e.target.value})
    }

    const onChangeInputEmail = (e) => {
      this.setState({email: e.target.value})
    }

    return (
        
        <div>
          <Container>
            <div>
                <label forHtml="name">Nome: </label>
                <input value={this.state.name} onChange={onChangeInputName}/>
            </div>
            <div>
                <label forHtml="email">Email: </label>
                <input value={this.state.email} onChange={onChangeInputEmail}/>
            </div>
            
            <BotaoSalvar onClick={this.addUser}>Salvar</BotaoSalvar>   
            
          </Container>
            <ListaUser>
              <h3>Lista de usuarios:</h3>
              {this.state.usuarios.map((item) => {
                return <Lista key={item.id}>{item.name}
                <BotaoDeletar onClick={this.removeUser}>X</BotaoDeletar> 
                </Lista>})}
            </ListaUser>
        </div>
      );
  }
}

export default App;
