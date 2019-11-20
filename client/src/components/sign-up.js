import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {
	constructor() {
		super()
		this.state = {
			username: '',
			password: '',
			confirmPassword: '',

		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	};

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	};

	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/user/', {
			username: this.state.username,
			password: this.state.password
		}).then(response => {
			console.log(response)
				
			if (!response.data.errmsg) {
				console.log('successful signup')
				this.setState({ //redirect to login page
				redirectTo: 'enrollment/login'
				})
			}
			else {
					console.log('username already taken')
				}}).catch(error => {
					console.log('signup error: ')
					console.log(error)
				})
	};

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
					<h2>Welcome to iEnrol</h2>
                    <p>Have you ever been so busy and come to realize that your child’s enrollment form is due tomorrow?</p> 
					<p>Do you ever need to step out of your office chair to try and call the admin so you can change your contact details and address?</p> 
					<p>Or to find out about your loved one’s day being their first time at an educational setting?</p>
					<p>The anticipation is over! I have developed a solution that can save you time from taking annual leave or leave work early so you can have a chat with one of the admins at your child’s school or kinder.</p>
					 <p>Sign up now to be apart of the iEnrol team and never again miss out on any changes of your student or child's enrollment information.</p>
					</div>
					<div className="col-lg-6">
					<div className="auth-wrapper">
				<div className="auth-inner">
			<form>
                <h4>Sign Up</h4>

				<div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control" id="username"
						name="username"
						placeholder="Username"
						value={this.state.username}
						onChange={this.handleChange}  />
                </div>

				<div className="form-group">
                    <label htmlFor="password">Password</label>
					<input type="password" className="form-control" name="password" placeholder="password"
					value={this.state.password}
					onChange={this.handleChange} />
                </div>

				<button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Sign Up</button>
            </form>
			</div>
			</div>
					</div>
				</div>
			</div>
			
		)
	}
}

export default Signup;
