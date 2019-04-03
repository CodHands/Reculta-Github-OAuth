import React, { Component } from 'react';
import Home from '../src/components/home';
import Login from '../src/components/login';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Login}/>
          <Route path="/user" component={Home}/>
          {/* <Route exact path="/user/activity" component={}/> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
