import React from 'react';
import './App.css';
import Post from './components/Post/Post';
import styled from 'styled-components'


const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start ;
  flex-wrap: wrap;
  gap: 10px;
  padding-top: 50px;

`
const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  display: -moz-inline-grid;
  height: 30px ;
  width: 100vw;
  gap: 20px;
  padding: 40px;
  background-color: gold;
`




class App extends React.Component {

    state = {

      usuarios: [

        {
          nomeUsuario: "Ludmila",
          fotoUsuario: "https://picsum.photos/50/50",
          fotoPost: "https://picsum.photos/221/150"
        },

        {
          nomeUsuario: "Leonardo",
          fotoUsuario: "https://picsum.photos/60/100",
          fotoPost: "https://picsum.photos/222/150"
        },

        {
          nomeUsuario: "Laura",
          fotoUsuario:"https://picsum.photos/20/35",
          fotoPost: "https://picsum.photos/223/150"
        }
      ],

      valorInputUsuario: "",
      valorInputFotoUsuario: "",
      valorInputFotoPost: ""
    }

    adicionaPost = () =>{
      const novaPost = {
        nomeUsuario: this.state.valorInputUsuario,
        fotoUsuario: this.state.valorInputFotoUsuario,
        fotoPost: this.state.valorInputFotoPost

      }
      
      const novoPosts = [... this.state.usuarios, novaPost]
      
      this.setState({usuarios: novoPosts})
    }
    

    onChangeInputUsuario = (event) =>{
      this.setState({ valorInputUsuario: event.target.value })
    }
    onChangeInputFotoUsuario = (event) =>{
      this.setState({ valorInputFotoUsuario: event.target.value })
    }
    onChangeInputFotoPost = (event) =>{
      this.setState({ valorInputFotoPost: event.target.value })  
    
    }

  render() {
    
    const listaDeComponentes = this.state.usuarios.map((pessoa) =>{
      return(
        
      <Post
        nomeUsuario={pessoa.nomeUsuario}
        fotoUsuario={pessoa.fotoUsuario}
        fotoPost={pessoa.fotoPost}
      />
        
      )
    })
    
    return (
      <div>
        
        <InputContainer>
          <input
            value={this.state.valorInputUsuario}
            onChange={this.onChangeInputUsuario}
            placeholder={"Nome"}
          /> 
          <input
            value={this.state.valorInputFotoUsuario}
            onChange={this.onChangeInputFotoUsuario}
            placeholder={"Foto do Usuário"}
          /> 
          <input
            value={this.state.valorInputFotoPost}
            onChange={this.onChangeInputFotoPost}
            placeholder={"Foto"}
          /> 

          <button onClick={this.adicionaPost}>Adicionar</button> <p></p>

        </InputContainer>  
      
        <Container>{listaDeComponentes}</Container>
    
      </div>
    );
  }
}

export default App;
