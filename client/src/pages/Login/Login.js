import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import { Button } from 'reactstrap';
import "./Login.css";
import axios from 'axios';
// import { Alert } from 'reactstrap';


class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			email: '',
			password: '',
			redirectTo: null,
			loggedIn: true,
			alert: false,
			user: null
		}
		// this.googleSignin = this.googleSignin.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		console.log(this.props)
		event.preventDefault()
		this._login(this.state.email, this.state.password)
		setTimeout(this.alertChange, 1200)
		// window.location = '/user'
	}

	_login(username, password) {
	    console.log('login function being called correctly' + username + password)
	    axios
	      .post('/auth/login', {
	        username,
	        password
	      })
	      .then(response => {
	        console.log(response)
	        if (response.status === 200) {
	          // update the state
	          this.setState({
	            loggedIn: true,
	            user: response.data.user
	          })
	          this.props.setUser(response.data.user)
	          console.log(response.data.user)
	          window.location = '/user/'
	        } else {
	          this.setState({loginError: true})
	        }
	      })
	}

	handleEnter(event) {
		if (event.keyCode === 13) {
			event.preventDefault()
			this.props._login(this.state.username, this.state.password)
			setTimeout(this.alertChange, 1200)
    	}
  	}

	alertChange = () => {
		this.setState({
			alert: true
		})
	}

	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		} else {
			return (
				<div>
					<div className="LoginForm">
						<form>
							<label htmlFor="email">
								Email Address
							</label>
								<br />
							<input
								type="text"
								name="email"
								id="email"
								value={this.state.email}
								onChange={this.handleChange}
								placeholder=". . ."
							/>
								<br />
								<br />
							<label htmlFor="password">
								Password
							</label>
								<br />
							<input
								type="password"
								name="password"
								id="password"
								value={this.state.password}
								onChange={this.handleChange}
								placeholder=". . ."
								onKeyPress={this.handleTest}
							/>
								<br />
								<br />
						</form>
					</div>
					<span className="buttonContainer">
						<Button id="loginSubmit-button" onClick={this.handleSubmit}>Login</Button>
					</span>
				</div>
			)
		}
	}
}

export default Login;

