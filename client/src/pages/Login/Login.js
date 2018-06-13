import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import { Button } from 'reactstrap';
import "./Login.css";
// import { Alert } from 'reactstrap';


class Login extends Component {
	constructor(props) {
		super(props)
		this.state = {
			username: '',
			password: '',
			redirectTo: null,
			loggedIn: true,
			alert: false
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
		console.log('handleSubmit')
		this.props.login(this.state.username, this.state.password)
		setTimeout(this.alertChange, 1200)
		// window.location = '/user'
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
							<label htmlFor="username">
								Username
							</label>
								<br />
							<input
								type="text"
								name="username"
								id="username"
								value={this.state.username}
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

