import React from 'react'
import styled from 'styled-components'
import PlayLists from './PlayLists'
import PlayListDetail from './PlayListDetail'

const PlayListManagerContainer = styled.div`

`
class playListManager extends React.Component {
    state = {
        currentPage: "PlayLists",
        playlistId: ""
    }   

    changePage = (currentPage, playlistId) => {
        this.setState({
            currentPage: currentPage,
            playlistId: playlistId
        })
    }
    
    
    render() {
        
        const renderPage = () => {
            if(this.state.currentPage === "PlayLists"){
                return <PlayLists 
                changePage={this.changePage}/>
            } else if (this.state.currentPage === "PlayListDetail"){
                return <PlayListDetail 
                changePage={this.changePage}
                playlistId={this.state.playlistId}/>
            }
        }

        return(
            <PlayListManagerContainer>     
                 {renderPage()}
            </PlayListManagerContainer>
        )
        
    }
}

export default playListManager