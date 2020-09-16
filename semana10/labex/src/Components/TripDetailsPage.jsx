import React from 'react'
import useGetData from '../Hooks/UseRequestData'
import { useProtectPage } from '../Hooks/useProtectPage'

function TripDetailsPage() {
    useProtectPage()
  
  // const tripDetails = useGetData(
  //   "https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-jackson/trip/:id", [])
  
    return (
      <div>
        <h1>TripDetailsPage</h1>
      </div>
  )
}

export default TripDetailsPage