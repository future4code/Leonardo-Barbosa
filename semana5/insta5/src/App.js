import React from 'react';
import './App.css';
import Post from './components/Post/Post';

class App extends React.Component {

    state = {

      usuarios: [

        {
          nomeUsuario: "Ludmila",
          fotoUsuario: "https://picsum.photos/50/50",
          fotoPost: "https://picsum.photos/240/150"
        },

        {
          nomeUsuario: "Leonardo",
          fotoUsuario: "https://picsum.photos/60/100",
          fotoPost: "https://picsum.photos/200/150"
        },

        {
          nomeUsuario: "Laura",
          fotoUsuario:"https://picsum.photos/20/35",
          fotoPost: "https://picsum.photos/270/150"
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
      <div className={'app-container'}>
        
        {listaDeComponentes}
        
      </div>
    );
  }
}

export default App;
