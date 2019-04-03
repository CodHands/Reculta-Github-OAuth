import React, { Component } from 'react';
import Home from '../src/components/home';
import Login from '../src/components/login';
import Error404 from '../src/components/error404';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route exact path="/user" component={Home}/>
          <Route component={Error404}/>
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
