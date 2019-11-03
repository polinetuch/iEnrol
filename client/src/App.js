import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
// Import components
import Signup from "./Component/signup";
import Login from "./Component/login";
import Navbar from "./Component/navbar";
import Home from "./Component/home";

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
  };

  componentDidMount() {
    this.getUser();
  };

  updateUser (userObject) {
    this.setState(userObject);
  };

  getUser() {
    axios.get("/user/").then(response => {
      console.log("Get user response: ");
      console.log(response.data);

      if (response.data.user) {
        console.log("Get user: There is a user saved in the server session: ");

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } 
      else {
        console.log("Get user: no user");
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    <div className="App">
      <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
      {this.state.loggedIn && <p>Welcome to iEnrol, {this.state.username}!</p>}
      
      <Route exact path="/" render={() => <Home/>} />

      <Route path="/login" render={()
      => <Login updateUser={this.updateUser} />} 
      />

      <Route path="/signup" render={() => <Signup/>} />
    </div>
  }
}

export default App;
