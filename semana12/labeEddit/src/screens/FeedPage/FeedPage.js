import { Box, Divider, Text} from '@chakra-ui/core'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const FeedPage = () => {
  const [post, setPost] = useState([])

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



  return (
    <Box d="flex" flexDirection="column" alignItems="center" >
      {post.map(item => {
        return (
          <Box borderWidth="2px" borderRadius="sm" p="2" marginBottom={3} height={{
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
            <p align="center">{item.text}</p><Divider border="2px"/>
            <Text >{item.votesCount}</Text>
            
          </Box>         
        )
      })}
    </Box>
  )
}

export default FeedPage
