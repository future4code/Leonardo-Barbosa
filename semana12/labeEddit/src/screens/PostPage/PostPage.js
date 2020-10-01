import React, { useEffect, useState } from 'react'
import { useProtectPage } from '../../hooks/UseProtectPage'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'


const PostPage = () => {
  useProtectPage()
  const history = useHistory()
  const {id} = useParams()
  const [getPost, setGetPost] = useState([])

  useEffect(() => {
    getpost()
  }, [])

  const getpost = () => {
    const token = window.localStorage.getItem("token")
    axios
      .get(`https://us-central1-labenu-apis.cloudfunctions.net/labEddit/posts/${id}`, {headers:{
        Authorization: token
      }}).then(response => {
        console.log(response.data.post)
      }).catch(error =>{
        console.log(error)
      })


  }





  return (
    <div>
      PostPage
    </div>
  )
}

export default PostPage
