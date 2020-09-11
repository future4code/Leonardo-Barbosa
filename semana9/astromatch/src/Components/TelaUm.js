import React, {useState, useEffect} from 'react'
import styled from 'styled-components'
import Fab from '@material-ui/core/Fab'
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from '@material-ui/icons/Close';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import axios from 'axios';
import astromatch from '../img/astromatch.svg'

const ContainerPrincipal = styled.div`

`
const Botoes = styled.div`
  display:flex;
  justify-content:space-evenly;
`

const ContainerPerfil = styled.div`
  margin-left:3px;

img{
  width:400px;
  height:300px;
  border: 2px solid sienna;
}
p{
  margin-left:10px;
  font-family:Verdana;
} 
`
const ContainerHeader = styled.div`
  display:flex;
  justify-content:space-between;
  margin-left:150px;
  padding:5px;

   button{
    display:flex;
    justify-content: flex-end;
    background:none;
    border:none;
    outline:none;
    cursor:pointer;
   }
   img{
    height:30px;
    width:150px;
    margin-left:-20px
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
        <ContainerHeader>
          <img src={astromatch}/>
          <button>
            <SupervisorAccountIcon onClick={props.alterarPagina}/>
          </button>
        </ContainerHeader>
        
        <ContainerPerfil key={pegarProfile.id}> 
          <img src={pegarProfile.photo}/>
          <p>{pegarProfile.name}, {pegarProfile.age}, {pegarProfile.bio}</p>       
        </ContainerPerfil> 
          
          <Botoes>
              <Fab>
                <CloseIcon />
              </Fab>
              <Fab>
                <FavoriteIcon color="secondary" />
              </Fab>
          </Botoes>

    </ContainerPrincipal>
  );
}

export default TelaUm;
