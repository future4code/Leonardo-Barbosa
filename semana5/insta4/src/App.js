import React from 'react';
import './App.css';
//import Post from './components/Post/Post';

class App extends React.Component {

    render() {
    
    return (
      <div className={'app-container'}>
                          
        <Post
          nomeUsuario={'Ludmila'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/240/150'}
        />
        
        <Post
          nomeUsuario={'Leonardo'}
          fotoUsuario={'https://picsum.photos/60/100'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Laura'}
          fotoUsuario={'https://picsum.photos/20/35'}
          fotoPost={'https://picsum.photos/270/150'}
        />
      </div>
    );
  }
}

export default App;
