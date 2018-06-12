import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import { Button } from 'reactstrap';
import "./About.css";
import Fade from 'react-reveal/Fade';
// import { Alert } from 'reactstrap';


class About extends Component {
	constructor() {
		super()
		this.state = {
		}
	}

	render() { 
		return ( 
			<div> 
				<div className="aboutContainer">
					<h4>
						<Fade bottom>
						Lab Mouse Security, Inc. provides advanced security solution for
						Blockchain and the Internet of Things (IoT) and is develops
						technologies that will enable people to do greater things with
						technology. Lab Mouse Security’s first product will be GotchU.
						</Fade>

						<br />
						<br />
						<Fade bottom>
						“Gotchu, the Blockchain based Localized Giving Platform.”
						</Fade>

						<br />
						<br />
						<Fade bottom>
						Gotchu was founded by veteran security researcher, Don Bailey, who has
						uncovered hundreds of security vulnerabilities in mobile, IoT, and
						embedded systems. Don has a history of ground-breaking research,
						protecting mobile users from worldwide tracking systems, securing
						automobiles from remote attack, and mitigating crippling IoT risks.
						</Fade>

						<br />
						<br />
						<Fade bottom>
						Robyn Tsukayama, Chief of Operations, is a diverse leader with
						experience in the automotive, consumer packaged goods, education, and
						social enterprise industries. She earned a B.S. in Mechanical
						Engineering from Kettering University, an MBA from Harvard Business
						School, and is a StartingBloc Fellow.
						</Fade>

						<br />
						<br />
						<Fade bottom>
						For more information visit gotchu.world or email us at hello@labmou.se
						</Fade>
					</h4>
				</div>
			</div>             
		)
	}     
}

export default About;

