import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import { Button } from 'reactstrap';
import "./DonationForm.css";
import { Label, FormGroup, InputGroup, InputGroupAddon, InputGroupText, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
// import { Alert } from 'reactstrap';


class DonationForm extends Component {
	constructor() {
		super()
		this.state = {
			modal: false,
			backdrop: false
		}
		// this.googleSignin = this.googleSignin.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this);
		this.toggleModal = this.toggleModal.bind(this)
	}

	toggleModal() {
	    this.setState({ modal: !this.state.modal })
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		console.log(this.props)
		event.preventDefault()
		console.log('Donation Made!')
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
			return (
				<div className='donationForm'>
			      <h1>
			      	Make a Donation!
			      </h1>
			      <br />
			      <FormGroup>
			          <Label for="donationSelect">Select</Label>
			          	<br />
			          <Input type="select" name="select" id="donationSelect">
			          	<option>$0.00 - Select one or enter custom amount</option>
			            <option>$5.00 - Nice!</option>
			            <option>$10.00 - Alright!</option>
			            <option>$20.00 - You Rock!</option>
			            <option>$50.00 - So Generous!</option>
			            <option>100.00 - WOW!</option>
			          </Input>
			        </FormGroup>
			        <br />

			        <br />
			      	<br />
			      <Label for="customAmount">Custom</Label>
			      	<br />
			      <InputGroup id='customAmount'>
			        <InputGroupAddon addonType="prepend">$</InputGroupAddon>
			        <Input placeholder="Amount" type="number" step="1" />
			        <InputGroupAddon addonType="append">.00</InputGroupAddon>
			      </InputGroup>
			      <br />
			      <Button id="donateButton" onClick={this.toggleModal}>Donate!</Button>

	                <Modal
	                	className='donateModal'
	                    isOpen={this.state.modal} 
	                    toggle={this.toggleModal}  
	                    backdrop={this.state.backdrop}>
	                  <ModalHeader toggle={this.toggleModal}><h1>Thank you for giving!!</h1></ModalHeader>
	                    <ModalBody>
	                      <p>Your [amount] contribution makes a difference! Share your giving with pride, and encourage others to do the same!!</p>
	                    </ModalBody>
	                    <ModalFooter>
	                      <Button 
	                        size="sm"
	                        color="primary" 
	                        onClick={this.toggleModal}>Close
	                      </Button>
	                    </ModalFooter>
	                </Modal>

			    </div>
			)
	}
}

export default DonationForm;

