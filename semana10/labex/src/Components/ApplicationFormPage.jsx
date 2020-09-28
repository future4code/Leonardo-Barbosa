import React, {useState, useEffect}  from 'react'
import TextField from '@material-ui/core/TextField'
import useForm from '../Hooks/useForm'
import styled from 'styled-components'
import labex from '../img/labex.png'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import {goToHomePage} from '../Router/GoToPages'
import axios from 'axios'
import MenuItem from '@material-ui/core/MenuItem';
import { FormControl } from '@material-ui/core'
import { InputLabel } from '@material-ui/core'
import { Select } from '@material-ui/core'


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
    age:0,
    applicationText:"",
    profession:"",
    country:"", 
    tripId:""
  })

  
  const [trip, SetTrip] = useState([])

  useEffect(() => {
    getListTrips()
  }, [])

  const getListTrips = () =>{
    
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-jackson/trips")
      .then(response => {
        SetTrip(response.data.trips)
      }).catch(erro =>{})
  }

  const history = useHistory()

  const handleInputChange = (event) =>{
    const { name, value } = event.target
    onChange(name, value)
  } 
  
  const handleSubmittion = (event) =>{
    event.preventDefault()
    resetState()
    createForm()
  }

  const createForm = () => {
    axios
      .post(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-jackson/trips/${form.tripId}/apply`, form)
      .then(response => {alert("Formulario Enviado")})
      .catch(error => {console.log(error)})
  }
  
  return (
    <div>
      <ContainerMain>
      <img src={labex}></img>
        <Button variant="contained" color="primary" onClick={() => goToHomePage(history)}>Home</Button>
      </ContainerMain>
      <ContainerHome>
        <h2>Formulário de Inscrição</h2>
      <ContainerForm > 
        <form onSubmit={handleSubmittion}  autoComplete="off">
          <TextField name="name" value={form.name}  onChange={handleInputChange} label="Nome" variant="filled" required /><br/><br/>
          <TextField name="age" type="number" value={form.age} onChange={handleInputChange} label="Idade" variant="filled" required /><br/><br/>
          <TextField name="applicationText"  value={form.applicationText} onChange={handleInputChange} label="Motivo" variant="filled" required/><br/><br/>
          <TextField name="profession"  value={form.profession} onChange={handleInputChange} label="Profissão" variant="filled" required/><br/><br/>
          <FormControl> 
            <InputLabel id="paises">País</InputLabel>
            <Select 
              value={form.country} 
              onChange={handleInputChange}
              labelId="paises"
              name={'country'}
              variant="filled" 
              required >
                <MenuItem value={'brasil'}>Brasil</MenuItem>
                <MenuItem value={'portugal'}>Portugal</MenuItem>
                <MenuItem value={'japao'}>Japão</MenuItem>

            </Select>
          </FormControl><br/><br/>
          
          <FormControl>
              <InputLabel labelId="viagem">Viagem</InputLabel>
              <Select
              labelId="viagem"
              onChange={handleInputChange}
              value={form.trip}
              name={'trip'}
              variant="filled"
              >
                {trip.map(item => {
                  return(
                  <MenuItem value={item}>{item.name}</MenuItem>
                  )
                })}
              </Select>
          </FormControl><br></br>
         <br></br> <Button variant={'contained'} color={'primary'} type={'submit'} >Enviar</Button>
        </form>
      </ContainerForm> 
      </ContainerHome>
    </div>
  )
}

export default ApplicationFormPage