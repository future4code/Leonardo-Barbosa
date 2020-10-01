import { Box, Button, Divider, Input, Text} from '@chakra-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useProtectPage } from '../../hooks/UseProtectPage'

const FeedPage = () => {
  useProtectPage()
  const [post, setPost] = useState([])
  const [newPost, setNewPost] = useState("")
  const [title, setTitle] = useState("")

  useEffect(() => {
    getAllPost()
  }, [])

  const getAllPost = () => {
    const token = window.localStorage.getItem("token")
    axios
      .get("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts", {headers:{
        Authorization: token
      }}).then(response => {
        console.log(response.data.posts)
        setPost(response.data.posts)
      })
      .catch(error => {})
  }
  const handlePostChange = (event) => {
    setNewPost(event.target.value)
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const createPost = () => {
    const token = window.localStorage.getItem("token")
    const body = {
      text:newPost,
      title:title
    }
    axios
      .post("https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts", body, {headers:{
        Authorization: token
      }}).then(response =>{
        getAllPost()
        setTitle("")
        setNewPost("")
        console.log(response)
      })
         .catch(error =>{ 
          console.log(error)
         })
  }



  return (
    <Box d="flex" flexDirection="column" alignItems="center" >
      <Box  borderColor="blue.500" borderWidth="2px"
            borderRadius="sm" p="2" marginBottom={3}
            d="flex" flexDirection="column" alignItems="center"
            height={{
              base: "95%",
              md: "50%",
              xl: "35%",
            }}
            width={[
              "95%",
              "50%", 
              "35%", 
              "25%", 
            ]}>
          <Input borderColor="blue.200" value={title} onChange={handleTitleChange} placeholder="Digite o Título do Post" size="md" />
          <Input marginTop="1" borderColor="blue.200" value={newPost} onChange={handlePostChange} placeholder="Digite seu post" size="md" />
          <Button marginTop="2" onClick={() => createPost()} colorScheme="blue" size="md">Postar</Button>
      </Box>
      {post.map(item => {
        return (
          
          <Box borderColor="blue.500" borderWidth="2px" borderRadius="sm" p="2" marginBottom={3} height={{
            base: "95%",
            md: "50%",
            xl: "35%",
          }}
          width={[
            "95%",
            "50%", 
            "35%", 
            "25%", 
          ]}>
            
            <Text fontSize="lg" fontFamily="arial" textAlign="center">{item.username}</Text> <Divider border="2px"/>
            <Text paddingTop="2" align="center">{item.title}</Text>
            <Text border='solid' borderColor="blue.100" paddingTop="1" h="100px" overflow="auto" align="center">{item.text}</Text>
            <Text >{item.votesCount}</Text>
            
          </Box>         
        )
      })}
    </Box>
  )
}

export default FeedPage
