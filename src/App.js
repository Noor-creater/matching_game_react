
import React, { Component } from 'react';

import Home from './Home';
import Rules from './Rules';
import Instructions from './Instructions';
import PrivacyPolicy from './PrivacyPolicy';
import Form from './SignupForm';
import Thanks from './Thanks';
import Game from './Game';

import './App.css';
import { 
  HashRouter as Router,
  Switch,
  Route, 
  Link 
} from "react-router-dom";

class App extends Component{

  render(){
  return (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" children={ <Home /> }/>
        <Route path="/thanks" children={<Thanks/>}/>
        <Route path="/form" children={<Form/>}/>
        <Route path="/rules" children={<Rules/>}/>
        <Route path="/instructions" children={<Instructions/>}/>
        <Route path="/privacyPolicy" children={<PrivacyPolicy/>}/>
        <Route path="/game" children={<Game/>}/>
      </Switch>
    </div>
  </Router>
  );
}
}

export default App;
