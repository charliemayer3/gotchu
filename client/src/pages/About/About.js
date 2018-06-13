import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import { Button } from 'reactstrap';
import "./About.css";
import Fade from 'react-reveal/Fade';
import textBack from '../../images/colorBack.png';
// import { Alert } from 'reactstrap';


class About extends Component {
	constructor() {
		super()
		this.state = {
		}
	}

	render() { 
		return ( 
			<div style={{ height: "100vh", overflow: 'hidden'}}> 
				<div className='aboutHeader'>
					<div style={{ width: '75vw', margin: 'auto'}}>
					<Fade top>
							<h3 id="aboutHeaderText">
								About Us
							</h3>
					</Fade>
					</div>
				</div>
				<div className="aboutContainer">
					<h4>
						<Fade bottom>
						Lab Mouse Security, Inc. provides advanced security solution for Blockchain and the Internet of Things (IoT) and is develops technologies that will enable people to do greater things with technology. Lab Mouse Security’s first product will be GotchU.
						</Fade>

						<br />
						<br />
						<Fade bottom>
						“Gotchu, the Blockchain based Localized Giving Platform.”
						</Fade>

						<br />
						<br />
						<Fade bottom>
						Gotchu was founded by veteran security researcher, Don Bailey, who has uncovered hundreds of security vulnerabilities in mobile, IoT, and embedded systems. Don has a history of ground-breaking research, protecting mobile users from worldwide tracking systems, securing automobiles from remote attack, and mitigating crippling IoT risks.
						</Fade>

						<br />
						<br />
						<Fade bottom>
						Email us at <a style={{ display: 'inline-block' }}href={"mailto:" + "hello@gotchu.world"}>hello@gotchu.world</a>
						</Fade>

						<br />
						<br />
					</h4>
				</div>
				<div id="aboutBackground">
						<img src={textBack}/>
					</div>
			</div>             
		)
	}     
}

export default About;

