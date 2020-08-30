import React from 'react';
import axios from 'axios'



class ViewPlayList extends React.Component {
  state = {
      lista: []
    }

  componentDidMount = () => {
      this.getAllList()
    }

  getAllList = () => {
    
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
          headers: {
            Authorization: 'leonardo-oliveira-jackson'
          }
      }).then((response) => {
        console.log(response)  
        this.setState({lista: response.data.result.list})
      }).catch((error) => {
            
        })
  }

  removeList = (listId) => {
    
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${listId}`, {
      headers: {
        Authorization: 'leonardo-oliveira-jackson'
      }
    }).then((response) => {
      this.getAllList()
      alert("Lista Excluída")
    })
      .catch((error) => {})
  }   
  
  
  render(){
    return (
      <div>
          <h2>PlayList:</h2>
          {this.state.lista.map((list) => {
              return <li key={list.id}>{list.name}
              <button onClick={() => this.removeList(list.id)}> X </button>
              </li>
          })}
      </div>
    )
  }
}

export default ViewPlayList;