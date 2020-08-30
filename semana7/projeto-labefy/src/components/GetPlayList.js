import React from 'react';
import axios from 'axios'


class GetPlayList extends React.Component {
    state = {
        playList: []
      }

  getPlayListTracks = () => {

    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/:playlistId/tracks`, {
          headers: {
            Authorization: 'leonardo-oliveira-jackson'
          }
      }).then((response) => {
        
       
        }).catch((error) => {
            
        })
  }

  render(){
        
    return (
      
      <div>
          {this.state.playList.map((playList) => {
              return <li key={playList.id}></li>
          })}
      </div>
    )
  }
}

export default GetPlayList