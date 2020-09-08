import React from 'react'
import styled from 'styled-components'
import TrackCard from './TrackCard'
import axios from 'axios'
import { baseUrl, axiosConfig } from '../constants/constants'

const PlayListDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const TrackCreate = styled.form`
    display: flex;
    width: 100vw;
    align-items: center;
    height: 100px;
    justify-content: space-around;

    div{
        display:flex;
        flex-direction: column;
    }

`




class PlayListDetail extends React.Component {
    state = {
        tracks: [],
        trackName: "",
        artist: "",
        url: ""

    }   
    


    componentDidMount = () => {
        this.catchTrack()
    }


    catchTrack = () => {
        axios.get(`${baseUrl}/${this.props.playlistId}/tracks`, axiosConfig)
        .then(response => {
            this.setState({tracks: response.data.result.tracks})
        }).catch(error => {})
    }

    removeTrackFromPlaylist = (trackId) => {
        axios.delete(`${baseUrl}/${this.props.playlistId}/tracks/${trackId}`, axiosConfig)
        .then(() => {
            this.catchTrack()
            alert("Música Deletada")
        }).catch(error => {
            console.log(error)
        })
    }


    changeInput = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    addTrack = (e) => {
        e.preventDefault()

        const body = {
            name: this.state.trackName,
            artist: this.state.artist,
            url: this.state.url
        }

        axios.post(`${baseUrl}/${this.props.playlistId}/tracks`, body, axiosConfig)
            .then(() => {
                alert("Música adicionada")
                this.catchTrack()
                this.setState({trackName: "", artist: "", url: ""})
            }).catch(error => {})


    }
    
    render() {

        const tracks = this.state.tracks.map(track => <TrackCard 
            key={track.id}
            trackName={track.name}
            artist={track.artist}
            url={track.url}
            tackId={track.id}
            removeTrackFromPlaylist={this.removeTrackFromPlaylist}
            /> )

        return(
            <PlayListDetailContainer>
                <TrackCreate onSubmit={this.addTrack}>
                    <div>
                        <label>Nome da Música:</label>
                        <input 
                            placeholder="Nome da música"
                            name="trackName"
                            value={this.state.trackName}
                            onChange={this.changeInput}
                        />
                    </div>
                    <div>
                        <label>Artista:</label>
                        <input 
                            placeholder="Nome do Artista"
                            name="artist"
                            value={this.state.artist}
                            onChange={this.changeInput}
                        />
                    </div>
                    <div>
                        <label>URL da Música:</label>
                        <input 
                            placeholder="Url da Música"
                            name="url"
                            value={this.state.url}
                            onChange={this.changeInput}
                        />
                    </div>
                    <button type="submit">Adicionar Música</button>
                </TrackCreate>
                {tracks}
                <button onClick={() => this.props.changePage("PlayLists", "")}>Voltar para PlayLists</button>    
            </PlayListDetailContainer>
        )
        
    }
}

export default PlayListDetail