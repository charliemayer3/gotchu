import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import { Button } from 'reactstrap';
import "./Mission.css";
import textBack from '../../images/textBack.png';
import Fade from 'react-reveal/Fade';
// import { Alert } from 'reactstrap';


class Mission extends Component {
	constructor() {
		super()
		this.state = {
		}
	}

	render() {
			return (
				<div className="missionPage">
					<div className="missionContainer">
						<Fade left>
							<h3 id='missionHeader'>
								The Mission
							</h3>
						</Fade>

						<Fade right>
						<h4 id='missionText'>
							“Gotchu, the Blockchain based Giving Platform that localizes giving through our secure IoT technology.”
						</h4>
						</Fade>
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