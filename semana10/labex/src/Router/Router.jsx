import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomePage from "../Components/HomePage"
import LoginPage from "../Components/LoginPage"
import ApplicationFormPage from "../Components/ApplicationFormPage"
import CreateTripPage from "../Components/CreateTripPage"
import ListTripsPage from "../Components/ListTripsPage"
import TripDetailsPage from "../Components/TripDetailsPage"

const Router = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
         <HomePage/>
        </Route>
        <Route exact path="/login">
         <LoginPage/>
        </Route>
        <Route exact path="/application-form">
         <ApplicationFormPage/>
        </Route>
        <Route exact path="/trips/create">
         <CreateTripPage/>
        </Route>
        <Route exact path="/trips/list">
         <ListTripsPage/>
        </Route>
        <Route exact path="/trips/details">
         <TripDetailsPage/>
        </Route>
      </Switch>    
    </BrowserRouter>
  )
}
export default Router