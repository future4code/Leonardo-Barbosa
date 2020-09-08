import React from 'react'
import styled from 'styled-components'


const PlayListCardContainer = styled.div`
    margin: 10px;
    display: flex;
    align-items: center;
`

const NameContainer = styled.p`
    margin: 10px;
`
const ButtonDelete = styled.p`
    color: red;

`

const PlayListCard = (props) => {
    return(
        <PlayListCardContainer>
            <button onClick={() => props.changePage("PlayListDetail", props.playlistId)}>Abrir PlayList</button>
            <NameContainer>{props.name}</NameContainer>
            <ButtonDelete onClick={() => props.deleteplaylist(props.playlistId)}>X</ButtonDelete>
        </PlayListCardContainer>
    )
}

export default PlayListCard