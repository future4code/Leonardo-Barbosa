import React from 'react'
import { useProtectPage } from '../Hooks/useProtectPage'

function TripDetailsPage() {
    useProtectPage()
  
    return (
      <div>
        <h1>TripDetailsPage</h1>
      </div>
  )
}

export default TripDetailsPage