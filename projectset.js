'use-strict';

import { ProjectCard } from './project.js';

export function ProjectSet(props) {
    var mode = props.mode,
        projects = props.projects;

    mode = 'light';
    var bgColor = mode == 'dark' ? 'darkmodesection' : 'bg-light';
    var textclass = mode == 'dark' ? 'darkmodetext' : 'lightmodetext';
    var nametextcolor = mode === 'dark' ? 'white' : 'black';
    var cards = projects.map(function (project) {
        var name = project.name,
            description = project.description,
            image = project.image,
            link = project.link,
            tags = project.tags;

        return React.createElement(
            'div',
            { key: name, className: 'col-md-4 border-0' },
            React.createElement(ProjectCard, { tags: tags, name: name, description: description, image: image, link: link })
        );
    });
    return React.createElement(
        'div',
        { className: 'container ' + bgColor + ' ' + textclass },
        React.createElement(
            'h2',
            { style: { color: nametextcolor }, id: 'projectsheader ' + textclass },
            'Most Recent Side Project'
        ),
        React.createElement(
            'div',
            { className: 'row' },
            cards
        )
    );
}