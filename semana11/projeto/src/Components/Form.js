import axios from 'axios'
import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { useForm } from '../Hooks/UseForm'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/core"
import { Button, Stack } from "@chakra-ui/core"
import { Select, Heading } from "@chakra-ui/core"
import { Input, Text } from "@chakra-ui/core"
import {DeleteIcon} from '@chakra-ui/icons'
import { ListItem, UnorderedList } from "@chakra-ui/core"

const FormContainer = styled.div`
    height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

function Form() {
    const [taskList, setTaskList] = useState([])
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
             })
    }

    useEffect(() => {
        getTasks()
      }, [])

    const AddTask = async () => {
        if (form.text && form.day !== ""){
        await axios.post("https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-leonardo", form)
        getTasks()
    }}

    const deleteTask = (taskId) => {
        axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-jackson-leonardo/${taskId}`)
            .then(response => {
                getTasks()
            }).catch(error => {})
    }

    const tasksDay = (day) => {
        const renderDays = taskList.map((task) => {
            if (task.day === day) {
                return (
                    <UnorderedList >
                        <ListItem key={task.id}>
                            {task.text}{" "}
                            <button  onClick={() => deleteTask(task.id)}><DeleteIcon /> </button >
                        </ListItem>
                    </UnorderedList >
                )
            }
        })
        return renderDays
    }

  return (
    <Stack bgColor="#F7FAFC" width="100vw" height="100vh">
        <FormContainer>
            <form onSubmit={handleSubmittion}>
                    <Stack direction="row" >
                        <Input type="text"
                        value={form.text}
                        name="text"
                        onChange={handleInputChange}
                        autocomplete="off"
                        size="sm"
                        placeholder="Nova tarefa"
                        required
                        />
                        <Select required size="sm" value={form.day} name="day" onChange={handleInputChange} placeholder="Escolha o dia">
                            <option value="domingo">Domingo</option>
                            <option value="segunda">Segunda-feira</option>
                            <option value="terca">Terça-feira</option>
                            <option value="quarta">Quarta-feira</option>
                            <option value="quinta">Quinta-feira</option>
                            <option value="sexta">Sexta-feira</option>
                            <option value="sabado">Sábado</option>
                        </Select>
                        <Button width="200px" colorScheme="teal" type="submit" size="sm" onClick={AddTask}>Criar tarefa</Button>
                        
                    </Stack>
                </form>
        </FormContainer>
        <div >
            <Tabs isFitted variant="enclosed" colorScheme="teal">
                <TabList mb="1em">
                    <Tab><Heading size="lg">Domingo</Heading></Tab>
                    <Tab><Heading size="lg">Segunda</Heading></Tab>
                    <Tab><Heading size="lg">Terça</Heading></Tab>
                    <Tab><Heading size="lg">Quarta</Heading></Tab>
                    <Tab><Heading size="lg">Quinta</Heading></Tab>
                    <Tab><Heading size="lg">Sexta</Heading></Tab>
                    <Tab><Heading size="lg">Sábado</Heading></Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <Text as="samp" fontSize="20px">{tasksDay("domingo")}</Text>
                    </TabPanel>
                    <TabPanel>
                        <Text as="samp" fontSize="20px">{tasksDay("segunda")}</Text>
                    </TabPanel>
                    <TabPanel>
                        <Text as="samp" fontSize="20px">{tasksDay("terca")}</Text>
                    </TabPanel>
                    <TabPanel>
                        <Text as="samp" fontSize="20px">{tasksDay("quarta")}</Text>
                    </TabPanel>
                    <TabPanel>
                        <Text as="samp" fontSize="20px">{tasksDay("quinta")}</Text>
                    </TabPanel>
                    <TabPanel>
                        <Text as="samp" fontSize="20px">{tasksDay("sexta")}</Text>
                    </TabPanel>
                    <TabPanel>
                        <Text as="samp" fontSize="20px">{tasksDay("sabado")}</Text>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    </Stack >
  );
}

export default Form;