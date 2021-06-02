import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Nav from '../Nav/Nav'
import Game from '../Game/Game'
import Home from '../Home/Home'

function App() {
  return (
  <BrowserRouter>
  <Nav/>
    <Switch>
    <Route exact path="/">
      <Home/>
    </Route>

    <Route path="/Game">
      <Game />
    </Route>

  </Switch>
  </BrowserRouter>)
}

export default App;
