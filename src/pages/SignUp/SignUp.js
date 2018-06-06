import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom';
import { Button } from 'reactstrap';
import "./SignUp.css";
import { Alert } from 'reactstrap';

class Signup extends Component {
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
			alert: false
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
		event.preventDefault()
		console.log("click worked!");
		// TODO - validate!
		axios
			.post('/auth/signup', {
				first_name: this.state.brewery,
				middle_name: this.state.breweryURL,
				last_name: this.state.username,
				country: this.state.country,
				city: this.state.city,
				postal_code: this.state.postal_code,
				phone_number: this.state.phone_number,
				email: this.state.email,
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
	render() {
		if (this.state.redirectTo) {
			return <Redirect to={{ pathname: this.state.redirectTo }} />
		}
		return (
		<div>
			<div className="SignUpForm">
				<label htmlFor="first_name">First Name</label>
					<br />
				<input
					type="text"
					name="first_name"
					value={this.state.first_name}
					placeholder=". . ."
					onChange={this.handleChange}
				/>
					<br />
					<br />
				<label htmlFor="middle_name">Middle Name</label>
					<br />
				<input
					type="text"
					name="middle_name"
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
					value={this.state.last_name}
					placeholder=". . ."
					onChange={this.handleChange}
				/>
					<br />
					<br />
				<label htmlFor="country">County</label>
					<br />
				<input
					type="text"
					name="country"
					value={this.state.country}
					placeholder=". . ."
					onChange={this.handleChange}
				/>
					<br />
					<br />
				<label htmlFor="city">City</label>
					<br />
				<input
					type="text"
					name="city"
					value={this.state.city}
					placeholder=". . ."
					onChange={this.handleChange}
				/>
					<br />
					<br />
				<label htmlFor="postal_code">Postal Code</label>
					<br />
				<input
					type="text"
					name="postal_code"
					value={this.state.postal_code}
					placeholder=". . ."
					onChange={this.handleChange}
				/>
					<br />
					<br />
				<label htmlFor="phone_number">Phone Number</label>
					<br />
				<input
					type="text"
					name="phone_number"
					value={this.state.phone_number}
					placeholder=". . ."
					onChange={this.handleChange}
				/>
					<br />
					<br />
				<label htmlFor="email">Email</label>
					<br />
				<input
					type="text"
					name="email"
					value={this.state.email}
					placeholder=". . ."
					onChange={this.handleChange}
				/>
					<br />
					<br />
				<label htmlFor="password">Password</label>
					<br />
				<input
					type="password"
					name="password"
					value={this.state.password}
					placeholder=". . ."
					onChange={this.handleChange}
				/>
					<br />
					<br />
				<label htmlFor="confirmPassword">Confirm Password</label>
					<br />
				<input
					type="password"
					name="confirmPassword"
					value={this.state.confirmPassword}
					placeholder=". . ."
					onChange={this.handleChange}
				/>
					<br />
					<br />
				<Button id="signUpSubmit-button" onClick={this.handleSubmit}>Sign up</Button>
			</div>

			<div>
				{this.state.alert ? (
						<Alert color="success" style={{ marginTop: "10px" }}>
			        		You have successfully created an account! <a href="#" className="alert-link">Login here!</a>
			      		</Alert>
      			) : ("")}
      		</div>
      	</div>
		)
	}
}

export default Signup;