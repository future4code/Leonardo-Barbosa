import React from 'react';
import axios from 'axios'
import styled from 'styled-components'

class NewPlayList extends React.Component {
  state = {
      playList:''
  }

  onChangeInputName = (e) =>{
      this.setState({playList: e.target.value})
  }

  createPlayList = () => {
    const body = {
        name: this.state.playList
    }
    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
        headers: {
            Authorization: 'leonardo-oliveira-jackson'
        }
    })
        .then((response) => {
            alert('Playlist Criada')
            this.setState({playList:''})
        }).catch((error) => {
            alert('Essa lista já foi criada')
        })
    }

  
  render(){
    return (
      <div>
            <label>Nome da PlayList:</label>
            <input value ={this.state.playList} onChange={this.onChangeInputName}/>
            <button onClick={this.createPlayList}>Adicionar</button>
      </div>
    )
  }
}

export default NewPlayList;