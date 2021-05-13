import './App.css';
import Home from './Pages/Home';
import VaccinationPage from './Pages/Vaccination';
import Vaccinationbydistrict from './Components/vaccinationbydistrict';
import Districtpage from './Pages/district';
import Navbar from './Components/navbar';
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
    <Route exact path="/district">
    <Navbar/>
    <Vaccinationbydistrict/>
    </Route>
      </Switch></BrowserRouter>
    
    
    </>
  );
}

export default App;
