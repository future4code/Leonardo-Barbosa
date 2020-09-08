import React from 'react';
import styled from 'styled-components'
import Header from './components/Header'
import PlayListCreation from './components/PlayListCreation'
import PlayListManager from './components/PlayListManager'

const AppContainer = styled.div`
display:flex;
flex-direction:column;
height: 100vh;
width: 100vw;
background-color:blueviolet;
`

class App extends React.Component {
  state = {
    renderPage: "PlayListCreation"
  }
  
  changePage = (renderPage) => {
    this.setState({renderPage: renderPage})
  }
  
  render(){
    const render = () => {
      if(this.state.renderPage === "PlayListCreation"){
        return <PlayListCreation />
      } else if(this.state.renderPage === "PlayListManager"){
        return <PlayListManager />
      }
    }

    return (
      <AppContainer>
        <Header 
        changePage={this.changePage}
        />
        {render()}        
      </AppContainer>
    )
  }
}

export default App;
