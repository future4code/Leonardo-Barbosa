import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Fab from '@material-ui/core/Fab'
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import axios from 'axios';

const ContainerPrincipal = styled.div`

`
const Botoes = styled.div`
  display:flex;
  justify-content:space-evenly;
`

const ContainerPerfil = styled.div`

`
const ContainerHeader = styled.div`
  display:flex;
  justify-content:space-between;
  margin-left:150px;

   button{
    display:flex;
    justify-content: flex-end;
   }
`



function TelaUm(props) {
  const [pegarProfile, setPegarProfile] = useState({})

  useEffect(() => {
    getProfile()
  }, [])

  const getProfile = () => {
    axios
      .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo/person")
      .then(response => {
        setPegarProfile(response.data.profile)
      }).catch(erro => {})
  }

  return (
    
    <ContainerPrincipal >
      {/* {getProfile()} */}
        <ContainerHeader>
          <label>Astro Match</label>
          <button>
            <SupervisorAccountIcon onClick={props.alterarPagina}/>
          </button>
        </ContainerHeader>
        
        <ContainerPerfil key={pegarProfile.id}> 
          <img width="400vw" height="300vh" src={pegarProfile.photo}/>
          <p>{pegarProfile.name}, {pegarProfile.age}, {pegarProfile.bio}</p>       
        </ContainerPerfil> 
          
          <Botoes>
              <Fab>
                <CloseIcon />
              </Fab>
              <Fab>
                <FavoriteIcon />
              </Fab>
          </Botoes>

    </ContainerPrincipal>
  );
}

export default TelaUm;
