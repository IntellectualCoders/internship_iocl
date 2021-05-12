import './App.css';
import Home from './Pages/Home';
import VaccinationPage from './Pages/Vaccination';


import { BrowserRouter, Route, Switch } from "react-router-dom";
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
