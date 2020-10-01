import React from 'react'
import { useProtectPage } from '../../hooks/UseProtectPage'

const PostPage = () => {
  useProtectPage()
  return (
    <div>
      PostPage
    </div>
  )
}

export default PostPage
