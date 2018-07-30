import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import { Button } from 'reactstrap';
import "./Crisis.css";
import Fade from 'react-reveal/Fade';
import textBack from '../../images/colorBack.png';
// import { Alert } from 'reactstrap';


class Crisis extends Component {
	constructor() {
		super()
		this.state = {
		}
	}

	render() {  
		return (  
			<div className='crisisBody'>  

			<div className='crisisHeader'>
					<div style={{ width: '100vw', paddingLeft: '12vw', paddingRight: '12vw', margin: 'auto' }}>
					<Fade left>
							<h3 id="crisisHeaderText">
								The Crisis
							</h3>
					</Fade>
					</div>
				</div>
				<div className="crisisContainer">
					<h4>
					<Fade bottom> 
						With the increase of communities in crises, and concerns around non-secure and fraudulent donation platforms, the need for transparent giving solutions is high.
					</Fade>
					<br />
					<br />
					<Fade bottom> 
						Donors don’t know where all their money ultimately ends up, and many organizations cannot track every dollar of funds. 
					</Fade>
					<br />
					<br />
					<Fade bottom> 
						Gotchu will solve this problem by bringing transparency, security and efficiency with our proprietary blockchain technology, enabling users to see exactly who is benefiting from their purchases.
					</Fade>
					<br />
					<br />
					<Fade bottom> 
						Lab Mouse Security developed the technology in part with funding from:
						<ul>
							<li>
								The Department of Defense Advanced Research Projects Agency (DARPA)
							</li>
							<li>
								Groupe Spéciale Mobile Association (GSMA)
							</li>
						</ul>
					</Fade>
					</h4>
				</div>
				{/* <div class="crisisOcean">
					  <div class="crisisWave"></div>
					  <div class="crisisWave"></div>
				</div> */}
				<div id="crisisBackground">
					<img src={textBack}/>
				</div>
			</div>             
		)
	}     
}

export default Crisis;

