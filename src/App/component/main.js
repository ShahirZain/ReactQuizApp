import React, { Component } from 'react';
import Login from './login';
import Userform from './TestToBeGiven';
import TestKey from './testKey';
import TestToBeGiven from './TestToBeGiven'

import {Switch,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/"  component={Login}/>
          <Route path="/TestToBeGiven" component={TestToBeGiven}/>
        </Switch>
        </div>
    );
  }
}

export default App;
