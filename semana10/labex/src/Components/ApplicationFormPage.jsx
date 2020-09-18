import React  from 'react'
import TextField from '@material-ui/core/TextField'
import useForm from '../Hooks/useForm'
import styled from 'styled-components'
import labex from '../img/labex.png'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import {goToHomePage} from '../Router/GoToPages'
import {goToListTripsPage} from '../Router/GoToPages'

const ContainerHome = styled.div`
  display:flex;
  flex-direction:column;
  margin:50px; 
  margin-left:50px;
  `

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




function ApplicationFormPage() {
  const {form, onChange, resetState}  = useForm({
    name:"",
    age:"",
    applicationText:"",
    profession:"",
    country:"",
    trip:""
  })

  const history = useHistory()

  const handleInputChange = (event) =>{
    const { name, value } = event.target
    onChange(name, value)
  } 
  
  const handleSubmittion = (event) =>{
    event.preventDefault()
    resetState()
    console.log(form)
  }
   
  return (
    <div>
      <ContainerMain>
      <img src={labex}></img>
        <Button variant="contained" color="primary" onClick={() => goToHomePage(history)}>Home</Button>
        <Button variant="contained" color="primary" onClick={() => goToListTripsPage(history)}>Viagens</Button>
      </ContainerMain>
      <ContainerHome>
        <h2>Formulário de Inscrição</h2>
      <ContainerForm> 
        <form onSubmit={handleSubmittion}>
          <TextField name="name" value={form.name}  onChange={handleInputChange} label="Nome" variant="filled" required /><br/><br/>
          <TextField name="age" type="number" value={form.age} onChange={handleInputChange} label="Idade" variant="filled" required /><br/><br/>
          <TextField name="applicationText"  value={form.applicationText} onChange={handleInputChange} label="Motivo" variant="filled" required/><br/><br/>
          <TextField name="profession"  value={form.profession} onChange={handleInputChange} label="Profissão" variant="filled" required/><br/><br/>
          <TextField name="country"  value={form.country} onChange={handleInputChange} label="País" variant="filled" required/><br/><br/>
          <TextField name="trip"  value={form.trip} onChange={handleInputChange} label="Viagem" variant="filled" required/><br/><br/>
          <button>Enviar</button>
        </form>
      </ContainerForm> 
      </ContainerHome>
    </div>
  )
}

export default ApplicationFormPage