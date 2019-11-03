import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

class Login extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            redirectTo: null
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    };

    handleChange(event) {
        this.setState({ 
            [event.target.name]: event.target.value
        })
    };

    handleSubmit(event) {
        event.preventDefault();
        console.log("handleSubmit");

        axios.post("/user/login", {
            username: this.state.username,
            password: this.state.password
        }).then(response => {
            console.log("Login response: ");
            console.log(response)
        })
    }
}

