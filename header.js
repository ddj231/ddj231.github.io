
export function Header() {
	return React.createElement(
		"div",
		{ id: "header", className: "navbar navbar-expand-lg navbar-light bg-light" },
		React.createElement(
			"div",
			{ className: "container-fluid" },
			React.createElement(
				"div",
				{ id: "navbarNav" },
				React.createElement(
					"ul",
					{ className: "navbar-nav" },
					React.createElement(
						"li",
						{ className: "nav-item" },
						React.createElement(
							"a",
							{ className: "nav-link active", href: "https://github.com/ddj231" },
							"Projects"
						)
					),
					React.createElement(
						"li",
						{ className: "nav-item" },
						React.createElement(
							"a",
							{ className: "nav-link active", href: "https://github.com/ddj231" },
							"Github"
						)
					),
					React.createElement(
						"li",
						{ className: "nav-item" },
						React.createElement(
							"a",
							{ className: "nav-link active", href: "#" },
							"About"
						)
					)
				)
			)
		)
	);
}