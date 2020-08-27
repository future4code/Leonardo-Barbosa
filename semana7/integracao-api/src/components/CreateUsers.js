import React from "react"
import styled from "styled-components"
import axios from "axios"
import { baseUrl, axiosConfig } from "../AxiosConstants"



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


class CreateUsers extends React.Component{
    
    state = {
        name:"",
        email:"",
    }
    
    onChangeInputName = (e) => {
        this.setState({name: e.target.value})
    }
  
    onChangeInputEmail = (e) => {
        this.setState({email: e.target.value})
    }

    addUser = () =>{
        const body = {
          name: this.state.name,
          email: this.state.email
        }  
        axios.post(baseUrl, body, axiosConfig)
         
            .then((resposta) => {              
              alert("Salvo com Sucesso")
              this.setState({name:"", email:""})
            })
            .catch((erro) => {
              alert("Verificar Nome ou E-mail")
            })
    }
    render(){
        return(
            <Container>
                <div>
                    <label forHtml="name">Nome: </label>
                    <input value={this.state.name} onChange={this.onChangeInputName}/>
                </div>
                <div>
                    <label forHtml="email">Email: </label>
                    <input value={this.state.email} onChange={this.onChangeInputEmail}/>
                </div>
                <BotaoSalvar onClick={this.addUser}>Salvar</BotaoSalvar>
            </Container>
        ) 
    }
}
export default CreateUsers