export const reactDOM = {
	createElement(tagName, props, ...children) {
		return {
			type: tagName,
			props,
			children,
		};
	},
	createRoot(targetElement) {
		return {
			render(element) {
				const createdElement = document.createElement(element.type);
				const appendNodes = (element, parent) => {
					element.children.forEach((child) => {
						if (typeof child === "object") {
							const appendedElement =
								document.createElement(child.type);
							appendAttributes(
								appendedElement,
								child.props,
							);
							parent.appendChild(appendedElement);
							appendNodes(child, appendedElement);
						} else if (
							typeof child === "string" ||
							typeof child === "number"
						) {
							parent.innerHTML += child;
						}
					});
				};

				appendNodes(element, createdElement);
				targetElement.appendChild(createdElement);
			},
		};
	},
};

const appendAttributes = (element, props) => {
	for (let i = 0; i < Object.keys(props).length; i++) {
		const propName = Object.keys(props)[i];
		const propValue = props[propName];
		element.setAttribute(propName, propValue);
	}
};
