import React, { Component } from 'react'
import queryString from 'query-string';
import '../index.css'
import { Redirect } from "react-router-dom";

export default class RefreshRoute extends Component {

  render() {    
    const authCode = queryString.parse(this.props.location.search);    
    if(authCode.code) {
        return <Redirect to={{
            pathname: '/user',
            state: {code: authCode.code}
        }}/>  
    } else {
        return <Redirect to={{
            pathname: '/',
        }}/>
    }


    
  }
}
