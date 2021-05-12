import './App.css';
import Navbar from './Components/navbar';
import CenteredGrid from './Components/main';
import Vaccination from './Components/vaccination';
import { BrowserRouter, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
    <BrowserRouter>
    <Switch>
    <Route exact path="/">
    <Navbar />
    <CenteredGrid />
    </Route>
    <Route exact path="/vaccination">
    <Navbar />
    <Vaccination/>
    </Route>
      </Switch></BrowserRouter>
    
    
    </>
  );
}

export default App;
