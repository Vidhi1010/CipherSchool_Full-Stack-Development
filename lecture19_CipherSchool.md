//functional component
function Pizza() {
    return(
        //React.createElement(div,.....)
        <div class='pizza'><h1>
            Pizza</h1>
            </div>
    )
}
ReactDom.render(<Pizza/>, document.getElementById('root'))
// HTML structure for demonstration (you would typically have this in an HTML file)
/*
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DOM vs Virtual DOM</title>
</head>
<body>
    <div id="root"></div>
    <script src="dom_vs_virtual_dom.js"></script>
</body>
</html>
*/

// DOM Manipulation

// Create a new element and append it to the DOM
const domRoot = document.getElementById('root');
const newElement = document.createElement('div');
newElement.innerHTML = 'This is a new element created using the DOM.';
domRoot.appendChild(newElement);

// Update the element
setTimeout(() => {
    newElement.innerHTML = 'The DOM element has been updated.';
}, 2000);

// Virtual DOM Example (using a simple representation)
class VirtualDOM {
    constructor() {
        this.virtualTree = this.createElement('div', { id: 'root' }, [
            this.createElement('div', null, 'This is a new element created using the Virtual DOM.')
        ]);
        this.domRoot = document.getElementById('root');
        this.updateDOM(this.domRoot, this.virtualTree);
    }

    // Function to create virtual elements
    createElement(type, props, children) {
        return { type, props, children };
    }

    // Function to update the real DOM based on the virtual tree
    updateDOM(parent, vNode) {
        const { type, props, children } = vNode;
        const element = document.createElement(type);

        if (props) {
            for (const prop in props) {
                element.setAttribute(prop, props[prop]);
            }
        }

        if (typeof children === 'string') {
            element.textContent = children;
        } else if (Array.isArray(children)) {
            children.forEach(child => this.updateDOM(element, child));
        }

        parent.appendChild(element);
    }

    // Function to diff and update the virtual DOM (simplified)
    updateVirtualDOM(newVirtualTree) {
        const newDomRoot = document.getElementById('root');
        this.domRoot.innerHTML = ''; // Clear the existing DOM
        this.updateDOM(newDomRoot, newVirtualTree);
    }
}

const virtualDOMInstance = new VirtualDOM();

// Update the Virtual DOM after 2 seconds
setTimeout(() => {
    const updatedVirtualTree = virtualDOMInstance.createElement('div', { id: 'root' }, [
        virtualDOMInstance.createElement('div', null, 'The Virtual DOM element has been updated.')
    ]);
    virtualDOMInstance.updateVirtualDOM(updatedVirtualTree);
}, 2000);

/*
Explanation:

1. **DOM Manipulation**:
    - Directly interacts with the DOM.
    - Creates and updates elements using `document.createElement` and `element.innerHTML`.
    - Immediate changes to the DOM.

2. **Virtual DOM**:
    - Uses a virtual representation of the DOM.
    - Changes are made to the virtual DOM and then compared (diffing) to the real DOM.
    - Updates the real DOM in batches, reducing the number of direct manipulations.

In this example, we:
- Create and update an element using direct DOM manipulation.
- Use a simple implementation of the Virtual DOM to create and update elements.
- The Virtual DOM updates are scheduled and applied in batches, simulating a more efficient update mechanism compared to direct DOM manipulation.
*/

