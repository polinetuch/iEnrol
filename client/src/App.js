import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Signup from "./Component/Signup";

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
  }

  updateUser (userObject) {
    this.setState(userObject);
  }
}

export default App;
