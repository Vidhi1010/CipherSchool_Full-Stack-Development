import React, { useState, Component } from 'react';

// Functional Component with State using Hooks
function Counter() {
    // useState Hook to manage state in functional component
    const [count, setCount] = useState(0);

    return (
        <div>
            <h2>Functional Component Counter</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

// Class Component with State
class ClassCounter extends Component {
    constructor(props) {
        super(props);
        // Initialize state
        this.state = {
            count: 0
        };
    }

    // Method to increment the count
    increment = () => {
        this.setState({ count: this.state.count + 1 });
    };

    // Method to decrement the count
    decrement = () => {
        this.setState({ count: this.state.count - 1 });
    };

    render() {
        return (
            <div>
                <h2>Class Component Counter</h2>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }
}

// Parent Component that contains both counters
function App() {
    return (
        <div>
            <h1>React Components and State</h1>
            <Counter />
            <ClassCounter />
        </div>
    );
}

export default App;
