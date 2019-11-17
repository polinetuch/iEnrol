// import required dependencies
import React, { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import './index.css';

//import components
import Signup from './components/sign-up';
import LoginForm from './components/login-form'
import Navbar from './components/navbar';
import TableRow from './components/newEnrollment/tableRow';
import EditEnrollment from './components/newEnrollment/editEnrollment';
import Home from './components/home';



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
    };

    this.getUser = this.getUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
  }

  componentDidMount() {
    this.getUser()
  };

  updateUser (userObject) {
    this.setState(userObject)
  };

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
  };

  render() {
    return (
      <div className="App">
   
        <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn}/>
        {/* greet user if logged in: */}
        {this.state.loggedIn &&
          <h3>Welcome, {this.state.username}!</h3>
        }
        {/* Routes to different components */}
        <Home />
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
};

export default App;
