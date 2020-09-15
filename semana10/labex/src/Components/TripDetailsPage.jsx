import React from 'react'
import useGetData from '../Hooks/UseRequestData'

function TripDetailsPage() {
  const tripDetails = useGetData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-jackson/trip/:id", [])
  
    return (
      <div>
      </div>
  )
}

export default TripDetailsPage