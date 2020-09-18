import React, {useState, useEffect } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import {goToHomePage} from '../Router/GoToPages'
import {goToApplicationFormPage} from '../Router/GoToPages'
import labex from '../img/labex.png'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'


const ContainerMain = styled.div`
  display:flex;
  align-items:center;
  margin:20px;
  Button{
     margin-left:50px;
  }
`
const ContainerHome = styled.div`
  display:flex;
  align-items:center;
  flex-wrap: wrap;
  div{
    border:2px dashed black;
    width:250px;
    height:300px;
    margin:10px;
    padding:10px;
  }
`
const ContainerH = styled.h1`
  display:flex;
  align-items:center;
  flex-direction:column;
`


function ListTripsPage() {
  
  const [trip, SetTrip] = useState([])
  const history = useHistory()

  useEffect(() => {
    getListTrips()
  }, [])
  
  const getListTrips = () =>{
    
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-jackson/trips")
      .then(response => {
        console.log(response.data.trips)
        SetTrip(response.data.trips)
      }).catch(erro =>{})
  }
  
  return (
    <div>
      <ContainerMain>
      <img src={labex}></img>
        <Button variant="contained" color="primary" onClick={() => goToHomePage(history)}>Home</Button>
        <Button variant="contained" color="primary" onClick={() =>  goToApplicationFormPage(history)}>Inscreva-se</Button>
      </ContainerMain>
      <ContainerH>Rotas Disponíveis</ContainerH>
      <ContainerHome>
        {trip.map(item => {
          return (
            <div key={item.id}>
               <p><strong>Planeta:</strong> {item.planet} <br/></p> 
               <p><strong>Evento:</strong> {item.name} <br/></p>
               <p><strong>Descrição:</strong> {item.description} <br/></p>
               <p><strong>Data:</strong> {item.date} <br/></p>
               <p><strong>Duração em dias:</strong> {item.durationInDays} <br/></p>
            </div>
          )
        })}
      </ContainerHome>
    </div>
  )
}

export default ListTripsPage