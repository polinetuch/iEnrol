import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { Route, Link } from "react-router-dom";
import logo from "../logo.svg";
// import "../App.css";
import axios from "axios";

class Navbar extends component {
    constructor() {
        super();
        this.logout = this.logout.bind(this);
    }

    logout(event) {
        event.preventDefault();
        console.log("Logging out");
        
        axios.post("/user/logout").then(response => {
            console.log(response.data);

            if (response.status === 200) {
                this.props.updateUser({
                    loggedIn: false,
                    username: null
                })
            }
        }).catch(error => {
            console.log("Logout error occurr" + error);
        })
    }

    render() {
        const loggedIn = this.props.loggedIn;
        console.log("navbar render, props: ");
        console.log(this.prop);

        return(
            <div>
                <header className="navbar App-header" id="nav-container">
                    <div className="col-4">
                        {loggedIn ? (
                            <section className="navbar-section">
                                <Link to="#" className="btn btn-link text-secondary" onClick={this.logout}>
                                    <span className="text-secondary">Logout</span>
                                </Link>
                            </section>
                        ) : (
                            <section className="navbar-section">
                                <Link to="/" className="btn btn-link text-secondary">
                                    <span className="text-secondary">Home</span>
                                </Link>
                                <Link to="/login" className="btn btn-link text-secondary">
                                    <span className="text-secondary">Sign Up</span>
                                </Link>
                            </section>
                        )}
                    </div>
                    <div className="col-4 col-mr-auto">
                        <div id="top-filler">
                            <img src={logo} className="App-logo" alt="logo" />
                            <h1 className="App-title">iEnrol</h1>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Navbar;