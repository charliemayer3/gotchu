import React from 'react';
import './css/demo.css';
import './css/menu_wave.css';
import './css/normalize.css';
import './js/main3.js';
import './js/classie.js';




export default class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
	}
  };


  render() {
  	return(

	<body>
		<div className="container">
			<div className="menu-wrap">
				<nav className="menu">
					<div className="icon-list">
						<a href="#"><i className="fa fa-fw fa-star-o"></i><span>Favorites</span></a>
						<a href="#"><i className="fa fa-fw fa-bell-o"></i><span>Alerts</span></a>
						<a href="#"><i className="fa fa-fw fa-envelope-o"></i><span>Messages</span></a>
						<a href="#"><i className="fa fa-fw fa-comment-o"></i><span>Comments</span></a>
						<a href="#"><i className="fa fa-fw fa-bar-chart-o"></i><span>Analytics</span></a>
						<a href="#"><i className="fa fa-fw fa-newspaper-o"></i><span>Reading List</span></a>
					</div>
				</nav>
				<button className="close-button" id="close-button">Close Menu</button>
				<div className="morph-shape" id="morph-shape" data-morph-open="M0,100h1000V0c0,0-136.938,0-224,0C583,0,610.924,0,498,0C387,0,395,0,249,0C118,0,0,0,0,0V100z">
					<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 1000 100" preserveAspectRatio="none">
						<path d="M0,100h1000l0,0c0,0-136.938,0-224,0c-193,0-170.235-1.256-278-35C399,34,395,0,249,0C118,0,0,100,0,100L0,100z"/>
					</svg>
				</div>
			</div>
			<button className="menu-button" id="open-button">Open Menu</button>
			<div className="content-wrap">
				<div className="content">
					<header className="codrops-header">
						<div className="codrops-links">
							<a className="codrops-icon codrops-icon-prev" href="http://tympanus.net/Development/TabStylesInspiration/"><span>Previous Demo</span></a>
							<a className="codrops-icon codrops-icon-drop" href="http://tympanus.net/codrops/?p=20100"><span>Back to the Codrops Article</span></a>
						</div>
						<h1>Off-Canvas Menu Effects <span>Showing (off-canvas) menus stylishly</span></h1>
						<nav className="codrops-demos">
							<a href="index.html">Top Side</a>
							<a href="sideslide.html">Side Slide</a>
							<a href="cornerbox.html">Corner Box</a>
							<a href="cornerbox_nested.html">Nested Corner Box</a>
							<a href="topexpand.html">Top Expand</a>
							<a href="cornermorph.html">Corner Morph</a>
							<a href="elastic.html">Elastic</a>
							<a href="bubble.html">Bubble</a>
							<a className="current-demo" href="wave.html">Wave</a>
						</nav>
					</header>
					<section className="related">
						<p>If you enjoyed this demo you might also like:</p>
						<a href="http://tympanus.net/Development/SidebarTransitions/">
							<img src="img/related/sidebartransitions.png" />
							<h3>Transitions for Off-Canvas Navigations</h3>
						</a>
						<a href="http://tympanus.net/Development/PerspectivePageViewNavigation/">
							<img src="img/related/PerspectiveNavigation.png" />
							<h3>Perspective Page View Navigation</h3>
						</a>
					</section>
				</div>
			</div>
		</div>
		<script src="js/classie.js"></script>
		<script src="js/main3.js"></script>
	</body>
)
}
};