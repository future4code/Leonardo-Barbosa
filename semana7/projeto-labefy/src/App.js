import React from 'react';
import NewPlayList from './components/NewPlayList';
import ViewPlayList from './components/ViewPlayList'
import GetPlayList from './components/GetPlayList'

class App extends React.Component {
  
  
  
  render(){
    return (
      <div>
      <NewPlayList />
      <ViewPlayList />
      <GetPlayList />
      </div>
    )
  }
}

export default App;
