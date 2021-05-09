
export function AboutSection(props) {
    var mode = props.mode;

    mode = 'light';
    var bgColor = mode == 'dark' ? 'darkmodesection2' : '';
    var textclass = mode == 'dark' ? 'darkmodetext' : 'lightmodetext';
    console.log(textclass);
    var nametextcolor = mode === 'dark' ? 'white' : 'black';
    var githubIcon = void 0;
    var linkedinIcon = void 0;
    if (mode == 'dark') {
        githubIcon = React.createElement(
            'a',
            { href: 'https://github.com/ddj231' },
            React.createElement('img', { className: 'socialicon', src: './GitHub-Mark-Light-64px.png' })
        );
        linkedinIcon = React.createElement(
            'a',
            { href: 'https://www.linkedin.com/in/daye-jack/' },
            React.createElement('img', { className: 'socialicon', src: './linkedindarkmode.png' })
        );
    } else {
        githubIcon = React.createElement(
            'a',
            { href: 'https://github.com/ddj231' },
            React.createElement('img', { className: 'socialicon', src: './GitHub-Mark-64px.png' })
        );
        linkedinIcon = React.createElement(
            'a',
            { href: 'https://www.linkedin.com/in/daye-jack/' },
            React.createElement('img', { className: 'socialicon', src: './linkedInIcon.png' })
        );
    }

    return React.createElement(
        'div',
        { className: 'container h-100 ' + bgColor + ' ' + textclass },
        React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
                'div',
                { className: 'col-md-6 ' + textclass },
                React.createElement(
                    'h6',
                    { id: 'hello', className: textclass },
                    '\uD83D\uDC4B Hello!\uD83D\uDC4B My name is'
                ),
                React.createElement(
                    'h2',
                    { id: 'name', style: { color: nametextcolor } },
                    'Daye Jack.'
                ),
                React.createElement(
                    'p',
                    { className: 'intro' },
                    'I\'m a software developer from ',
                    React.createElement(
                        'a',
                        { className: 'prettylink',
                            href: 'https://www.google.com/maps/place/Duluth,+GA/@34.000135,-84.173485,13z/data=!3m1!4b1!4m5!3m4!1s0x88f5981d72a575a3:0x8526c08a3ce2d8e3!8m2!3d34.0028786!4d-84.1446376' },
                        'Duluth, GA'
                    ),
                    '.'
                ),
                React.createElement(
                    'p',
                    { className: 'intro' },
                    'I\'m currently working on cool things at Zoom.'
                ),
                React.createElement(
                    'p',
                    { className: 'intro' },
                    'I enjoy developement on all parts of the stack.'
                ),
                githubIcon,
                linkedinIcon
            ),
            React.createElement(
                'div',
                { className: 'col-md-6' },
                React.createElement('img', { id: 'profileimg', src: './ProfilePictureCartoon.png' })
            )
        )
    );
}