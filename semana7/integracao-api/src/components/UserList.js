import React from "react"
import styled from "styled-components"
import axios from "axios"
import { baseUrl, axiosConfig } from "../AxiosConstants"



const Lista = styled.li`
  display: flex;
  min-width: 60px;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 10px 0;
`

const ListaUser = styled.form`
  border: 2px solid black;
  width: 20%;
  margin: 0 auto;
  padding: 30px;
  align-items: center;
  margin-top:10px;

`


const BotaoDeletar = styled.span`
  color: red;
  cursor: pointer;
`
class UserList extends React.Component {
   state = {
       usuarios:[]
   }
   
   componentDidMount = () =>{
       this.getUsers()
   }

   getUsers = () => {
    axios.get(baseUrl, axiosConfig )
    
    .then((resposta) => {
        this.setState({usuarios: resposta.data})
    })
    .catch((erro) => {
        console.log(erro)
    })
   }
   
   removeUser = (userId) =>{
    axios.delete( `${baseUrl}/${userId}`, axiosConfig )
     
    .then((resposta) => {
       this.getUsers()
       alert("Deletado com Sucesso")
     })
     .catch((erro) => {
       alert("Tente novamente")
     })
 }   
   
    render(){
        return(        
            <ListaUser>
                <h3>Lista de usuarios:</h3>
                {this.state.usuarios.map((user) => {
                    return <Lista key={user.id}>{user.name}
                    <BotaoDeletar onClick={() => this.removeUser(user.id)}>X</BotaoDeletar>
                </Lista>})}
            </ListaUser> 
          )
    }
}

export default UserList