import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import {HomePage, LoginPage, ApplicationFormPage, CreateTripPage, ListTripsPAge, TripDetailsPage} from "../Components/HomePage"

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
        <Route exact path="/trips/create ">
         <CreateTripPage/>
        </Route>
        <Route exact path="/trips/list ">
         <ListTripsPAge/>
        </Route>
        <Route exact path="/trips/details">
         <TripDetailsPage/>
        </Route>
      </Switch>    
    </BrowserRouter>
  )
}