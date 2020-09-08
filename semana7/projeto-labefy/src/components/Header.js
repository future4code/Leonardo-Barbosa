import React from 'react'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    height: 100px;
    background-color:greenyellow;
    display:flex;
    align-items:center;
    justify-content:space-around;

`
const ButtonHeader = styled.div`
    display:flex;
    gap:10px;
`

const Header = (props) => {
    return(
        <HeaderContainer>
            <h2>Labefy</h2>
                <ButtonHeader>
                    <button onClick={() => props.changePage("PlayListCreation")}>Cadastrar playlist</button>
                    <button onClick={() => props.changePage("PlayListManager")}>Visualizar playlists</button>
                </ButtonHeader>    
        </HeaderContainer>
    )
}

export default Header