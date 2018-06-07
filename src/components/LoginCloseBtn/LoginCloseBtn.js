import React, {Component} from 'react'
import styles from './LoginCloseBtn.css'

class LoginCloseBtn extends Component {

  render() {
    return (
      <button id="loginCloseBtn" onClick={this.props.toggleLoginModal}>
      	CLICK HERE TO CLOSE
      </button>
    );
  }
}
 
export default LoginCloseBtn;