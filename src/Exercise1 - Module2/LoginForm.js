import React, { useState } from 'react';
import Dashboard from './Dashboard';
import './style.css'; 

function LogInForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [accountType, setAccountType] = useState('user');
    const [user, setUser] = useState(null);

    const handleLogin = () => {
        const isAdmin = accountType === 'admin';
        setUser({ name: username, isAdmin });
    };

    const handleSignup = () => {
        const isAdmin = accountType === 'admin';
        setUser({ name: username, isAdmin });
    };

    return (
        <div className="login-container">
            {user ? (
                <Dashboard user={user} />
            ) : (
                <div className="login-form">
                    <h1>Log In</h1>
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
                    <div className="form-group">
                        <label htmlFor="accountType">Account Type:</label>
                        <select 
                            id="accountType" 
                            onChange={(e) => setAccountType(e.target.value)} 
                            value={accountType}
                        >
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <button className="login-button" onClick={handleLogin}>Login</button>
                    <button className="signup-button" onClick={handleSignup}>Sign Up</button>
                </div>
            )}
        </div>
    );
}

export default LogInForm;
