import React, { useState } from 'react';

// Controlled Component Form
function ControlledForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Submitted: ${JSON.stringify(formData)}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Controlled Form</h2>
            <div>
                <label>Name: </label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Email: </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Password: </label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

// Uncontrolled Component Form
function UncontrolledForm() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        alert(`Submitted: ${JSON.stringify(data)}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Uncontrolled Form</h2>
            <div>
                <label>Name: </label>
                <input type="text" name="name" />
            </div>
            <div>
                <label>Email: </label>
                <input type="email" name="email" />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" name="password" />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

// Parent Component that contains both forms
function App() {
    return (
        <div>
            <h1>React Forms</h1>
            <ControlledForm />
            <UncontrolledForm />
        </div>
    );
}

export default App;
