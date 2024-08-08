const createElement = (tagName, props, ...children) => {
	return {
		type: tagName,
		props,
		children,
	};
};

export const reactDOM = {
	createElement,
	createRoot(targetElement) {
		return {
			render(element) {
				const getType = (element) => {
					return typeof element.type === "string"
						? element
						: element.type(element.props);
				};
				const createdElement = document.createElement(
					getType(element).type,
				);
				const appendNodes = (element, parent) => {
					element.children.forEach((child) => {
						if (typeof child === "object") {
							const el = getType(child);
							const appendedElement =
								document.createElement(el.type);
							if (typeof child.type === "string")
								appendAttributes(
									appendedElement,
									child.props,
								);
							parent.appendChild(appendedElement);
							appendNodes(el, appendedElement);
						} else if (
							typeof child === "string" ||
							typeof child === "number"
						) {
							if (parent.innerHTML.length === 0)
								parent.innerText += child;
							else parent.innerHTML += child;
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
