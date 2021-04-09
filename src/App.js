// import React, {useState} from 'react';
//import ReactDOM from 'react-dom';
// import logo from './logo.svg';
// import NameForm from './NameForm';

import React, { Component } from 'react';
import { render } from 'react-dom';
import 'foundation-sites/dist/css/foundation.min.css';

// import Header from './Header';

import Home from './pages/Home.js';
import Rules from './pages/Rules.js';
import Instructions from './pages/Instructions.js';
import PrivacyPolicy from './pages/PrivacyPolicy.js';
import TermsConditions from './pages/TermsConditions';
import RulesGame from './pages/Rules-game.js';
import Form from './pages/SignupForm.js';
import Thanks from './pages/Thanks.js';
import Game from './pages/Game.js';
import Failure from './pages/Failure.js';
import Success from './pages/Success.js';
import Quiz from './pages/Quiz.js';
// import Modal from './components/Modal.js';

// import './App.css';
import { //curly braces coz multiple things to import
  HashRouter as Router,//determine url//router is the nickname of browserrouter
  Switch,//something look in between router and tell us where to go 
  Route, //indvisual rout in router
  //Link // for Navigation 
} from "react-router-dom";
//when we don't write ./ before the location of import that means it live in node_modules 


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
        <Route path="/privacy-policy" children={<PrivacyPolicy/>}/>
        <Route path="/terms-conditions" children={<TermsConditions/>}/>
        <Route path="/rules-game" children={<RulesGame/>}/>
        <Route path="/game" children={<Game/>}/>
        <Route path="/success" children={<Success/>}/>
        <Route path="/failure" children={<Failure/>}/>
        <Route path="/quiz" children={<Quiz/>}/>
      </Switch>
    </div>
  </Router>
  );
}
}

export default App;
