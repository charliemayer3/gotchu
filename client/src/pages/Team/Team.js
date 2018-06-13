import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import { Button } from 'reactstrap';
import "./Team.css";
import Fade from 'react-reveal/Fade';
import Don from '../../images/don.jpg';
import Robyn from '../../images/robyn.jpg';
import Jamison from '../../images/jamison.png';
import Charlie from '../../images/charlie.jpg';
import Max from '../../images/max.jpg';
import textBack from '../../images/colorBack.png';
// import { Alert } from 'reactstrap';


class Team extends Component {
	constructor() {
		super()
		this.state = {
		}
	}

	render() {
			return (
				<div className='teamBody'>
				<div className='teamHeader'>
					<div style={{ width: '75vw', margin: 'auto'}}>
					<Fade left>
							<h3 id="teamHeaderText">
								The Team
							</h3>
					</Fade>
					</div>
				</div>
					<div className="teamContainer">
						<Fade top>
						<div id='container1'>
							<div id="don">
								<div id='donPic'>
									<img src={Don} />
								</div>
								<div id='donText'>
									<span style={{ fontSize: '25px' }}>
										Don Bailey
									</span>
										<br />
									<span style={{ fontStyle: 'italic' }}>
										CEO / Founder
									</span>
										<br />
									<span style={{  }}>
										Don has a history of ground-breaking research that has protected mobile users from worldwide tracking system, secured automobiles from remote attack, and mitigated crippling IoT risks.
									</span>
								</div>
							</div>
						</div>
						</Fade>

						<div id='container2'>
							<Fade left>
							<div id="robyn">
								<div id='robynPic'>
									<img src={Robyn} />
								</div>
								<div id='robynText'>
									<span style={{ fontSize: '25px' }}>
										Robyn Tsukayama
									</span>
										<br />
									<span style={{ fontStyle: 'italic' }}>
										Chief of Operations
									</span>
										<br />
									<span style={{ width: '20%' }}>
										Robyn is a diverse leader with experience in the automotive, consumer packaged goods, education, and social enterprise industries. She earned a B.S. in Mechanical Engineering from Kettering University, an MBA from Harvard Business School, and is a StartingBloc Fellow.
									</span>
								</div>
							</div>
							</Fade>
							<Fade right>
							<div id="jamison">
								<div id='jamisonPic'>
									<img src={Jamison} />
								</div>
								<div id='jamisonText'>
									<span style={{ fontSize: '25px' }}>
										Jamison M Day, PhD.
									</span>
										<br />
									<span style={{ fontStyle: 'italic', marginBottom: '50px' }}>
										Consultant for Supply Chain Distribution
									</span>
										<br />
									<span style={{ width: '20%' }}>
										Jamison is a Distinguished Data Scientist at LookingGlass Cyber Solutions, Inc. He served on a Supply Chain Security Team for the U.S. Director of National Intelligence. Jamison earned his Ph.D in Decision Science from Indiana University, and B.S. in Business Process Management.
									</span>
								</div>
							</div>
							</Fade>
						</div>

						<div id='container3'>
							<Fade left>
							<div id="charlie">
								<div id='charliePic'>
									<img src={Charlie} />
								</div>
								<div id='charlieText'>
									<span style={{ fontSize: '25px' }}>
										Charlie Mayer
									</span>
										<br />
									<span style={{ fontStyle: 'italic' }}>
										Web Development
									</span>
										<br />
									<span style={{ width: '20%' }}>
									Charlie is a Full Stack Web Developer and web development teacher, whose expertise lies deepest in the MERN stack.  While developing in JavaScript and React is Charlie's happy place, he is versed in everything from CSS to PHP.
									</span>
								</div>
							</div>
							</Fade>
							<Fade right>
							<div id="max">
								<div id='maxPic'>
									<img src={Max} />
								</div>
								<div id='maxText'>
									<span style={{ fontSize: '25px' }}>
										Maxwell Cutri
									</span>
										<br />
									<span style={{ fontStyle: 'italic' }}>
										Web Development
									</span>
										<br />
									<span style={{ width: '20%' }}>
										Maxwell is a Full Stack Web Developer with a passion for UX & UI.

										While JavaScript, React.js, and CSS3 are his most practiced languages, he enjoys developing custom web applications and encorporating his skills with Adobe Creative Suite and vector drawing software.
									</span>
								</div>
							</div>
							</Fade>
						</div>
					</div>
					<div id="teamBackground">
						<img src={textBack}/>
					</div>
				</div>
			)
		}
	}

export default Team;