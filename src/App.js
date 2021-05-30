import './App.css';
import Home from './Pages/Home';
import VaccinationPage from './Pages/Vaccination';
import Navbar from './Components/navbar';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useState } from 'react';
function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
    <Route exact path="/">
    <Home/>
    </Route>
    <Route exact path="/vaccination">
    <VaccinationPage/>
    </Route>
      </Switch></BrowserRouter>
    
    
    </>
  );
}

export default App;
