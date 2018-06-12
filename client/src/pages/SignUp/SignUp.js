import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import { Button } from 'reactstrap';
import "./SignUp.css";
import { Alert } from 'reactstrap';
// import FormValidator from './FormValidator.js';

class SignupForm extends Component {
	constructor() {
		super()
		this.state = {
			first_name: '',
			middle_name: '',
			last_name: '',
			country: '',
			city: '',
			postal_code: '',
			phone_number: '',
			email: '',
			password: '',
			confirmPassword: '',
			redirectTo: null,
			alert: false,
			passwordBadMatch: false,
			emailError: false,
			submitClicked: false
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		if (this.state.password != this.state.confirmPassword) {
			this.setState({passwordBadMatch: true})
		} else {
			this.setState({passwordBadMatch: false})
		}
		if (!this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
			this.setState({emailError: true})
			console.log("Please enter a valid email address")
		} else {
			this.setState({emailError: false})
			console.log("Email address valid")
		}
		this.setState({ submitClicked: true})
		if (!this.state.emailError && !this.state.passwordBadMatch && this.state.first_name != '' && this.state.country != '' && this.state.city != '' && this.state.postal_code != '' && this.state.phone_number != '') {
			console.log("email, password, first name, country, city, postal code and phone number are good")
			axios
				.post('/auth/signup', {
					first_name: this.state.first_name,
					middle_name: this.state.middle_name,
					last_name: this.state.last_name,
					country: this.state.country,
					city: this.state.city,
					postal_code: this.state.postal_code,
					phone_number: this.state.phone_number,
					email: this.state.email,
					username: this.state.email,
					password: this.state.password
				})
				.then(response => {
					console.log(response)
					if (!response.data.errmsg) {
						console.log('youre good')
						console.log(response.data)
						this.setState({
				            alert: true
				          })
					} else {
						console.log('duplicate')
					}
				})
		}
		event.preventDefault()
	}
		
	render() {
		console.log(this.state)
		
		return (
		<div>
			<div className="SignUpForm">
				<div className="leftColumn">
					<label htmlFor="first_name">First Name</label>
						<br />
					<input
						type="text"
						name="first_name"
						id="first_name"
						value={this.state.first_name}
						placeholder=". . ."
						onChange={this.handleChange}
						required="required"
					/>
						<br />
						<br />
					<label htmlFor="middle_name">Middle Name</label>
						<br />
					<input
						type="text"
						name="middle_name"
						id="middle_name"
						value={this.state.middle_name}
						placeholder=". . ."
						onChange={this.handleChange}
					/>
						<br />
						<br />
					<label htmlFor="last_name">Last Name</label>
						<br />
					<input
						type="text"
						name="last_name"
						id="last_name"
						value={this.state.last_name}
						placeholder=". . ."
						onChange={this.handleChange}
					/>
						<br />
						<br />
					<label htmlFor="country">Country</label>
						<br />
					<input
						type="text"
						name="country"
						id="country"
						value={this.state.country}
						placeholder=". . ."
						onChange={this.handleChange}
						required
					/>
						<br />
						<br />
					<label htmlFor="city">City</label>
						<br />
					<input
						type="text"
						name="city"
						id="city"
						value={this.state.city}
						placeholder=". . ."
						onChange={this.handleChange}
						required
					/>
				</div>

				<div className="rightColumn">
					<label htmlFor="postal_code">Postal Code</label>
						<br />
					<input
						type="text"
						name="postal_code"
						id="postal_code"
						value={this.state.postal_code}
						placeholder=". . ."
						onChange={this.handleChange}
						required
					/>
						<br />
						<br />
					<label htmlFor="phone_number">Phone Number</label>
						<br />
					<input
						type="text"
						name="phone_number"
						id="phone_number"
						value={this.state.phone_number}
						placeholder=". . ."
						onChange={this.handleChange}
						required
					/>
						<br />
						<br />
					<label htmlFor="email">Email</label>
						<br />
					<input
						type="email"
						name="email"
						id="email"
						value={this.state.email}
						placeholder=". . ."
						onChange={this.handleChange}
						required
					/>
						<br />
						<br />
					<label htmlFor="password">Password</label>
						<br />
					<input
						type="password"
						name="password"
						id="password"
						value={this.state.password}
						placeholder=". . ."
						onChange={this.handleChange}
						required
					/>
						<br />
						<br />
					<label htmlFor="confirmPassword">Confirm Password</label>
						<br />
					<input
						type="password"
						name="confirmPassword"
						id="confirmPassword"
						value={this.state.confirmPassword}
						placeholder=". . ."
						onChange={this.handleChange}
						required
					/>
				</div>
			</div>
			<span className="buttonContainer">
				<Button id="signUpSubmit-button" onClick={this.handleSubmit}>Sign up</Button>
			</span>
			{/*
			<div>
				{this.state.alert ? (
					<Alert color="success" style={{ marginTop: "10px" }}>
		        		You have successfully created an account! <a href="#" className="alert-link">Login here!</a>
		      		</Alert>
      			) : ("")}
      		</div>

      		<div>
				{this.state.passwordMatch ? (
					<Alert color="danger" style={{ marginTop: "10px" }}>
		        		Your passwords do not match.
		      		</Alert>
	  			) : ("")}
			</div>
			
			{this.state.submitClicked ? (
				<FormValidator state={this.state}/>
			) : ("")}
			*/}
      	</div>
		)
	}
}

export default SignupForm;