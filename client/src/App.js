import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link, Router } from 'react-router-dom';
// components
import Signup from './components/sign-up';
import LoginForm from './components/login-form'
import Navbar from './components/navbar';
import Home from './components/home';
// import Admin from './components/admin';
import addEnrollment from './components/newEnrollment/addEnrollment';
// import editEnrollment from './components/newEnrollment/editEnrollment';
// import Index from './components/newEnrollment/index';
// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      isAdmin: true
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
   
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <p>Welcome, {this.state.username}!</p>
        }
        {/* Routes to different components */}
        <Route
          exact path="/"
          // passing isAdmin as prop in an arrow function
          component= { (props) => <Home isAdmin={this.state.isAdmin}/>  }>
        </Route>
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route path="/addEnrollment" render={() => <addEnrollment/> }></Route>
        <Route
          path="/signup"
          render={() =>
            <Signup/>}
        />
      </div>
    );
  } 
}

export default App;
