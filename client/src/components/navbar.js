import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
import { Route, Link } from 'react-router-dom';
// import logo from '../logo.svg';
import '../App.css';
import axios from 'axios';
import AddEnrollment from './newEnrollment/addEnrollment.js';

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.logout = this.logout.bind(this)
        // this.AddEnrollment = this.AddEnrollment.bind(this)
        
    };

    logout(event) {
        event.preventDefault()
        console.log('logging out')
        axios.post('/user/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null,
              isAdmin: false
            })
          }
        }).catch(error => {
            console.log('Logout error')
        })
      };

    render() {
        const loggedIn = this.props.loggedIn;
        console.log('navbar render, props: ')
        console.log(this.props);
        
        return (
            <div>
                <nav className="nav bar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand" href="#">iEnrol</a>
                    <button className="navbar-toggler" 
                        type="button" 
                        data-toggle="collapse" 
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                    </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                {loggedIn ? (
                                <li className="nav-item active">
                                    <a><Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                        <span className="sr-only">Logout</span>
                                    </Link>
                                    </a>
                                </li>
                                ) : (
                                    <>
                                <li className="nav-item">
                                    <a>
                                    <Link to="/" className="btn btn-link text-secondary">
                                    <span className="text-secondary">Home</span>
                                </Link>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a>
                                        <Link to="/login" className="btn btn-link text-secondary">
                                            <span className="text-secondary">Login</span>
                                        </Link>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a>
                                    <Link to="/signup" className="btn btn-link text-secondary">
                                    <span className="text-secondary">Sign up</span>
				                    </Link>
                                    </a>
                                </li>
                                </>
                                )}
                            </ul>
                            </div>
                    </nav>
                    </div>
                        
        );

    }
}

export default Navbar;