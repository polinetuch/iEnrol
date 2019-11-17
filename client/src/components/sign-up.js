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
				redirectTo: '/login'
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
                {/* <div className="form-group">
                    <label className="custom-control-label" htmlFor="username">Username</label>
                    <input className="form-input"
						type="text"
						id="username"
						name="username"
						placeholder="Username"
						value={this.state.username}
						onChange={this.handleChange} 
					/>
                </div> */}

				<div className="form-group">
                    <label>Password</label>
					<input type="text" className="form-control" name="password" placeholder="password"
					value={this.state.password}
					onChange={this.handleChange} />
                </div>

                {/* <div className="form-group">
                    <label className="custom-control-label" htmlFor="password">Password</label>
                    <input 
						className="form-input"
						placeholder="password"
						type="password"
						name="password"
						value={this.state.password}
						onChange={this.handleChange}
					/>
                </div> */}
				<button type="submit" className="btn btn-primary btn-block" onClick={this.handleSubmit}>Sign Up</button>
            </form>
			</div>
			</div>
		)
	}
}

export default Signup;
