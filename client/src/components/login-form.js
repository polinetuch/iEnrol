import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

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
                    console.log('login error: ')
                    console.log(error);
                })
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <div className="logmod">
                    <div className="logmod__wrapper">
                        <span className="logmod__close">Close</span>
                        <div className="logmod__container">
                            <ul className="logmod__tabs">
                                <li data-tabtar="lgm-2">
                                    <a href="login">Login</a>
                                </li>
                                <li data-tabtar="lgm-2"> 
                                    <a href="singup">Sign Up</a>
                                </li>
                            </ul>
                            <div className="logmod__tab-wrapper">
                                <div className="logmod__tab lgm-1">
                                    <div className="logmod__heading">
                                        <span className="logmod__heading-subtitle">Enter your username and password</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default LoginForm;
