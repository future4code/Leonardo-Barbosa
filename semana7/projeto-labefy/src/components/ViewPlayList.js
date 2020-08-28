import React from 'react';
import axios from 'axios'
import styled from 'styled-components'


class ViewPlayList extends React.Component {
  state = {
      lista: []
    }

  componentDidMount = () => {
      this.getAllList()
    }

  getAllList = () => {
      const body = {
          quantity: '',
          list: [{
              id: '',
              name:''
          }]
        }
      axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {
          headers: {
            Authorization: 'leonardo-oliveira-jackson'
          }
      }).then((response) => {
            console.log(response.data.result)
            this.setState({lista: response.data.result})
      })
        .catch((error) => {
            console.log(error)
        })
        
    }
  
  
  render(){
    return (
      <div>
          <h2>PlayList:</h2>
          {this.state.lista.map((list) => {
              return <li key={list.id}>{list.name}</li>
          })}
      </div>
    )
  }
}

export default ViewPlayList;