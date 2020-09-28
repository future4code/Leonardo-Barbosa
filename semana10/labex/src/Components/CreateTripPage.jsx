import React from 'react'
import { useProtectPage } from '../Hooks/useProtectPage'
import {goToHomePage} from '../Router/GoToPages'
import {goToListTripsPage} from '../Router/GoToPages'
import {goToTripDetailsPage} from '../Router/GoToPages'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import labex from '../img/labex.png'
import { useHistory } from 'react-router-dom'
import useForm from '../Hooks/useForm'
import TextField from '@material-ui/core/TextField'
import axios from 'axios'


const ContainerMain = styled.div`
  display:flex;
  align-items:center;
  margin:20px;
  Button{
     margin-left:50px;
  }
`
const ContainerForm = styled.div`
  display:flex;
  gap:20px;
`
const ContainerHome = styled.div`
  display:flex;
  flex-direction:column;
  margin:50px; 
  margin-left:50px;
`

function CreateTripPage() {
  useProtectPage()
  const history = useHistory()
  
  const {form, onChange, resetState} = useForm({
    name:"",
    planet:"",
    date:"",
    description:"",
    durationInDays:0
  })

  const handleInputChange = (event) =>{
    const { name, value } = event.target
    onChange(name, value)
  } 

  const handleSubmittion = (event) =>{
    event.preventDefault()
    resetState()
    CreateTrip()
  }

  const CreateTrip = () =>{
    const token = window.localStorage.getItem("token")  
      axios
        .post("https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-jackson/trips", form, 
        {headers:{
          auth: token
        }}).then(response =>{alert("Viagem Criada")})
        .catch(error => {})
  }

  return (
    <div>
      <ContainerMain>
      <img src={labex}></img>
        <Button variant="contained" color="primary" onClick={() => goToHomePage(history)}>Home</Button>
        <Button variant="contained" color="primary" onClick={() => goToListTripsPage(history)}>Viagens</Button>
        <Button variant="contained" color="primary" onClick={() => goToTripDetailsPage(history)}>Detalhes</Button>
      </ContainerMain>
      <ContainerHome>
        <h1>Criar Viagem</h1>
        <ContainerForm> 
          <form onSubmit={handleSubmittion}>
            <TextField name="name" value={form.name}  onChange={handleInputChange} label="Evento" variant="filled" required /><br/><br/>
            <TextField name="planet"  value={form.planet} onChange={handleInputChange} label="Planeta" variant="filled" required /><br/><br/>
            <TextField name="date" type="date" value={form.date} onChange={handleInputChange} variant="filled" required/><br/><br/>
            <TextField name="description"  value={form.description} onChange={handleInputChange} label="Descrição" variant="filled" required/><br/><br/>
            <TextField name="durationInDays" type="day"  value={form.durationInDays} onChange={handleInputChange} label="Duração em Dias" variant="filled" required/><br/><br/>
            <Button variant={'contained'} color={'primary'} type={'submit'} >Enviar</Button>
          </form>
        </ContainerForm>
      </ContainerHome>
    </div>
  )
}

export default CreateTripPage