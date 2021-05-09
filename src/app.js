'use-strict';
import {Header} from './header.js';
import {ProjectSet} from './projectset.js';
import {descriptions, links} from './descriptions.js';
import { Project } from './models/ProjectModel.js';
import {AboutSection}  from './about.js'
import {Footer}  from './footer.js'
import { ThemeToggler } from './themetoggler.js';

function App(){
		let [mode, setMode] = React.useState("light");

		let aboutBgColor = mode == 'dark' ? 'darkmodesection2' : '';
		let projectsBgColor = mode == 'dark' ? 'darkmodesection' : 'bg-light';
		//let projectsId = mode == 'dark' ? 'projectsdark' : 'projects';
		console.log(projectsBgColor);
		let textclass = mode == 'dark' ? 'darkmodetext' : 'lightmodetext';

		let projects = [
			new Project("Handel", descriptions.handel, './Handel-Thumbnail-Updated.png', links.handel,
			["programming language", "tone.js"]	
			)
		]
		return(
			<div className={`fullscreen ${aboutBgColor}`}>
			<div className={`pagination-centered`}>
			<div id="about" className={`infosection row h-50 ${aboutBgColor}`}>
			<AboutSection/>
			</div>
			<div id="projects" className={`infosection row h-50 ${projectsBgColor}`}>
			<ProjectSet projects={projects}/>	
			</div>
			</div>
			<Footer />
			</div>
		)
}


let domContainer = document.querySelector('#app');
ReactDOM.render(<App />, domContainer);
