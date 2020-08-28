import React from 'react';
import axios from 'axios'
import styled from 'styled-components'
import NewPlayList from './components/NewPlayList';
import ViewPlayList from './components/ViewPlayList'

class App extends React.Component {
  
  
  
  render(){
    return (
      <div>
      <NewPlayList />
      
      </div>
    )
  }
}

export default App;
