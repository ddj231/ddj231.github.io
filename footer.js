
export function Footer(props) {
    var mode = props.mode;

    mode = 'light';
    var bgColor = mode == 'dark' ? 'darkmodesection2' : '';
    var textclass = mode == 'dark' ? 'darkmodetext' : 'lightmodetext';
    return React.createElement(
        'div',
        { className: bgColor + ' ' + textclass + ' infosection' },
        React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
                'div',
                { className: 'col-md-6 footertext ' + textclass },
                'Made with ',
                React.createElement(
                    'span',
                    { style: { color: "#e25555" } },
                    '\u2665'
                ),
                ' in Duluth, Georgia'
            )
        ),
        React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
                'div',
                { className: 'col-md-12 footertext ' + textclass },
                'Site format inspired by Aditi Mohanty\'s personal website'
            )
        ),
        React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
                'div',
                { className: 'col-12 footertext ' + textclass },
                React.createElement(
                    'i',
                    null,
                    '\xA9 2020 Copyright Daye Jack. All rights reserved'
                )
            )
        )
    );
}