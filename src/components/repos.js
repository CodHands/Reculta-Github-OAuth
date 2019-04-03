import React, { Component } from 'react'
import '../index.css'
import {BASE_URI,CORS_URI} from '../services';

export default class Repos extends Component {

  constructor(props){
      super(props);
  }

  starRepos = (repo,owner,name) => {
    var obj = {  
      method: 'PUT',
      headers: {
          'Content-Length': '0'
      }
      }
      fetch(`${CORS_URI}${BASE_URI}user/starred/${owner}/${name}?access_token=${this.props.token}`, obj)
      .then(() => this.callSnackbar(`${name} has been starred.`))
  }

  callSnackbar(message){
    var x = document.getElementById("snackbar");
    x.innerHTML = message;
    x.className = "show";
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

  unStarRepos = (repo,owner,name) => {
    var obj = {  
      method: 'DELETE',
      headers: {
          'Content-Length': '0'
      }
      }
      fetch(`${CORS_URI}${BASE_URI}user/starred/${owner}/${name}?access_token=${this.props.token}`, obj)
      .then(() => this.callSnackbar(`${name} has been unstarred.`))
  }
  
  render() {  
    return (
      <div className="col-md-6">
      {
        this.props.repos ? (
          <div className="repo-container">
                {this.props.repos.map((repo,index) => {
                    return <div className="repositories mb-4" key={index}>
                              <button className="gh-btn" id="gh-btn" onClick={() => this.unStarRepos(repo,repo.owner.login,repo.name)}>
                                <span className="gh-ico" aria-hidden="true"></span>
                                <span className="gh-text" id="gh-text">Unstar</span>
                              </button>
                              <button className="gh-btn mr-2" id="gh-btn" onClick={() => this.starRepos(repo,repo.owner.login,repo.name)}>
                                <span className="gh-ico" aria-hidden="true"></span>
                                <span className="gh-text" id="gh-text">Star</span>
                              </button>
                              <h4>{repo.name}</h4>
                              <p className="mb-1">{repo.description}</p>
                              {repo.language ? <span className="repo-badge">{repo.language}</span> : null}
                            </div>
                  })}
          </div>
        ) : null
      }
      <div id="snackbar"></div>
      </div>
    )
  }
}
