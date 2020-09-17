import React  from 'react'
import TextField from '@material-ui/core/TextField'
import useForm from '../Hooks/useForm'


function ApplicationFormPage() {
  const {form, onChange, resetState}  = useForm({
    name:"",
    age:"",
    applicationText:"",
    profession:"",
    country:"",
    trip:""
  })

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
      <h1>ApplicationFormPage</h1>
      <form onSubmit={handleSubmittion}>
        <TextField name="name" value={form.name} onChange={handleInputChange} label="Nome" variant="outlined" required />
        <TextField name="age" type="number" value={form.age} onChange={handleInputChange} label="Idade" variant="outlined" required />
        <TextField name="applicationText" value={form.applicationText} onChange={handleInputChange} label="Motivo" variant="outlined" required/>
        <TextField name="profession" value={form.profession} onChange={handleInputChange} label="Profissão" variant="outlined" required/>
        <TextField name="country" value={form.country} onChange={handleInputChange} label="País" variant="outlined" required/>
        <TextField name="trip" value={form.trip} onChange={handleInputChange} label="Viagem" variant="outlined" required/>
        <button variant="contained" >Enviar</button>
      </form>
    </div>
  )
}

export default ApplicationFormPage