import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
// import './asset/login-form.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class LoginForm extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null,
            isAdmin: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    };

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios.post('/user/login', {
            username: this.state.username,
            password: this.state.password
        }).then(response => {
            console.log('login response: ')
            console.log(response)
            
            if (response.status === 200) {
                // update App.js state
                this.props.updateUser({
                    loggedIn: true,
                    username: response.data.username, 
                    isAdmin: response.data.isAdmin,
                    uid: response.data.uid
                });
                // update the state to redirect to home
                this.setState({
                    redirectTo: '/'
                });
                }}).catch(error => {
                    this.setState({ showError: true });
                    console.log('login error: ')
                    console.log(error);
                })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className="auth-wrapper">
                    <div className="auth-inner">
                <form>
                <h3>Login</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" id="username"
						name="username"
						placeholder="Username"
						value={this.state.username}
						onChange={this.handleChange}  />
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
					<input type="password" className="form-control" name="password" placeholder="password"
					value={this.state.password}
					onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Submit</button>
               
                { this.state.showError ?  <div class="alert alert-danger" >
                <strong>Invalid username or password</strong>
                </div>  : null }          
            </form>
            </div>
            </div>
            
            )
        }
    }
}

export default LoginForm;