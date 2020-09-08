import React from 'react'
import styled from 'styled-components'


const TrackCardContainer = styled.div`
    margin: 10px;
    margin-bottom: 40px;
    display: flex;
    flex-direction:column;
    align-items: center;

    div{
        display: flex;
        align-items: center;
    }
`

const TrackContainer = styled.h4`
    margin: 10px;
`
const ArtistContainer = styled.p`
    margin-right: 10px;
`
const ButtonDelete = styled.p`
    color: red;

`

const TrackCard = (props) => {
    return(
        <TrackCardContainer>
            <div>
                <TrackContainer>{props.trackName} - </TrackContainer>
                <ArtistContainer>{props.artist}</ArtistContainer>
                <ButtonDelete 
                    onClick={ () => props.removeTrackFromPlaylist(props.trackId)}
                >X</ButtonDelete>
            </div>
            <audio 
                controls="controls"
                source src={props.url} type="audio/mp4">
            </audio>
        </TrackCardContainer>
    )
}

export default TrackCard