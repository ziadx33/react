import { reactDOM } from "./libs/reactDOM";

function main() {
	return reactDOM.createElement(
		"div",
		{},
		reactDOM.createElement(
			"header",
			{ class: "text-blue-600" },
			reactDOM.createElement("h1", {}, "header"),
		),
		reactDOM.createElement(
			"ul",
			{ class: "text-red-600" },
			reactDOM.createElement("li", {}, "list 1"),
			reactDOM.createElement("li", {}, "list 2"),
		),
	);
}

const root = reactDOM.createRoot(document.querySelector("#root"));
root.render(main());
