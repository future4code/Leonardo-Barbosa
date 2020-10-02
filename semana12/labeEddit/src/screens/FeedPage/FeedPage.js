import { Box, Button, Divider, Input, Text} from '@chakra-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useProtectPage } from '../../hooks/UseProtectPage'
import {TriangleUpIcon, TriangleDownIcon, ChatIcon} from '@chakra-ui/icons'
import { useHistory } from 'react-router-dom'
import { goToPost } from '../../router/GoToPages'

const FeedPage = () => {
  useProtectPage()  
  const history = useHistory()
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
        setPost(response.data.posts)
      }).catch(error => {})
  }

  const handlePostChange = (event) => {
    setNewPost(event.target.value)
  }

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const votePost = (vote, postId) => {
    const token = window.localStorage.getItem("token")
    const body = {
      direction: vote
    }
    axios
      .put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${postId}/vote`, body, {headers:{
        Authorization: token
      }}).then(reponse => {
        getAllPost()
      }).catch(error => {})
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
      }).catch(error =>{})
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
          <Box key={item.id} borderColor="blue.500" borderWidth="2px" borderRadius="sm" p="2" marginBottom={3} height={{
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
            <Box d="flex" justifyContent="center" >
              <Text as="button" onClick={() =>goToPost(history, item.id)} fontSize="lg" fontFamily="arial" align="center">{item.username}</Text> 
            </Box><Divider border="2px"/>
            <Text paddingTop="1" align="center">{item.title}</Text>
            <Text border='solid' borderColor="blue.100" paddingTop="1" h="100px" overflow="auto" align="center">{item.text}</Text>
            <Box d="flex" justifyContent="space-between">
              <Text ><Button variant="none" size="sm" onClick={() => votePost(1, item.id)} ><TriangleUpIcon/></Button>
              {item.votesCount} 
              <Button variant="none" size="sm" onClick={() => votePost(-1, item.id)} ><TriangleDownIcon/></Button></Text>
              <Text as="button" onClick={() =>goToPost(history, item.id)} ><ChatIcon/> {item.commentsCount} </Text>
            </Box>
          </Box>         
        )
      })}
    </Box>
  )
}

export default FeedPage
