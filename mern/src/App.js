import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./components/Navbar"
import ExercisesList from "./components/ExercisesList"
import EditExercise from "./components/EditExercise"
import CreateUser from "./components/CreateUser"
import CreateExercise from "./components/CreateExercise"
function App() {
  return (
    <Router>
      <div className="">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ExercisesList}/>
          <Route path="/edit/:id" component={EditExercise}/>
          <Route path="/create" component={CreateExercise}/>
          <Route path="/user" component={CreateUser}/>
        </Switch>
      </div>
    </Router>
  )
}

export default App
