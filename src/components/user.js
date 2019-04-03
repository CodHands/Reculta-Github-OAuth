import React, { Component } from 'react'
import '../index.css'
import {BASE_URI} from '../services';

export default class User extends Component {

    constructor(props){
        super(props);
        this.state = {
            user: null
        }
    }

    componentDidMount(){    
        fetch(`${BASE_URI}user?access_token=${this.props.token}`)
        .then(response => response.json())
        .then(response => this.setState({
            user: response
        }))
    }

    render() {
    const {user} = this.state;    
    return (
        <div className="col-md-6 user-details">
            {
            user ? 
                (
                    <div className="text-center user">
                        <img src={user.avatar_url} className="img mb-2" alt="user-icon" />
                        <h3><b>{user.name}</b></h3>
                        <p>{user.login}</p>
                    </div>
                ) : null
            }
        </div>
    )
  }
}
