import React from 'react'
import styled from 'styled-components'
import PlayListCard from './PlayListCard'
import axios from 'axios'
import {baseUrl, axiosConfig} from '../constants/constants'

const PlayListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
class PlayList extends React.Component {
    state = {
      playlists: []
    }   

    componentDidMount = () => {
        this.catchPlaylist()
    }

    deletePlayList = (playlistId) => {
        axios.delete(`${baseUrl}/${playlistId}`, axiosConfig)
        .then(response => {
            this.catchPlaylist()
            alert("PlayList Deletada")
        }).catch(error => {})
    }

    catchPlaylist = () => {
        axios.get(baseUrl, axiosConfig)
        .then(response => {
        this.setState({playlists: response.data.result.list})
        }).catch(error => {})
    }   
    
    
    render() {
    const playLists = this.state.playlists.map(playlist => <PlayListCard 
            key={playlist.id}
            changePage={this.props.changePage}
            name={playlist.name}
            playlistId={playlist.id}
            deleteplaylist={this.deletePlayList}
            />  )

        return(
            <PlayListContainer>
                {playLists}
            </PlayListContainer>
        )
        
    }
}

export default PlayList