'use-strict';
import {ProjectCard} from './project.js';

export function ProjectSet(props){
    let {mode, projects} = props;
    mode = 'light';
    let bgColor = mode == 'dark' ? 'darkmodesection' : 'bg-light';
    let textclass = mode == 'dark' ? 'darkmodetext' : 'lightmodetext';
    let nametextcolor = mode === 'dark' ? 'white' : 'black';
    let cards = projects.map((project) => {
        let {name, description, image, link, tags} = project;
        return(
            <div key={name} className="col-md-4 border-0">
            <ProjectCard  tags={tags} name={name} description={description} image={image} link={link}/>
            </div>
        )
    })
    return(
        <div className={`container ${bgColor} ${textclass}`}>
			<h2 style={{color: nametextcolor}} id={`projectsheader ${textclass}`}>Most Recent Side Project</h2>
            <div className="row">
                {cards}
            </div>
        </div>
    );
}