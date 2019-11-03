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
            console.log("Logout error occurr");
        })
    }
}