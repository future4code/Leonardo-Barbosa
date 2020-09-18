import React, {useState, useEffect } from 'react'
import { useProtectPage } from '../Hooks/useProtectPage'
import {goToHomePage} from '../Router/GoToPages'
import {goToListTripsPage} from '../Router/GoToPages'
import {goToCreateTripPage} from '../Router/GoToPages'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import labex from '../img/labex.png'
import { useHistory } from 'react-router-dom'
import axios from 'axios'


const ContainerMain = styled.div`
  display:flex;
  align-items:center;
  margin:20px;
  Button{
     margin-left:50px;
  }
`
const ContainerCandidate = styled.div`
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

function TripDetailsPage() {
  useProtectPage()
  const history = useHistory()

  const [tripDetail, setTripDetail] = useState([])

  useEffect(() => {
    getTripDetails()
  }, [])

  const getTripDetails = (id) =>{
    const token = window.localStorage.getItem("token")
    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-jackson/trip/${id}`,
      {headers:{
        auth: token
      }}).then(response => {
        setTripDetail(response.data.trip.candidates)
        console.log(response.data.trip.candidates)
      }).catch(error =>{})

  }

    return (
      <div>
        <ContainerMain>
          <img src={labex}></img>
          <Button variant="contained" color="primary" onClick={() => goToHomePage(history)}>Home</Button>
          <Button variant="contained" color="primary" onClick={() => goToListTripsPage(history)}>Viagens</Button>
          <Button variant="contained" color="primary" onClick={() => goToCreateTripPage(history)}>Criar Viagem</Button>
        </ContainerMain>
        <ContainerH>Candidatos</ContainerH>
      <ContainerCandidate>
        {tripDetail.map(item =>{
          return(
            <div key={item.id}>
              <p><strong>Candidato:</strong> {item.name}</p>
              <p><strong>Idade:</strong> {item.age}</p>
              <p><strong>País:</strong> {item.country}</p>
              <p><strong>Profissão:</strong> {item.profession}</p>
              <p><strong>Motivo:</strong> {item.applicationText}</p>
            </div>
          )
        })}
      </ContainerCandidate>
     

      </div>
  )
}

export default TripDetailsPage