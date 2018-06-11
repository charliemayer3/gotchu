import React, { Component } from 'react';
import { Alert } from 'reactstrap';
// import { FormErrors } from './FormErrors';
// import './Form.css';

class FormValidator extends Component {
  constructor (props) {
    super(props);
    this.state = {
      first_name: this.props.state.first_name,
      email: this.props.state.email,
      passwordsMatch: this.props.state.passwordAlert,
      password: '',
      formErrors: {email: '', password: ''},
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
  }

  validateField() {
    console.log("are you working?")
    // let fieldValidationErrors = this.state.formErrors;
  if (this.props.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
    this.setState({emailValid: true})
    console.log("IF")
  }
  else {
    console.log("ELSE")
  }




    // fieldValidationErrors.email = emailValid ? '' : ' is invalid';

    // let passwordValid = this.state.passwordValid;
    // if (this.state.email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/){
    //   this.setState({emailValid: true})
    // } else {
    //   console.log("email not valid")
    // }

    // switch(fieldName) {
    //   case 'email':
    //     emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    //     fieldValidationErrors.email = emailValid ? '' : ' is invalid';
    //     break;
    //   case 'password':
    //     passwordValid = value.length >= 6;
    //     fieldValidationErrors.password = passwordValid ? '': ' is too short';
    //     break;
    //   default:
    //     break;
    // }
    // this.setState({formErrors: fieldValidationErrors,
    //                 emailValid: emailValid,
    //                 passwordValid: passwordValid
    //               }, this.validateForm);
  }

  componentDidUpdate() {
    this.validateField();
  };


  render () {
    console.log(this.props.state.passwordAlert)
    // this.validateField()
    return (
      <div>
    
      <div>
        {!this.state.emailValid ? (
          <Alert color="success" style={{ marginTop: "10px" }}>
                You have successfully created an account! <a href="#" className="alert-link">Login here!</a>
              </Alert>
            ) : ("")}
          </div>

          <div>
        {!this.state.passwordsMatch ? (
          <Alert color="danger" style={{ marginTop: "10px" }}>
                Your passwords do not match.
              </Alert>
          ) : ("")}
      </div>
      </div>
     
    )
  }
}

export default FormValidator;