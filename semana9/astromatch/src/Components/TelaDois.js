import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import astromatch from '../img/astromatch.svg'


const ContainerHeader = styled.div`
  display:flex;
  justify-content:space-between;
  margin-right:150px;
  padding:5px;

  button{
    display:flex;
    justify-content: flex-start;
    background:none;
    border:none;
    outline:none;
    cursor:pointer;
  }
img {
  height:30px;
  width:150px;
  margin-right:-30px;
   
}
`


function TelaDois(props) {
  const [deuMatch, setDeuMatch] = useState([])

  useEffect(() => {
    getMatch()
  }, [])

  const getMatch = () => {
    axios
      .get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/leonardo/matches")
      .then(response => {
          setDeuMatch(response.data.matches)
        }).catch(erro => {})
  }

  return (
    <div >
      <ContainerHeader>
        <button onClick={props.alterarPagina} ><ArrowBackIosIcon /></button>
        <img src={astromatch}/>
      </ContainerHeader>
      <div>   
        {deuMatch.map((pessoa) => {
          return <div key={pessoa.id}> <img width="100px" height="100px" src={pessoa.photo} /> <p>{pessoa.name}</p> </div>
        })}
      </div> 
    </div>
  );
}

export default TelaDois;