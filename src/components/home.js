import React, { Component } from 'react'
import '../index.css'
import Repos from './repos';
import User from './user';
import {BASE_URI, CORS_URI,LOGIN_URI} from '../services';
import { Redirect } from "react-router-dom";

const client_secret = "abe3d027b956add5f9343e0846594f98783af749";
const client_id = '5ba10e1ca1f1752bedf9';

export default class Home extends Component {

  constructor(props){
      super(props);
      this.state = {
          access_token: null,
          apiSuccess: true
      }
  }

  componentDidMount(){
      var obj = {  
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
      }
      }
      fetch(`${CORS_URI}${LOGIN_URI}access_token?client_id=${client_id}&client_secret=${client_secret}&code=${this.props.location.state.code}&scope=repo`, obj)
      .then(res => res.json())
      .then(res => {
        if(res.access_token){
          this.setState({
            access_token: res.access_token
          },() => {
            this.fetchRepositories();
          })
        } else {
          return <Redirect to={{
              pathname: '/',
          }}/>
        }
      })
  }


  fetchRepositories = () => {
    fetch(`${BASE_URI}user/repos?access_token=${this.state.access_token}`)
    .then(response => response.json())
    .then(response => this.setState({
      repos: response
    }))
  }

  render() {        
      return (
        <div>
        {
          this.state.access_token ? (<div>
            <div className="container">
                <div className="row">
                  <User token={this.state.access_token}/>
                  <Repos token={this.state.access_token} repos={this.state.repos}/>
                </div>
              </div>
          </div>) : <img src="/images/loader.gif" alt="loader" className="loader"/> 
        }
        </div>
      )
  }
}
