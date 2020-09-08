import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import {baseUrl, axiosConfig} from '../constants/constants'

const PlayListCreation = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    height: 500px;
    background-color: gold;
`
const PlayListCreationForm = styled.form`
    height: 150px;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
`

class playListCreation extends React.Component {
    state = {
        inputName: ""
    }
    
    changeInputValue = (e) => {
        this.setState({inputName: e.target.value})
    }
    
    createPlaylist = (e) => {
        e.preventDefault()
        const body = {
            name: this.state.inputName
        }
        axios.post(baseUrl, body, axiosConfig)
        .then(response => {
            alert("PlayList Criada com Sucesso!")
            this.setState({inputName: ""})
        }).catch( error => {})
    }
    
    render(){
        
        return(
            <PlayListCreation>
                <h2>Cadastrar PlayList</h2>
                <PlayListCreationForm onSubmit={this.createPlaylist}>
                    <label>Nova Playlist</label>
                    <input
                        placeholder="Nome da Playlist"
                        type="text"
                        value={this.state.inputName}
                        onChange={this.changeInputValue}
                    />
                    <button type="submit">Cadastrar Playlist</button>
                
                
                </PlayListCreationForm>     
            </PlayListCreation>
        )
    }
}

export default playListCreation