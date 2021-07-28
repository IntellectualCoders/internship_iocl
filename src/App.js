import React,{useContext, useEffect, useState} from "react";
import { AuthContext}  from "./context/authContext";
import "./App.css";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import UserProfile from "./Pages/Profile";
import Doclist from "./Pages/Doclist";
import Menu from "./Pages/Menu";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Appointments from "./Pages/Appointments";
import VacinationDrive from "./Pages/VacinationDrive";
import Prescription from "./Pages/Prescription";
import Admin from "./Pages/admin";

function App() {
  
const { currentUser } = useContext(AuthContext);
  return (
    <div style={{ backgroundColor: "#EAE9FA" }}>
      
      
          {currentUser !== null ? 
            <BrowserRouter>
            <Switch>
            <Route exact path="/">
              <Menu />
            </Route>
          <Route exact path="/home">
            <Menu />
          </Route>
          <Route exact path="/appointments">
            <Appointments />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route exact path="/vaccination-drive">
            <VacinationDrive />
          </Route>
          <Route exact path="/prescription">
            <Prescription />
          </Route>
          <Route exact path="/userProfile">
            <UserProfile />
          </Route>
          <Route exact path="/doclist">
            <Doclist />
          </Route>
          <Route exact path="/covidLeads">
              <Home />
            </Route>
            </Switch>
          </BrowserRouter>
          : <BrowserRouter>
          <Switch>
          <Route exact path="/covidLeads">
              <Home />
            </Route>
            <Route path="/">
              <Login />
            </Route>
            </Switch>
          </BrowserRouter>}
          
        
      
    </div>
  );
}

export default App;
