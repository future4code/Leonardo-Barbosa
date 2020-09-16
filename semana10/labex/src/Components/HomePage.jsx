import React from 'react'
import { useHistory } from 'react-router-dom'
import {goToLoginPage} from '../Router/GoToPages'
import {goToApplicationFormPage} from '../Router/GoToPages'


function HomePage() {
  const history = useHistory()

  return (
    <div>
      <h1>HomePage</h1>
      <button onClick={() => goToLoginPage(history)}>Login</button>
      <button onClick={() => goToApplicationFormPage(history)}>Formulário</button>
    </div>
  )
}

export default HomePage