import React from 'react'
import { useHistory } from 'react-router-dom'
import {goToLoginPage} from '../Router/GoToPages'
import {goToListTripsPage} from '../Router/GoToPages'
import {goToApplicationFormPage} from '../Router/GoToPages'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import labex from '../img/labex.png'

const ContainerHome = styled.div`
  display:flex;
  flex-direction:column;
  border: 10px outset #A7A9AC;
  align-items:center;
  height: 500px;
  width:450px;
  margin-top:100px;
  img{
    margin-top:100px;
    padding-left:50px;
  } 
  
`
const ContainerBody = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;  
`
const ContainerButton = styled.div`
  margin-top:100px;
  Button{
   padding:10px;
    margin:20px;
    cursor:pointer;
  }
`

function HomePage() {
  const history = useHistory()

  return (
    <ContainerBody>
      <ContainerHome>
        <img src={labex}></img>
      <ContainerButton>  
        <Button variant="contained" color="primary" onClick={() => goToLoginPage(history)}>Login</Button>
        <Button variant="contained" color="primary" onClick={() => goToApplicationFormPage(history)}>Inscreva-se</Button>
      </ContainerButton>
        <Button variant="outlined" color="primary" onClick={() => goToListTripsPage(history)}>Nossas Viagens</Button>
      </ContainerHome>
    </ContainerBody>
  )
}

export default HomePage