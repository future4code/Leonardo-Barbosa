import React from 'react'
import { useProtectPage } from '../Hooks/useProtectPage'

function CreateTripPage() {
  useProtectPage()
  return (
    <div>
      <h1>CreateTripPage</h1>
    </div>
  )
}

export default CreateTripPage