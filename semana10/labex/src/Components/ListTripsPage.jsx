import React from 'react'
import useGetData from '../Hooks/UseRequestData'

function ListTripsPage() {
  const listTrips = useGetData(
    "https://us-central1-labenu-apis.cloudfunctions.net/labeX/leonardo-jackson/trips", [])

  return (
    <div>
    </div>
  )
}

export default ListTripsPage