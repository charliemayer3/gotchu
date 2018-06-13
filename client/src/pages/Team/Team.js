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
// import { Alert } from 'reactstrap';


class Team extends Component {
	constructor() {
		super()
		this.state = {
		}
	}

	render() {
			return (
				<div>
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
										CEO, Founder
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
										Head of Operations, Mechanical Engineer
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
										Jamison Day
									</span>
											<br />
									<span style={{ fontStyle: 'italic' }}>
										Advisor Supply Chain
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
								</div>
							</div>
							</Fade>
						</div>
					</div>
				</div>
			)
		}
	}

export default Team;