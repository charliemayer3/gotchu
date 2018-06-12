import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import { Button } from 'reactstrap';
import "./Mission.css";
import textBack from '../../images/textBack.png';
// import { Alert } from 'reactstrap';


class Mission extends Component {
	constructor() {
		super()
		this.state = {
		}
	}

	render() {
			return (
				<div>
					<div className="missionContainer">

					<h4 id='missionText'>
						“Gotchu, the Blockchain based Giving Platform that localizes giving through our secure IoT technology.”
					</h4>
					</div>

					<div class="ocean">
					  <div class="wave"></div>
					  <div class="wave"></div>
					</div>
				</div>
			)
		}
	}

export default Mission;