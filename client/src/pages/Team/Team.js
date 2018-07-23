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
		this.nameArray = [
			{ 
				Name: "Don Bailey",
				Title: "CEO / Founder",
				Image: Don,
				Bio: "Don has a history of ground-breaking research that has protected mobile users from worldwide tracking system, secured automobiles from remote attack, and mitigated crippling IoT risks."
			},
			{ 
				Name: "Robyn Tsukayama",
				Title: "Chief of Operations",
				Image: Robyn,
				Bio: "Robyn is a diverse leader with experience in the automotive, consumer packaged goods, education, and social enterprise industries. She earned a B.S. in Mechanical Engineering from Kettering University, an MBA from Harvard Business School, and is a StartingBloc Fellow."
			},
			{ 
				Name: "Jamison M Day, PhD.",
				Title: "CEO / Founder",
				Image: Jamison,
				Bio: "Jamison is a Distinguished Data Scientist at LookingGlass Cyber Solutions, Inc. He served on a Supply Chain Security Team for the U.S. Director of National Intelligence. Jamison earned his Ph.D in Decision Science from Indiana University, and B.S. in Business Process Management."
			},
			{ 
				Name: "Charlie Mayer",
				Title: "Web Development",
				Image: Charlie,
				Bio: "Charlie is a Full Stack Web Developer and web development teacher, whose expertise lies deepest in the MERN stack. While developing in JavaScript and React is Charlie's happy place, he is versed in everything from CSS to PHP."
			},
			{ 
				Name: "Maxwell Cutri",
				Title: "Web Development",
				Image: Max,
				Bio: "Maxwell is a Full Stack Web Developer with a passion for UX & UI. While JavaScript, React.js, and CSS3 are his most practiced languages, he enjoys developing custom web applications and encorporating his skills with Adobe Creative Suite and vector drawing software."
			},
		]
	}

//objects Name, Title, Image, Bio
// USE FLEXBOX TO STYLE EACH DIV


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
					{this.nameArray.map((person) => {
						{console.log(person)}
						return (
							<div>
								<div id="don">
									<div id='donPic'>
										<img src={person.Image} />
									</div>
									<div id='donText'>
										<span style={{ fontSize: '25px' }}>
											{person.Name}
										</span>
											<br />
										<span style={{ fontStyle: 'italic' }}>
											{person.Title}
										</span>
											<br />
										<span style={{  }}>
											{person.Bio}
										</span>
									</div>
								</div>
							</div>
						)
					})}						

					<div id="teamBackground">
						<img src={textBack}/>
					</div>
				</div>
				</div>
			)
		}
	}

export default Team;