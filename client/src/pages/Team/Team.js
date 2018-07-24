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

class Team extends Component {
	constructor() {
		super()
		this.state = {

		}
		this.nameArray = [
			{ 
				name: "Don Bailey",
				title: "CEO / Founder",
				image: Don,
				bio: "Don has a history of ground-breaking research that has protected mobile users from worldwide tracking system, secured automobiles from remote attack, and mitigated crippling IoT risks."
			},
			{ 
				name: "Robyn Tsukayama",
				title: "Chief of Operations",
				image: Robyn,
				bio: "Robyn is a diverse leader with experience in the automotive, consumer packaged goods, education, and social enterprise industries. She earned a B.S. in Mechanical Engineering from Kettering University, an MBA from Harvard Business School, and is a StartingBloc Fellow."
			},
			{ 
				name: "Charlie Mayer",
				title: "Web Development",
				image: Charlie,
				bio: "Charlie is a Full Stack Web Developer and web development teacher, whose expertise lies deepest in the MERN stack. While developing in JavaScript and React is Charlie's happy place, he is versed in everything from CSS to PHP."
			},
			{ 
				name: "Maxwell Cutri",
				title: "Web Development",
				image: Max,
				bio: "Maxwell is a Full Stack Web Developer with a passion for UX & UI. While JavaScript, React.js, and CSS3 are his most practiced languages, he enjoys developing custom web applications and encorporating his skills with Adobe Creative Suite and vector drawing software."
			},
		]
	}

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
								<div id="team-member">
									<div id='memberPic'>
										<img src={person.image} />
									</div>
									<div id='memberName'>
										<span style={{ fontSize: '25px' }}>
											{person.name}
										</span>
											<br />
										<span style={{ fontStyle: 'italic' }}>
											{person.title}
										</span>
											<br />
										<span style={{  }}>
											{person.bio}
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