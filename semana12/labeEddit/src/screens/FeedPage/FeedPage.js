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
    <div>
      {post.map(item => {
        return (
          <div>
            <p>{item.username}</p>
            <p>{item.text}</p>
            <p>{item.votesCount}</p>

          </div>         
        )
      })}
    </div>
  )
}

export default FeedPage
