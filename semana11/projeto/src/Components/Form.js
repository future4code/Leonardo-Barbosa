import axios from 'axios';
import React, {useEffect, useState} from 'react';
import styled from 'styled-components'
import { useForm } from '../Hooks/UseForm';

const FormContainer = styled.div`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SectionContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    height: 90vh;
`
const WeekContainer = styled.div`
    border: 1px dotted rgb(53, 53, 53);
    width: 14%;
    padding: 5px;
`

function Form() {
    const [taskLisst, setTaskList] = useState([])
    const { form, onChange, resetState } = useForm({
        text:"",
        day:""
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target
        onChange(name, value)
    }

    const handleSubmittion = (event) => {
        event.preventDefault()
        resetState()
      }

    const getTasks = () => {
        axios.get("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-leonardo")
             .then((response) => {
                setTaskList(response.data)
                console.log(response.data)
             })
    }

    useEffect(() => {
        getTasks()
      }, [])

    const AddTask = async () => {
       
        await axios.post("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-leonardo", form)
        getTasks()
    }

  return (
    <>
    
        <FormContainer>
        {getTasks}
            <form onSubmit={handleSubmittion}>
                    <label >Nova tarefa:</label>
                    <input type="text"
                     value={form.text}
                     name="text"
                     onChange={handleInputChange}
                     autocomplete="off"
                     required
                     />
                    <select value={form.day} name="day" onChange={handleInputChange}>
                        <option>-Escolha o dia-</option>
                        <option value="domingo">Domingo</option>
                        <option value="segunda">Segunda-feira</option>
                        <option value="terca">Terça-feira</option>
                        <option value="quarta">Quarta-feira</option>
                        <option value="quinta">Quinta-feira</option>
                        <option value="sexta">Sexta-feira</option>
                        <option value="sabado">Sábado</option>
                    </select>
                    <button onClick={AddTask}>Criar tarefa</button>
                </form>
        </FormContainer>      
        <SectionContainer >
            <WeekContainer>
                <h3>Domingo</h3>
                <div id="domingo"></div>
            </WeekContainer>

            <WeekContainer>
                <h3>Segunda-feira</h3>
                <div id="segunda"></div>
            </WeekContainer>

            <WeekContainer>
                <h3>Terça-feira</h3>
                <div id="terca"></div>
            </WeekContainer>
        
            <WeekContainer>
                <h3>Quarta-feira</h3>
                <div id="quarta"></div>
            </WeekContainer>
        
            <WeekContainer>
                <h3>Quinta-feira</h3>
                <div id="quinta"></div>
            </WeekContainer>

            <WeekContainer>                    
                <h3>Sexta-feira</h3>               
                <div id="sexta"></div>
            </WeekContainer>

            <WeekContainer>
                <h3>Sábado</h3>
                <div id="sabado"></div>
            </WeekContainer>
        </SectionContainer>
    </>
  );
}

export default Form;