import React, {useState} from 'react'
import TextField from '@material-ui/core/TextField'
import FormControl from '@material-ui/core/FormControl'

function ApplicationFormPage() {
  
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [applicationText, setApplicationText] = useState('')
  const [profession, setProfession] = useState('')
  const [country, setCountry] = useState('')
  const [trip, setTrip] = useState('')

  const handleChangeName = (event) => {
      setName(event.target.value)
  }
  const handleChangeAge = (event) => {
      setAge(event.target.value)
  }
  const handleChangeApplicationText = (event) => {
      setApplicationText(event.target.value)
  }
  const handleChangeProfession = (event) => {
      setProfession(event.target.value)
  }  
  const handleChangeCountry = (event) => {
      setCountry(event.target.value)
  }
  const handleChangeTrip = (event) => {
      setTrip(event.target.value)
  }
   
  return (
    <div>
      <h1>ApplicationFormPage</h1>
      <FormControl>
        <TextField value={name} onChange={handleChangeName} label="Nome" variant="outlined" />
        <TextField value={age} onChange={handleChangeAge} label="Idade" variant="outlined" />
        <TextField value={applicationText} onChange={handleChangeApplicationText} label="Motivo" variant="outlined" />
        <TextField value={profession} onChange={handleChangeProfession} label="Profissão" variant="outlined" />
        <TextField value={country} onChange={handleChangeCountry} label="País" variant="outlined" />
        <TextField value={trip} onChange={handleChangeTrip} label="Viagem" variant="outlined" />
        <button>Enviar</button>
      </FormControl>
    </div>
  )
}

export default ApplicationFormPage