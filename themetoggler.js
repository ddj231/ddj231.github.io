
export function ThemeToggler(props) {
    var mode = props.mode;

    var modeText = mode == 'dark' ? 'dark' : 'light';
    var bgColor = mode == 'dark' ? 'bg-dark' : 'bg-light';
    var textclass = mode == 'dark' ? 'lighttext' : 'darktext';
    return React.createElement(
        'div',
        { className: 'container' },
        React.createElement(
            'div',
            { className: 'row' },
            React.createElement(
                'div',
                { className: 'form-check form-switch toggler' },
                React.createElement('input', { className: 'form-check-input bg-dark', defaultChecked: true, type: 'checkbox', id: 'flexSwitchCheckDefault' })
            )
        )
    );
}