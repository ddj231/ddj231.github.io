'use-strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import { Header } from './header.js';
import { ProjectSet } from './projectset.js';
import { descriptions, links } from './descriptions.js';
import { Project } from './models/ProjectModel.js';
import { AboutSection } from './about.js';
import { Footer } from './footer.js';
import { ThemeToggler } from './themetoggler.js';

function App() {
	var _React$useState = React.useState("light"),
	    _React$useState2 = _slicedToArray(_React$useState, 2),
	    mode = _React$useState2[0],
	    setMode = _React$useState2[1];

	var aboutBgColor = mode == 'dark' ? 'darkmodesection2' : '';
	var projectsBgColor = mode == 'dark' ? 'darkmodesection' : 'bg-light';
	//let projectsId = mode == 'dark' ? 'projectsdark' : 'projects';
	console.log(projectsBgColor);
	var textclass = mode == 'dark' ? 'darkmodetext' : 'lightmodetext';

	var projects = [new Project("Handel", descriptions.handel, './Handel-Thumbnail-Updated.png', links.handel, ["programming language", "tone.js"])];
	return React.createElement(
		'div',
		{ className: 'fullscreen ' + aboutBgColor },
		React.createElement(
			'div',
			{ className: 'pagination-centered' },
			React.createElement(
				'div',
				{ id: 'about', className: 'infosection row h-50 ' + aboutBgColor },
				React.createElement(AboutSection, null)
			),
			React.createElement(
				'div',
				{ id: 'projects', className: 'infosection row h-50 ' + projectsBgColor },
				React.createElement(ProjectSet, { projects: projects })
			)
		),
		React.createElement(Footer, null)
	);
}

var domContainer = document.querySelector('#app');
ReactDOM.render(React.createElement(App, null), domContainer);