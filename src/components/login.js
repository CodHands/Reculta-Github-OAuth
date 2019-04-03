import React from 'react'
import '../index.css';
import {LOGIN_URI} from '../services';

const client_id = '5ba10e1ca1f1752bedf9';

const Login = () => {
    return (
      <div>
        <form className="login">
            <div className="center">
              <h1>RECULTHUB</h1>
              <a className="login-button" href={`${LOGIN_URI}authorize?client_id=${client_id}&scope=repo`}>Login with Github</a>
            </div>
          </form>
      </div>
    )
}

export default Login;
