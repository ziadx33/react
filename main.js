import { reactDOM } from "./libs/reactDOM";

function card({ title, description, buttonText, buttonLink }) {
	console.log("lil title:", title);
	return reactDOM.createElement(
		"div",
		{ className: "card" },
		reactDOM.createElement("h1", { className: "card-title" }, title),
		description &&
			reactDOM.createElement(
				"p",
				{ className: "card-text" },
				description,
			),
		buttonText &&
			reactDOM.createElement(
				"a",
				{ className: "card-button", href: buttonLink },
				buttonText,
			),
	);
}

function main() {
	return reactDOM.createElement(
		"div",
		{},
		reactDOM.createElement("h1", {}, "posts (as you can see)"),
		reactDOM.createElement(
			card,
			{
				title: "Card Title 1",
				description: "This is a description for card 1.",
				buttonText: "Learn More",
				buttonLink: "https://google.com",
			},
			{},
		),
		reactDOM.createElement(
			card,
			{
				title: "Card Title 2",
				description: "This is a description for card 2.",
				buttonText: "Discover",
				buttonLink: "https://yotube.com",
			},
			{},
		),
		reactDOM.createElement(
			card,
			{
				title: "Card Title 3",
				description: "This is a description for card 3.",
				buttonText: "Get Started",
				buttonLink: "https://facebook.com",
			},
			{},
		),
	);
}

const root = reactDOM.createRoot(document.querySelector("#root"));
root.render(main());
