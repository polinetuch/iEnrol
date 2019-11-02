import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    };
    handleSubmit(event) {
        console.log("sign-up handleSubmit, username: ");
        console.log(this.state.username);
        event.preventDefault();
    }
}

render() {
    return (
        <div className="SignupForm">
            <h4>Register Now</h4>
            <form className="form-horizontal">
                <div className="form-group">
                    <div className="col1 col-ml-auto">
                        <label className="form-label" htmlFor="username">Username</label>
                    </div>
                    <div className="col-3 col-mr-auto">
                        <input className="form-input" 
                            type="text" 
                            id="username" 
                            placeholder="username" 
                            value={this.state.username} 
                            onChange={this.handleChange} 
                        />
                    </div>
                </div>
            </form>
        </div>
    )
}
