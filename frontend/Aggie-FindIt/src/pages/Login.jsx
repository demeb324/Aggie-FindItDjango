import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    useEffect(() => {
        // Clear error message on component mount
        setError('');
    }, []);
    
    const handleLogin = (e) => {
        e.preventDefault();
        // Simulate login logic
        if (username === 'admin' && password === 'password') {
        alert('Login successful!');
        // Redirect or perform further actions
        } else {
        setError('Invalid username or password');
        }
    };
    
    return (
        <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
            <div className="form-group">
            <label htmlFor="username">Username:</label>
            <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
            />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <Link to="/register">Register here</Link></p>
        </div>
    );
}

export default Login;