import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link, Router } from 'react-router-dom';
import './index.css';
// components
import Signup from './components/sign-up';
import LoginForm from './components/login-form'
import Navbar from './components/navbar';
import Home from './components/home';
import Admin from './components/admin';
import AddEnrollment from './components/newEnrollment/addEnrollment.js';
import TableRow from './components/newEnrollment/tableRow';
import EditEnrollment from './components/newEnrollment/editEnrollment';
// import Index from './components/newEnrollment/index';
// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      isAdmin: false,
      name: "",
      age: "",
      gender: "",
      mother: "",
      father: "",
      contact: "",
      address: "",
      uid: null
    }

    this.getUser = this.getUser.bind(this)
    this.updateUser = this.updateUser.bind(this);

  //   this.onChangeStudentName = this.onChangeStudentName.bind(this);
  //   this.onChangeAge = this.onChangeAge.bind(this);
  //   this.onChangeGender = this.onChangeGender.bind(this);
  //   this.onChangeMotherName = this.onChangeMotherName.bind(this);
  //   this.onChangeFatherName = this.onChangeFatherName.bind(this);
  //   this.onChangeContact = this.onChangeContact.bind(this);
  //   this.onChangeAddress = this.onChangeAddress.bind(this);
  //   this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username,
          isAdmin: response.data.user.isAdmin,
          uid: response.data.user._id
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
          component= { (props) => {
            return (this.state.loggedIn ? 
                  <TableRow isLoggedIn={this.state.loggedIn} isAdmin={this.state.isAdmin} username={this.state.username} uid={this.state.uid} />
                  : <LoginForm updateUser={this.updateUser} />
                  )
          } }>
        </Route>
        <Route
          path="/login"
          render={() =>
            <LoginForm
              updateUser={this.updateUser}
            />}
        />
        <Route path="/enrollment/add" render={() => <EditEnrollment/> }></Route>
        <Route
          path="/signup"
          render={() =>
            <Signup/>}
        />
        <Route path="/enrollment/edit" render={() => <EditEnrollment/>}/>
      </div>
    );
  } 
}

export default App;
