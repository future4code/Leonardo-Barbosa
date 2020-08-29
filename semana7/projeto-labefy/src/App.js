import React from 'react';
import NewPlayList from './components/NewPlayList';
import ViewPlayList from './components/ViewPlayList'

class App extends React.Component {
  
  
  
  render(){
    return (
      <div>
      <NewPlayList />
      <ViewPlayList />
      
      </div>
    )
  }
}

export default App;
