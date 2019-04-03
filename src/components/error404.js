import React, {Component} from 'react';
import './../index.css';

class Error404 extends Component {
    render() {
        return (
            <div className="error-container">
                <div className="row h-100">
                    <div className="col-sm-12">
                        <img src="/images/error-404.png" alt="404 page"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Error404;
