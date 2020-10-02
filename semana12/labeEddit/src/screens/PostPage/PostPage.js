import React, { useEffect, useState } from 'react'
import { useProtectPage } from '../../hooks/UseProtectPage'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { Box, Text, Button, Input, Divider } from '@chakra-ui/core'
import {TriangleUpIcon, TriangleDownIcon, ChatIcon, CheckCircleIcon } from '@chakra-ui/icons'
import { goToFeed } from '../../router/GoToPages'


const PostPage = () => {
  useProtectPage()
  const history = useHistory()
  const {id} = useParams()
  const [postDetail, setPostDetail] = useState({comments:[]})
  const [newComment, setNewComment] = useState("")

  useEffect(() => {
    getPost()
  }, [])

  const getPost = () => {
    const token = window.localStorage.getItem("token")
    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}`, {headers:{
        Authorization: token
      }}).then(response => {
        setPostDetail(response.data.post)
      }).catch(error =>{})
  }

  const createComment = () => {
    const token = window.localStorage.getItem("token")
    const body = {
      text:newComment
    }
    axios
      .post(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}/comment`, body, {headers:{
        Authorization: token
      }}).then(response => {
        getPost()
        setNewComment("")
      }).catch(error => {})
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
      }).catch(error => {
      })
  }

  const handleCommentChange = (event) => {
    setNewComment(event.target.value)
  }

  return (
    <>
    <Box d="flex" flexDirection="column" alignItems="center" >
    <Button marginBottom="5" onClick={() =>goToFeed(history)}  variant="link" size="lg">Voltar para Feed</Button>
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
              <Text fontSize="lg" fontFamily="arial" align="center">{postDetail.username}</Text> 
            </Box><Divider border="2px"/>
            <Text paddingTop="1" align="center">{postDetail.title}</Text>
            <Text border='solid' borderColor="blue.100" paddingTop="1" h="100px" overflow="auto" align="center">{postDetail.text}</Text>
            <Box d="flex" justifyContent="space-between">
              <Text ><CheckCircleIcon/> {postDetail.votesCount}</Text>
              <Text> <ChatIcon/> {postDetail.commentsCount} </Text>
            </Box>
          </Box>
     
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
          <Input value={newComment} onChange={handleCommentChange} marginTop="1" borderColor="blue.200" placeholder="Escreva seu comentário" size="md" />
          <Button onClick={() => createComment()}  marginTop="2" colorScheme="blue" size="md">Comentar</Button>
      </Box>
      {postDetail.comments.map(item => {
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
              <Text fontSize="lg" fontFamily="arial" align="center">{item.username}</Text> 
          </Box>
          <Text border='solid' borderColor="blue.100" paddingTop="1" h="100px" overflow="auto" align="center">{item.text}</Text>
          <Box d="flex" justifyContent="space-between">
              <Text ><Button variant="none" size="sm" onClick={() => votePost(1, item.id)} ><TriangleUpIcon/></Button>
              {item.votesCount} 
              <Button variant="none" size="sm" onClick={() => votePost(-1, item.id)} ><TriangleDownIcon/></Button></Text>
            </Box>
          </Box>
        )
      })}

  </Box>
  </>
  )
}

export default PostPage
