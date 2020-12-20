export function ProjectCard(props) {
    var bg_theme = props.bg_theme,
        mode = props.mode,
        tags = props.tags;

    bg_theme = bg_theme ? bg_theme : "";
    var badges = [];
    if (tags) {
        badges = tags.map(function (tag) {
            return React.createElement(
                "span",
                { key: tag, className: "techbadge" },
                tag
            );
        });
    }

    mode = 'light';
    var bgColor = mode == 'dark' ? 'darkcard' : '';
    var textclass = mode == 'dark' ? 'darkmodetext' : 'lightmodetext';
    var nametextcolor = mode === 'dark' ? 'white' : 'black';

    return React.createElement(
        "a",
        { href: props.link, className: bgColor + " clickablecard border-0" },
        React.createElement(
            "div",
            { className: "card border-0" },
            props.image && React.createElement("img", { src: props.image, className: "card-img-top", alt: "card image" }),
            React.createElement(
                "div",
                { className: "card-body " + bgColor },
                React.createElement(
                    "h5",
                    { className: "card-title", style: { color: nametextcolor } },
                    props.name
                ),
                React.createElement(
                    "p",
                    { className: "card-text description " + textclass },
                    props.description
                ),
                React.createElement(
                    "div",
                    null,
                    badges
                )
            )
        )
    );
}