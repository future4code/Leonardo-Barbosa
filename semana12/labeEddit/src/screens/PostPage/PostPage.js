import React, { useEffect, useState } from 'react'
import { useProtectPage } from '../../hooks/UseProtectPage'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { Box, Text, Button, Input } from '@chakra-ui/core'
import {TriangleUpIcon, TriangleDownIcon } from '@chakra-ui/icons'



const PostPage = () => {
  useProtectPage()
  const history = useHistory()
  const {id} = useParams()
  const [postDetail, setPostDetail] = useState([])

  useEffect(() => {
    getPost()
  }, [])

  const getPost = () => {
    const token = window.localStorage.getItem("token")
    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}`, {headers:{
        Authorization: token
      }}).then(response => {
        console.log(response.data.post.comments)
        setPostDetail(response.data.post.comments)
      }).catch(error =>{
        console.log(error)
      })
  }

  const votePost = (vote, commentId) => {
    const token = window.localStorage.getItem("token")
    const body = {
      direction: vote
    }
    axios
      .put(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/comment/${commentId}/vote`, body, {headers:{
        Authorization: token
      }}).then(reponse => {
        getPost()
        console.log(reponse)
      }).catch(error => {
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
          <Input marginTop="1" borderColor="blue.200" placeholder="Escreva seu comentário" size="md" />
          <Button marginTop="2" colorScheme="blue" size="md">Comentar</Button>
      </Box>
      {postDetail.map(item => {
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
          <Box d="flex" justifyContent="center" >
              <Text fontSize="lg" fontFamily="arial" align="center">{item.username}</Text> 
          </Box>
          <Text border='solid' borderColor="blue.100" paddingTop="1" h="100px" overflow="auto" align="center">{item.text}</Text>
          <Box d="flex" justifyContent="space-between">
              <Text ><Button variant="none" size="sm" onClick={() => votePost(+1, item.id)} ><TriangleUpIcon/></Button>
              {item.votesCount} 
              <Button variant="none" size="sm" onClick={() => votePost(-1, item.id)} ><TriangleDownIcon/></Button></Text>
            </Box>
          </Box>
        )
      })}

  </Box>
  )
}

export default PostPage
