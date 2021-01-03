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
			),
			new Project("React Native Highlightr", 
			descriptions.react_native_highlightr, './react_native_highlightr.png', 
			links.react_native_highlightr,
			["react native", "native ui components"]	
			),
			new Project("Watch VR", 
			descriptions.watch_vr, './watch_vr.png', 
			links.watch_vr,
			["aframe", "vr"]
			),
			new Project("Mobile Coder (Mobile)", 
			descriptions.mobile_coder_mobile, './mobile_coder_mobile.png', 
			links.mobile_coder_mobile,
			["react native", "firebase/firestore", "firebase/auth"]
			),
			new Project("Mobile Coder (Desktop)", descriptions.mobile_coder_desktop, './mobile_coder_desktop.png', 
			links.mobile_coder_desktop,
			["nodejs", "firebase/firestore", "firebase/auth"]
			),
			new Project("Moo Chat", descriptions.moo_chat, './moo_chat.png', links.moo_chat, ["p5.js", "socket.io", "node/express"]),
			new Project("Garden Simulator", descriptions.garden_simulator,
			 './garden_simulator.png', 
			links.garden_simulator,
			["p5.js", "perlin noise"]
			),
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
