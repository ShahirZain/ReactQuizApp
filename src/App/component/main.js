import React, { Component } from 'react';
import Login from './login';
import Userform from './TestToBeGiven';
import TestKey from './testKey';
import TestToBeGiven from './TestToBeGiven'
import TestQuesJS1 from './testQuesJS1'

import {Switch,Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/"  component={Login}/>
          <Route exact path="/TestToBeGiven" component={TestToBeGiven}/>
          <Route exact path="/TestToBeGiven/TestKey" component={TestKey}/>
          <Route exact path="/TestToBeGiven/TestKey/TestQuesJS1" component={TestQuesJS1}/>
        </Switch>
        </div>
    );
  }
}

export default App;
