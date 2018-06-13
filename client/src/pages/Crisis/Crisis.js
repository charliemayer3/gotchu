import React, { Component } from 'react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom'
import { Button } from 'reactstrap';
import "./Crisis.css";
import Fade from 'react-reveal/Fade';
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
					<div style={{ width: '75vw', margin: 'auto'}}>
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
						With the increase of communities in need from
						natural, industrial and economic crises, and concerns around non-secure
						and fraudulant donation platforms, the need for transparent
						giving solutions is high. Donors don’t know where all their money
						ultimately ends up, and many organizations can not track every
						dollar of funds. Gotchu will solve this problem by bringing
						transparency, security and efficiency with our proprietary
						blockchain technology, enabling users to see exactly who is
						benefiting from their purchases.
					</Fade>
					<br />
					<br />
					<Fade bottom> 
						Lab Mouse Security selected Flint, Michigan, as our first test market
						because of the dire need there for solutions to bring clean water into
						people’s homes. In April 2018, state officials announced they would no
						longer provide free bottled water to the residents of Flint. Flint
						officials are aiming to replace more than 18,000 contaminated pipes by
						2020, but to date have replaced only about 6,200 pipes. The old pipes
						are still at risk of contamination by lead and other carcinogens. Lab
						Mouse Security wants to highlight the ongoing water issues in Flint
						and support a community in crisis.
					</Fade>
					<br />
					<br />
					<Fade bottom> 
						Gotchu community members will be able to purchase goods and services
						in specific categories of need, selecting communities they want to
						support, right down to the neighborhood. Benefactors, who can sign up
						for Gotchu services or be referred by a community partner, can go to a
						Gotchu pickup location, which will consist of a series of vending and
						locker hybrids, and retrieve items via SMS text, mobile App, or
						through a partnership code. The goal of Gotchu is to provide localized
						pickup locations that can be relocated to communities in need.
						Gotchu’s community members can easily view their impact, down to a
						fraction of a dollar, for every transaction, including when items are
						retrieved, how many community members they supported, and what
						percentage of their transaction went to energy, distribution, and
						maintenance costs.
					</Fade>
					<br />
					<br />
					<Fade bottom> 
						Lab Mouse Security developed the technology in part with funding from
						the Department of Defense Advanced Research Projects Agency (DARPA)
						and the Groupe Spéciale Mobile Association (GSMA). The goal of Gotchu
						is to leverage blockchain and IoT technologies, previously too
						expensive and impractical to use for global community engagement, as a
						platform enabling impact giving and resource allocation to adverse
						communities. “With this technology, we, as a global community, can
						come closer than ever before to developing truly transparent,
						meaningful relationships between anonymous contributors and receivers
						of goods and services,” says Bailey.
					</Fade>
					</h4>
					<br />
					<br />
					<br />
					<br />
					<br />
				</div>
				<div class="crisisOcean">
					  <div class="crisisWave"></div>
					  <div class="crisisWave"></div>
				</div>
			</div>             
		)
	}     
}

export default Crisis;

